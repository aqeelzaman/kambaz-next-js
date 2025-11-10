/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import FormControl from "react-bootstrap/esm/FormControl";
import InputGroup from "react-bootstrap/esm/InputGroup";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { BsGripVertical } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentBarControlButtons from "./AssignmentBarControlButtons";
import { MdOutlineAssignment } from "react-icons/md";
import { redirect, useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector(
    (state: RootState) => state.assignmentsReducer
  );
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const handleAddAssignment = () => {
    if (currentUser.role !== "FACULTY") {
      alert(`Not a faculty. \n(Log in with username: admin, password: admin)`);
    } else {
      redirect(`/Courses/${cid}/Assignments/new`);
    }
  };

  const handleClick = (a: any) => {
    if (currentUser.role !== "FACULTY") {
      alert(`Not a faculty. \n(Log in with username: admin, password: admin)`);
    } else {
      redirect(`/Courses/${cid}/Assignments/${a._id}`);
    }
  };

  const formattedDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return (
      date.toLocaleDateString("en-US", { month: "long" }) +
      ` ${date.getDate() + 1}`
    );
  };

  return (
    <div>
      <div id="wd-assignments">
        <div id="wd-assignments-controls">
          <Button
            variant="danger"
            size="lg"
            className="float-end me-1"
            id="wd-add-assignment"
            onClick={handleAddAssignment}
          >
            + Assignment
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="float-end me-2"
            id="wd-add-assignment-group"
          >
            + Group
          </Button>
          <div className="col-md-6">
            <InputGroup>
              <InputGroupText className="bg-white">
                <FaSearch />
              </InputGroupText>
              <FormControl
                size="lg"
                id="wd-search-assignment"
                placeholder="Search..."
                className="border-start-0"
              />
            </InputGroup>
          </div>
          <br />

          <ListGroup className="rounded-0" id="wd-assignments">
            <ListGroupItem className="wd-assignment-group p-0 mb-4 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                Assignments
                <AssignmentBarControlButtons />
                <div className="float-end fs-6 pt-1 me-1 wd-show-pill">
                  40% of total
                </div>
              </div>
              <ListGroup className="wd-assignments rounded-0">
                {assignments
                  .filter((assignment: any) => assignment.course === cid)
                  .map((assignment: any) => (
                    <ListGroupItem
                      key={assignment._id}
                      className="wd-assignment p-3 ps-2"
                      action
                      onClick={() => handleClick(assignment)}
                    >
                      <div className="wd-assignment-container">
                        <BsGripVertical className="fs-3 float-start" />
                        <MdOutlineAssignment className="text-success float-start fs-3 me-2" />
                        <div className="float-start col">
                          <h4>{assignment.title}</h4>
                          <span className="text-danger">
                            Multiple Modules
                          </span>{" "}
                          |<b> Not available until </b>
                          {formattedDate(assignment.availableDate)}
                          &nbsp;at 12:00am |
                          <br />
                          <b>Due </b>
                          {formattedDate(assignment.dueDate)}
                          &nbsp;at 11:59pm |&nbsp;
                          {assignment.points} points
                        </div>
                      </div>
                      <AssignmentControlButtons assignment={assignment} />
                    </ListGroupItem>
                  ))}
              </ListGroup>
            </ListGroupItem>
          </ListGroup>
        </div>
      </div>

      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="wd-assignment-group p-0 mb-4 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Quizzes
            <AssignmentBarControlButtons />
            <div className="float-end fs-6 pt-1 me-1 wd-show-pill">
              10% of total
            </div>
          </div>
        </ListGroupItem>
      </ListGroup>

      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="wd-assignment-group p-0 mb-4 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Exams
            <AssignmentBarControlButtons />
            <div className="float-end fs-6 pt-1 me-1 wd-show-pill">
              20% of total
            </div>
          </div>
        </ListGroupItem>
      </ListGroup>

      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="wd-assignment-group p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Projects
            <AssignmentBarControlButtons />
            <div className="float-end fs-6 pt-1 me-1 wd-show-pill">
              30% of total
            </div>
          </div>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
