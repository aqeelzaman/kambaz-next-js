/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Table } from "react-bootstrap";
import PeopleDetails from "../Details/page";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import * as client from "../../../../Account/client";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";

export default function PeopleTable({
  users = [],
  fetchUsers,
}: {
  users?: any[];
  fetchUsers: () => void;
}) {
  const { cid } = useParams();
  const [localUsers, setLocalUsers] = useState<any[]>(users ?? []);
  const [loaded, setLoaded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showUserId, setShowUserId] = useState<string>("");

  useEffect(() => {
    if (users && users.length > 0) {
      setLocalUsers(users);
      setLoaded(true);
      return;
    }
    if (!loaded) {
      const load = async () => {
        try {
          const found = await client.findUsersForCourse(cid as string);
          setLocalUsers(found ?? []);
        } catch (err) {
          console.error(err);
          setLocalUsers([]);
        } finally {
          setLoaded(true);
        }
      };
      void load();
    }
  }, [users, cid, loaded]);

  if (localUsers.length > 0) {
    users = localUsers;
  }

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty =
    currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN";

  return (
    <div id="wd-people-table">
      {isFaculty && showDetails && (
        <PeopleDetails
          uid={showUserId}
          onClose={() => {
            setShowDetails(false);
            fetchUsers();
          }}
        />
      )}
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <span
                  className="text-decoration-none"
                  onClick={() => {
                    setShowDetails(true);
                    setShowUserId(user._id);
                  }}
                >
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">{user.firstName} </span>
                  <span className="wd-last-name">{user.lastName}</span>
                </span>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
