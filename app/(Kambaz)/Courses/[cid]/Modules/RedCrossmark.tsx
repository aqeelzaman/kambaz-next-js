import { FaCircle } from "react-icons/fa";
import { TbCancel } from "react-icons/tb";
export default function GrayCrossmark() {
  return (
    <span className="me-1 position-relative">
      <TbCancel
        style={{ top: "-1.5px", left: "-0.5px", fontSize: "1.5rem" }}
        className="text-secondary me-1 position-absolute"
      />
      <FaCircle className="text-white fs-4" />
    </span>
  );
}
