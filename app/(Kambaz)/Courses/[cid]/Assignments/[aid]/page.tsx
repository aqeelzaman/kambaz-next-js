import AssignmentBuilder from "./AssignmentBody";
import AssignmentSidebar from "./AssignmentSidebar";
export default function Home() {
  return (
    <div id="wd-home">
      <div className="d-flex" id="wd-home">
        <div className="flex-fill ms-2 me-3">
          <AssignmentBuilder />
        </div>
        <div className="d-none d-xl-block">
          <AssignmentSidebar />
        </div>
      </div>
    </div>
  );
}