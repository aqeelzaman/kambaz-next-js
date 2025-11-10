/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  Button,
  CardText,
  CardTitle,
  FormControl,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import { RootState } from "../store";
import { enroll, unenroll } from "./reducer";

export default function Dashboard() {
  interface User {
    _id: string;
    name?: string;
    role?: string;
  }

  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  ) as { currentUser: User | null };

  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const dispatch = useDispatch();
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });
  const [showAllCourses, setShowAllCourses] = useState(false);
  const { enrollments } = useSelector(
    (state: RootState) => state.enrollmentsReducer
  );

  const isEnrolled = (courseId: string) => {
    if (!currentUser) return false;
    return enrollments.some(
      (enrollment) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );
  };

  const isFaculty = currentUser?.role === "FACULTY";

  const ensureFaculty = (action: Function) => {
    if (!isFaculty) {
      alert(`Not a faculty. \n(Log in with username: admin, password: admin)`);
      return;
    }
    action();
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">
        Dashboard
        <Button
          variant="primary"
          className="mt-2 float-end"
          id="wd-enrollments-btn"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "Show My Enrollments" : "Show All Courses"}
        </Button>
      </h1>
      <hr />
      <h5>
        New Course
        <Button
          className="btn btn-primary float-end mb-2"
          id="wd-add-new-course-click"
          onClick={() => ensureFaculty(() => dispatch(addNewCourse(course)))}
        >
          Add
        </Button>
        <button
          className="btn btn-warning float-end me-2"
          onClick={() => ensureFaculty(() => dispatch(updateCourse(course)))}
          id="wd-update-course-click"
        >
          Update
        </button>
        <br />
        <FormControl
          value={course.name}
          className="mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <FormControl
          as="textarea"
          value={course.description}
          rows={3}
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
        />
      </h5>
      <hr />
      <h2 id="wd-dashboard-published">
        {showAllCourses
          ? `Published Courses (${courses.length})`
          : "My Courses"}
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses
            .filter((course) => {
              if (showAllCourses) return true;
              return (
                currentUser &&
                enrollments.some(
                  (enrollment) =>
                    enrollment.user === currentUser._id &&
                    enrollment.course === course._id
                )
              );
            })
            .map((course) => {
              const enrolled = isEnrolled(course._id);
              return (
                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                  <Card>
                    <Link
                      href={`/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                    >
                      <CardImg
                        src={course.image}
                        variant="top"
                        width="100%"
                        height={160}
                      />
                      <CardBody className="card-body">
                        <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                          {course.name}
                        </CardTitle>
                        <CardText
                          className="wd-dashboard-course-description overflow-hidden"
                          style={{ height: "100px" }}
                        >
                          {course.description}
                        </CardText>
                        <Button
                          variant={enrolled ? "danger" : "success"}
                          onClick={(e) => {
                            e.preventDefault();
                            if (!currentUser) {
                              alert("You must be logged in to enroll!");
                              return;
                            }
                            if (enrolled) {
                              dispatch(
                                unenroll({
                                  user: currentUser._id,
                                  course: course._id,
                                })
                              );
                            } else {
                              dispatch(
                                enroll({
                                  user: currentUser._id,
                                  course: course._id,
                                })
                              );
                            }
                          }}
                        >
                          {enrolled ? "Unenroll" : "Enroll"}
                        </Button>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            dispatch(deleteCourse(course._id));
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                        <button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      </CardBody>
                    </Link>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </div>
    </div>
  );
}
