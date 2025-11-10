/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ReactNode, useState } from "react";
import CourseNavigation from "./Navigation";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { RootState } from "../../store";
import { FaAlignJustify } from "react-icons/fa";
import Breadcrumb from "./Breadcrumb";
export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams();
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const course = courses.find((course: any) => course._id === cid);
  const [showNav, setShowNav] = useState(true);
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify
          className="me-4 fs-4 mb-1"
          onClick={() => setShowNav((prev) => !prev)}
        />
        {course?.name}
        <Breadcrumb />
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          {showNav && <CourseNavigation />}
        </div>
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
