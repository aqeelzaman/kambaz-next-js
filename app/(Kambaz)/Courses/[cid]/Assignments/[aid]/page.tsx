export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <p />
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <p />
      <textarea id="wd-description">
        The assignment is available online. Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your full name and section, links to each of the lab
        assignments, links to the Kambaz application, links to all relevant
        source code repositories. The Kambaz application should include a link
        to navigate back to the landing page.
      </textarea>
      <p />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" defaultValue={100} />
          </td>
        </tr>
        <p />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option selected value="ASSIGNMENTS">
                ASSIGNMENTS
              </option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
            </select>
          </td>
        </tr>
        <p />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade As</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option selected value="Percentage">
                Percentage
              </option>
              <option value="Points">Points</option>
            </select>
          </td>
        </tr>
        <p />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option selected value="Online">
                Online
              </option>
              <option value="Offline">Offline</option>
            </select>
          </td>
        </tr>
        <p />
        <tr>
          <td />
          <td valign="top">
            Online Entry Options
            <br />
            <input type="checkbox" id="wd-text-entry" />{" "}
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input type="checkbox" id="wd-website-url" />{" "}
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input type="checkbox" id="wd-media-recordings" />{" "}
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input type="checkbox" id="wd-student-annotation" />{" "}
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />
            <input type="checkbox" id="wd-file-upload" />{" "}
            <label htmlFor="wd-file-upload">File Uploads</label>
            <br />
          </td>
        </tr>
        <p />
        <tr>
          <td align="right" valign="top">
            Assign
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign to</label>
            <br />
            <input id="wd-assign-to" defaultValue="Everyone" />
            <p />
            <label htmlFor="wd-due-date">Due Date</label>
            <br />
            <input id="wd-due-date" type="date" defaultValue="2024-05-13" />
          </td>
        </tr>
        <p />
        <tr>
          <td />
          <td>
            <label htmlFor="wd-available-from">Available from</label>
            <br />
            <input
              id="wd-available-from"
              type="date"
              defaultValue="2024-05-06"
            />
          </td>
          <td align="left" valign="top">
            <label htmlFor="wd-available-until">Until</label>
            <br />
            <input
              id="wd-available-until"
              type="date"
              defaultValue="2024-05-20"
            />
          </td>
        </tr>
      </table>
      <hr />
      <div>
        <button style={{ float: "right" }} id="wd-save">
          Save
        </button>
        <button style={{ float: "right" }} id="wd-cancel">
          Cancel
        </button>
      </div>
    </div>
  );
}
