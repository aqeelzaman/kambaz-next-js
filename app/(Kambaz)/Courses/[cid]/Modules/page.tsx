import { ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControl";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 1, Lecture 1
            <ModuleControlButtons />
          </div>

          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-2">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-2">
              <BsGripVertical className="me-2 fs-3" />
              <span className="ps-5">Introduction to the course</span>
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-2">
              <BsGripVertical className="me-2 fs-3" />
              <span className="ps-5">Learn what is Web Development</span>
              <LessonControlButtons />
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-2">
              <BsGripVertical className="me-2 fs-3" />
              READING
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-2">
              <BsGripVertical className="me-2 fs-3" />
              <span className="ps-5">
                Full Stack Developer - Chapter 1 - Introduction
              </span>
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-2">
              <BsGripVertical className="me-2 fs-3" />
              <span className="ps-5">
                Full Stack Developer - Chapter 2 - Creating User
              </span>
              <LessonControlButtons />
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-2">
              <BsGripVertical className="me-2 fs-3" />
              SLIDES
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-2">
              <BsGripVertical className="me-2 fs-3" />
              <span className="ps-5">Creating a HTTP server with Node.js</span>
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-2">
              <BsGripVertical className="me-2 fs-3" />
              <span className="ps-5">Creating a React Application</span>
              <LessonControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>

        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 1, Lecture 2
            <ModuleControlButtons />
          </div>

          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-2">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-2">
              <BsGripVertical className="me-2 fs-3" />
              <span className="ps-5">
                Learn how to create user interfaces with HTML
              </span>
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-2">
              <BsGripVertical className="me-2 fs-3" />
              <span className="ps-5">Deploy the assignment to Netlify</span>
              <LessonControlButtons />
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-2">
              <BsGripVertical className="me-2 fs-3" />
              SLIDES
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-2">
              <BsGripVertical className="me-2 fs-3" />
              <span className="ps-5">Introduction to HTML and DOM</span>
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-2">
              <BsGripVertical className="me-2 fs-3" />
              <span className="ps-5">
                Formatting Web content with Headings and Paragraphs
              </span>
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-2">
              <BsGripVertical className="me-2 fs-3" />
              <span className="ps-5">
                Formatting Web content with Lists and Tables
              </span>
              <LessonControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
