import Link from "next/link";
import { FormControl, FormSelect } from "react-bootstrap";
export default function Profile() {
  return (
    <div id="wd-profile-screen" style={{ width: "30%" }}>
      <h1>Profile</h1>

      <FormControl
        defaultValue="alice"
        id="wd-username"
        placeholder="username"
        className="mb-2"
      />

      <FormControl
        defaultValue="123"
        id="wd-password"
        placeholder="password"
        className="mb-2"
      />

      <FormControl
        defaultValue="Alice"
        id="wd-firstname"
        placeholder="First Name"
        className="mb-2"
      />

      <FormControl
        defaultValue="Wonderland"
        id="wd-lastname"
        placeholder="Last Name"
        className="mb-2"
      />

      <FormControl
        defaultValue="2000-01-01"
        type="date"
        id="wd-dob"
        className="mb-2"
      />

      <FormControl
        defaultValue="alice@wonderland"
        type="email"
        id="wd-email"
        placeholder="Email"
        className="mb-2"
      />

      <FormSelect id="wd-role">
        <option value="0" defaultChecked>
          FACULTY
        </option>
        <option value="1">STUDENT</option>
      </FormSelect>
      <br />

      <Link href="/Account/Signin" className="btn btn-danger w-100 mb-2">
        Sign out{" "}
      </Link>
    </div>
  );
}
