/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa6";
import { deleteAssignment } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "next/navigation";

export default function AssignmentControlButtons({
  assignment,
}: {
  assignment: any;
}) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const handleDelete = (a: any) => {
    if (currentUser?.role !== "FACULTY") {
      alert(`Not a faculty. \n(Log in with username: admin, password: admin)`);
      return;
    }
    if (window.confirm(`Delete assignment "${a.title}"?`)) {
      dispatch(deleteAssignment(a._id));
    }
    redirect(`/Courses/${assignment.course}/Assignments`);
  };
  return (
    <div className="float-end">
      <FaTrash
        className="text-danger me-2 mb-1"
        onClick={(e) => {
          e.stopPropagation();
          handleDelete(assignment);
        }}
      />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
