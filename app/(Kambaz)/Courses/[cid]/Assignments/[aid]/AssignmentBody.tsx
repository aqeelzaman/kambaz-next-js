import {
  FormLabel,
  FormControl,
  FormSelect,
  FormCheck,
  Button,
} from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
      <FormControl
        id="wd-name"
        className="mb-3"
        type="text"
        defaultValue={"A1"}
      />

      <FormControl
        as="textarea"
        rows={15}
        defaultValue={
          "The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section, links to each of the lab assignments, links to the Kambaz application, links to all relevant source code repositories. The Kambaz application should include a link to navigate back to the landing page."
        }
      ></FormControl>

      <div className="container-fluid pt-3">
        <div className="row mb-3">
          <div className="col-3 text-end">
            <FormLabel htmlFor="wd-points">Points</FormLabel>
          </div>
          <div className="col-9">
            <FormControl
              className="ps-1"
              id="wd-points"
              type="number"
              defaultValue={"100"}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-3 text-end">
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
          <div className="col-3 text-end">
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
          <div className="col-3 text-end">
            <FormLabel htmlFor="wd-submission-type">Submission Type</FormLabel>
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
          <div className="col-3 text-end">
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
                defaultValue="2024-05-13"
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
                  defaultValue="2024-05-06"
                />
              </div>
              <div className="col">
                <FormControl
                  id="wd-available-until"
                  type="date"
                  defaultValue="2024-05-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div>
        <Button
          variant="danger"
          style={{ float: "right" }}
          className="me-2"
          id="wd-save"
        >
          Save
        </Button>
        <Button
          variant="secondary"
          style={{ float: "right" }}
          className="me-1"
          id="wd-cancel"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
