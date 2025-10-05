import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import FormControl from "react-bootstrap/esm/FormControl";
import InputGroup from "react-bootstrap/esm/InputGroup";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { BsGripVertical } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentBarControlButtons from "./AssignmentBarControlButtons";
import { MdOutlineAssignment } from "react-icons/md";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div>
      <div id="wd-assignments">
        <div id="wd-assignments-controls">
          <Button
            variant="danger"
            size="lg"
            className="float-end me-1"
            id="wd-add-assignment"
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
              <InputGroupText>
                <FaSearch />
              </InputGroupText>
              <FormControl
                size="lg"
                id="wd-search-assignment"
                placeholder="Search..."
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
                  40% of total{" "}
                </div>
              </div>

              <ListGroup className="wd-assignments rounded-0">
                <ListGroupItem
                  className="wd-assignment p-3 ps-2"
                  action
                  href={`/Courses/${cid}/Assignments/123`}
                >
                  <div className="wd-assignment-container">
                    <BsGripVertical className="fs-3 float-start" />
                    <MdOutlineAssignment className="text-success float-start fs-3 me-2" />
                    <div className="float-start col">
                      <h3>A1</h3>
                      <span className="text-danger">Multiple Modules</span> |
                      <b> Not available until</b> May 6 at 12:00am |
                      <br />
                      <b>Due</b> May 13 at 11:59pm | 100 pts
                    </div>
                  </div>
                  <AssignmentControlButtons />
                </ListGroupItem>

                <ListGroupItem
                  className="wd-assignment p-3 ps-2"
                  action
                  href={`/Courses/${cid}/Assignments/234`}
                >
                  <div className="wd-assignment-container">
                    <BsGripVertical className="fs-3 float-start" />
                    <MdOutlineAssignment className="text-success float-start fs-3 me-2" />
                    <div className="float-start">
                      <h3>A2</h3>
                      <span className="text-danger">Multiple Modules</span> |
                      <b> Not available until</b> May 13 at 12:00am |
                      <br />
                      <b>Due</b> May 20 at 11:59pm | 100 pts
                    </div>
                  </div>
                  <AssignmentControlButtons />
                </ListGroupItem>

                <ListGroupItem
                  className="wd-assignment p-3 ps-2"
                  action
                  href={`/Courses/${cid}/Assignments/345`}
                >
                  <div className="wd-assignment-container">
                    <BsGripVertical className="fs-3 float-start" />
                    <MdOutlineAssignment className="text-success float-start fs-3 me-2" />
                    <div className="float-start">
                      <h3>A3</h3>
                      <span className="text-danger">Multiple Modules</span> |
                      <b> Not available until</b> May 20 at 12:00am |
                      <br />
                      <b>Due</b> May 27 at 11:59pm | 100 pts
                    </div>
                  </div>
                  <AssignmentControlButtons />
                </ListGroupItem>
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
              10% of total{" "}
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
              20% of total{" "}
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
              30% of total{" "}
            </div>
          </div>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
