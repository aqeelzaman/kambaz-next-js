"use client";
import {
  FormLabel,
  FormControl,
  FormSelect,
  FormCheck,
  Button,
} from "react-bootstrap";
import { assignments } from "../../../../Database/index";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const allAssignments = assignments.filter((a) => a._id === aid);
  return (
    <div id="wd-assignments-editor">
      {allAssignments.map((assignment) => (
        <div key={assignment._id}>
          <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
          <FormControl
            id="wd-name"
            className="mb-3"
            type="text"
            defaultValue={`${assignment.title}`}
          />

          <FormControl
            as="textarea"
            rows={15}
            defaultValue={`${assignment.description}`}
          ></FormControl>

          <div className="container-fluid pt-3">
            <div className="row mb-3">
              <div className="col-3 text-end pt-2">
                <FormLabel htmlFor="wd-points">Points</FormLabel>
              </div>
              <div className="col-9">
                <FormControl
                  className="ps-1"
                  id="wd-points"
                  type="number"
                  defaultValue={`${assignment.points}`}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-3 text-end pt-2">
                <FormLabel htmlFor="wd-group">Assignment Group</FormLabel>
              </div>
              <div className="col-9">
                <FormSelect id="wd-group">
                  <option value="0" defaultChecked>
                    ASSIGNMENTS
                  </option>
                  <option value="1">QUIZZES</option>
                  <option value="2">EXAMS</option>
                </FormSelect>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-3 text-end pt-2">
                <FormLabel htmlFor="wd-display-grade-as">
                  Display Grade As
                </FormLabel>
              </div>
              <div className="col-9">
                <FormSelect id="wd-display-grade-as">
                  <option value="0" defaultChecked>
                    Percentage
                  </option>
                  <option value="1">Points</option>
                </FormSelect>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-3 text-end pt-2">
                <FormLabel htmlFor="wd-submission-type">
                  Submission Type
                </FormLabel>
              </div>
              <div className="col-9 wd-show-border">
                <div className="row m-2 mt-3 mb-3">
                  <FormSelect id="wd-submission-type">
                    <option value="0" defaultChecked>
                      Online
                    </option>
                    <option value="1">Offline</option>
                  </FormSelect>
                </div>
                <div className="row m-1">
                  <FormLabel>
                    <h6>Online Entry Options</h6>
                  </FormLabel>
                </div>
                <div className="row m-1 mb-2">
                  <div className="form-check">
                    <FormCheck
                      className="ps-2"
                      type="checkbox"
                      id="wd-text-entry"
                    />
                    <FormLabel className="ps-2" htmlFor="wd-text-entry">
                      Text Entry
                    </FormLabel>

                    <FormCheck
                      className="ps-2"
                      type="checkbox"
                      id="wd-website-url"
                    />
                    <FormLabel className="ps-2" htmlFor="wd-website-url">
                      Website URL
                    </FormLabel>

                    <FormCheck
                      className="ps-2"
                      type="checkbox"
                      id="wd-media-recordings"
                    />
                    <FormLabel className="ps-2" htmlFor="wd-media-recordings">
                      Media Recordings
                    </FormLabel>

                    <FormCheck
                      className="ps-2"
                      type="checkbox"
                      id="wd-student-annotation"
                    />
                    <FormLabel className="ps-2" htmlFor="wd-student-annotation">
                      Student Annotation
                    </FormLabel>

                    <FormCheck
                      className="ps-2"
                      type="checkbox"
                      id="wd-file-upload"
                    />
                    <FormLabel className="ps-2" htmlFor="wd-file-upload">
                      File Uploads
                    </FormLabel>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-3 text-end pt-2">
                <FormLabel>Assign</FormLabel>
              </div>
              <div className="col-9 wd-show-border">
                <div className="row ms-1 mt-3">
                  <FormLabel htmlFor="wd-assign-to">
                    <h5>
                      <b>Assign to</b>
                    </h5>
                  </FormLabel>
                </div>
                <div className="row ms-2 pe-3">
                  <FormControl
                    id="wd-assign-to"
                    type="text"
                    defaultValue={"Everyone"}
                  />
                </div>
                <div className="row ms-1 mt-4">
                  <FormLabel htmlFor="wd-due-date">
                    <h5>
                      <b>Due Date</b>
                    </h5>
                  </FormLabel>
                </div>
                <div className="row ms-2 pe-3">
                  <FormControl
                    id="wd-due-date"
                    type="date"
                    defaultValue={assignment.dueDate}
                  />
                </div>
                <div className="row ms-1 mt-4">
                  <div className="col">
                    <FormLabel htmlFor="wd-available-from">
                      <h5>
                        <b>Available from</b>
                      </h5>
                    </FormLabel>
                  </div>
                  <div className="col">
                    <FormLabel htmlFor="wd-available-until">
                      <h5>
                        <b>Until</b>
                      </h5>
                    </FormLabel>
                  </div>
                </div>
                <div className="row ms-0 mb-4">
                  <div className="col">
                    <FormControl
                      id="wd-available-from"
                      type="date"
                      defaultValue={assignment.availableDate}
                    />
                  </div>
                  <div className="col">
                    <FormControl
                      id="wd-available-until"
                      type="date"
                      defaultValue={assignment.dueDate}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <hr />
      <div>
        <Link href={`/Courses/${cid}/Assignments`}>
          <Button
            variant="danger"
            style={{ float: "right" }}
            className="me-2"
            id="wd-save"
          >
            Save
          </Button>
        </Link>
        <Link href={`/Courses/${cid}/Assignments`}>
          <Button
            variant="secondary"
            style={{ float: "right" }}
            className="me-1"
            id="wd-cancel"
          >
            Cancel
          </Button>
        </Link>
      </div>
    </div>
  );
}
