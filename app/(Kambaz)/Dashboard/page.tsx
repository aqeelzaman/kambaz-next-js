/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
"use client";
import { useEffect, useState } from "react";
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
import { updateCourse, setCourses } from "../Courses/reducer";
import { RootState } from "../store";
import { setEnrollments, enroll, unenroll } from "./reducer";
import * as client from "../Courses/client";

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

  const fetchCourses = async () => {
    try {
      const myCourses = await client.fetchAllCourses();
      dispatch(setCourses(myCourses));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  const [showAllCourses, setShowAllCourses] = useState(false);

  const { enrollments } = useSelector(
    (state: RootState) => state.enrollmentsReducer
  );

  const fetchEnrollments = async () => {
    if (!currentUser) return;
    try {
      const userEnrollments = await client.findEnrollmentsForUser("current");
      dispatch(setEnrollments(userEnrollments));
    } catch (error) {
      console.error("Error fetching enrollments:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
    if (currentUser) {
      fetchEnrollments();
    }
  }, [currentUser]);

  const onAddNewCourse = async (course: any) => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
  };

  const onDeleteCourse = async (courseId: string) => {
    const status = await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course) => course._id !== courseId)));
  };

  const onUpdateCourse = async (course: any) => {
    await client.updateCourse(course);
    dispatch(
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
      )
    );
  };

  const isEnrolled = (courseId: string) => {
    if (!currentUser) return false;
    return enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );
  };

  const handleEnroll = async (courseId: string) => {
    if (!currentUser) {
      alert("You must be logged in to enroll!");
      return;
    }

    try {
      const enrollment = await client.enrollInCourse("current", courseId);
      dispatch(enroll({ user: currentUser._id, course: courseId }));
    } catch (error) {
      console.error("Error enrolling:", error);
      alert("Failed to enroll in course");
    }
  };

  const handleUnenroll = async (courseId: string) => {
    if (!currentUser) return;

    try {
      await client.unenrollFromCourse("current", courseId);
      dispatch(unenroll({ user: currentUser._id, course: courseId }));
    } catch (error) {
      console.error("Error unenrolling:", error);
      alert("Failed to unenroll from course");
    }
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
        {currentUser && (
          <Button
            variant="primary"
            className="mt-2 float-end"
            id="wd-enrollments-btn"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            {showAllCourses ? "Show My Enrollments" : "Show All Courses"}
          </Button>
        )}
      </h1>
      <hr />
      {isFaculty && (
        <div>
          <h5>
            New Course
            <Button
              className="btn btn-primary float-end mb-2"
              id="wd-add-new-course-click"
              onClick={() => ensureFaculty(() => onAddNewCourse(course))}
            >
              Add
            </Button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={() => ensureFaculty(() => onUpdateCourse(course))}
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
        </div>
      )}
      <h2 id="wd-dashboard-published">
        {currentUser
          ? showAllCourses
            ? `Published Courses (${courses.length})`
            : `My Courses`
          : "Log in to see courses"}
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses
            .filter((course) => {
              if (showAllCourses) {
                return true;
              } else {
                return isEnrolled(course._id);
              }
            })
            .map((course) => {
              const enrolled = isEnrolled(course._id);
              return (
                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                  <Card>
                    <Link
                      href={
                        isFaculty || enrolled
                          ? `/Courses/${course._id}/Home`
                          : "/Dashboard"
                      }
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
                        {showAllCourses && (
                          <Button
                            variant={enrolled ? "danger" : "success"}
                            onClick={(e) => {
                              e.preventDefault();
                              if (enrolled) {
                                handleUnenroll(course._id);
                              } else {
                                handleEnroll(course._id);
                              }
                            }}
                          >
                            {enrolled ? "Unenroll" : "Enroll"}
                          </Button>
                        )}
                        {!showAllCourses && (
                          <Button variant="primary">Go</Button>
                        )}
                        {isFaculty && (
                          <Button
                            onClick={(event) => {
                              event.preventDefault();
                              onDeleteCourse(course._id);
                            }}
                            className="float-end"
                            id="wd-delete-course-click"
                            variant="danger"
                          >
                            Delete
                          </Button>
                        )}
                        {isFaculty && (
                          <Button
                            id="wd-edit-course-click"
                            variant="warning"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="me-2 float-end"
                          >
                            Edit
                          </Button>
                        )}
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
