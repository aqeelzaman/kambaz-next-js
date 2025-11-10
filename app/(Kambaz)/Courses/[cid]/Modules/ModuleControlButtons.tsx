/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaPlus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { useSelector } from "react-redux";
export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  const ensureFaculty = (action: Function) => {
    if (!isFaculty) {
      alert(`Not a faculty. \n(Log in with username: admin, password: admin)`);
      return;
    }
    action();
  };

  return (
    <div className="float-end">
      <FaPencil
        onClick={() => ensureFaculty(() => editModule(moduleId))}
        className="text-primary me-3"
      />
      <FaTrash
        className="text-danger me-2 mb-1"
        onClick={() => ensureFaculty(() => deleteModule(moduleId))}
      />
      <GreenCheckmark />
      <FaPlus />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
