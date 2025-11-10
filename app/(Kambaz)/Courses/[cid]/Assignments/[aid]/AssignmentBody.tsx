/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  FormLabel,
  FormControl,
  FormSelect,
  FormCheck,
  Button,
} from "react-bootstrap";
import { redirect, useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "../reducer";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../../../../store";

export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const dispatch = useDispatch();
  const isNew = aid === "new";
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { assignments } = useSelector(
    (state: RootState) => state.assignmentsReducer
  );
  const isFaculty = currentUser?.role === "FACULTY";
  const [assignment, setAssignment] = useState(() => {
    if (!isNew && assignments.length > 0) {
      const a = assignments.find((a: any) => a._id === aid) || assignments[0];
      return {
        _id: a._id,
        title: a.title || "",
        description: a.description || "",
        points: a.points || 100,
        dueDate: a.dueDate || "",
        availableDate: a.availableDate || "",
      };
    }
    return {
      _id: uuidv4(),
      title: "",
      description: "",
      points: 100,
      dueDate: "",
      availableDate: "",
    };
  });

  const save = () => {
    if (currentUser?.role !== "FACULTY") return;
    if (isNew)
      dispatch(
        addAssignment({
          ...assignment,
          course: cid,
        })
      );
    else
      dispatch(
        updateAssignment({
          ...assignments[0],
          ...assignment,
          course: cid,
        })
      );
    redirect(`/Courses/${cid}/Assignments`);
  };

  const cancel = () => {
    redirect(`/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor">
      <h3>
        {isFaculty
          ? isNew
            ? "Create New Assignment"
            : "Edit Assignment"
          : "View Assignment"}
      </h3>
      <div>
        <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
        <FormControl
          id="wd-name"
          className="mb-3"
          type="text"
          placeholder="Assignment Title"
          value={assignment.title}
          disabled={!isFaculty}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
        />

        <FormControl
          as="textarea"
          rows={15}
          value={assignment.description}
          disabled={!isFaculty}
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
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
                value={assignment.points}
                disabled={!isFaculty}
                onChange={(e) =>
                  setAssignment({
                    ...assignment,
                    points: Number(e.target.value),
                  })
                }
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-3 text-end pt-2">
              <FormLabel htmlFor="wd-group">Assignment Group</FormLabel>
            </div>
            <div className="col-9">
              <FormSelect id="wd-group" disabled={!isFaculty}>
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
              <FormSelect id="wd-display-grade-as" disabled={!isFaculty}>
                <option value="0" defaultChecked>
                  Percentage
                </option>
                <option value="1">Points</option>
              </FormSelect>
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-3 text-end pt-4">
              <FormLabel htmlFor="wd-submission-type">
                Submission Type
              </FormLabel>
            </div>
            <div className="col-9 wd-show-border">
              <div className="row m-2 mt-3 mb-3">
                <FormSelect id="wd-submission-type" disabled={!isFaculty}>
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
                    disabled={!isFaculty}
                  />
                  <FormLabel className="ps-2" htmlFor="wd-text-entry">
                    Text Entry
                  </FormLabel>

                  <FormCheck
                    className="ps-2"
                    type="checkbox"
                    id="wd-website-url"
                    disabled={!isFaculty}
                  />
                  <FormLabel className="ps-2" htmlFor="wd-website-url">
                    Website URL
                  </FormLabel>

                  <FormCheck
                    className="ps-2"
                    type="checkbox"
                    id="wd-media-recordings"
                    disabled={!isFaculty}
                  />
                  <FormLabel className="ps-2" htmlFor="wd-media-recordings">
                    Media Recordings
                  </FormLabel>

                  <FormCheck
                    className="ps-2"
                    type="checkbox"
                    id="wd-student-annotation"
                    disabled={!isFaculty}
                  />
                  <FormLabel className="ps-2" htmlFor="wd-student-annotation">
                    Student Annotation
                  </FormLabel>

                  <FormCheck
                    className="ps-2"
                    type="checkbox"
                    id="wd-file-upload"
                    disabled={!isFaculty}
                  />
                  <FormLabel className="ps-2" htmlFor="wd-file-upload">
                    File Uploads
                  </FormLabel>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-3 text-end mt-2 pt-2">
              <FormLabel htmlFor="wd-submission-type">Assign</FormLabel>
            </div>
            <div className="col-9 text-end pt-2 wd-show-border">
              <div className="row me-2">
                <FormControl
                  id="wd-due-date"
                  className="ms-2"
                  type="date"
                  value={assignment.dueDate}
                  disabled={!isFaculty}
                  onChange={(e) =>
                    setAssignment({ ...assignment, dueDate: e.target.value })
                  }
                />
                <div className="row me-1 mt-4">
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
                      value={assignment.availableDate}
                      disabled={!isFaculty}
                      onChange={(e) =>
                        setAssignment({
                          ...assignment,
                          availableDate: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col">
                    <FormControl
                      id="wd-available-until"
                      type="date"
                      value={assignment.dueDate}
                      disabled={!isFaculty}
                      onChange={(e) =>
                        setAssignment({
                          ...assignment,
                          dueDate: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div>
        {isFaculty && (
          <Button
            variant="danger"
            style={{ float: "right" }}
            className="me-2"
            id="wd-save"
            onClick={save}
          >
            Save
          </Button>
        )}
        <Button
          variant="secondary"
          style={{ float: "right" }}
          className="me-1"
          id="wd-cancel"
          onClick={cancel}
        >
          {isFaculty ? "Cancel" : "Go Back"}
        </Button>
      </div>
    </div>
  );
}
