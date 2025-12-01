/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "next/navigation";
import * as client from "../../client";
import { setAssignments } from "./reducer";

export default function AssignmentControlButtons({
  assignment,
}: {
  assignment: any;
}) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const handleDelete = async (a: any) => {
    if (currentUser?.role !== "FACULTY" && currentUser?.role !== "ADMIN") {
      alert(
        `Not a faculty or admin. \n(Log in with username: ada, password: 123)`
      );
      return;
    }
    if (window.confirm(`Delete assignment "${a.title}"?`)) {
      await client.deleteAssignment(a.course, a._id);
      dispatch(
        setAssignments(
          assignments.filter((assignment: any) => assignment._id !== a._id)
        )
      );
    }
    redirect(`/Courses/${assignment.course}/Assignments`);
  };

  return (
    <div className="float-end">
      <FaTrash
        className="text-danger me-2 mb-1"
        onClick={(e) => {
          e.stopPropagation();
          handleDelete(assignment);
        }}
      />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
