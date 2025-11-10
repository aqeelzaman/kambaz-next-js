/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaCalendarAlt, FaCog, FaInbox } from "react-icons/fa";
import { FaBook, FaRegCircleUser } from "react-icons/fa6";
import { usePathname } from "next/navigation";
export default function KambazNavigation() {
  const pathname = usePathname();
  const links = [
    { label: "Dashboard", path: "/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Courses", icon: FaBook },
    { label: "Calendar", path: "/Calendar", icon: FaCalendarAlt },
    { label: "Inbox", path: "/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: FaCog },
  ];
  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 100 }}
      id="wd-kambaz-navigation"
    >
      <ListGroupItem
        action
        className="bg-black border-0 text-center"
        as="a"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
      >
        <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
      </ListGroupItem>

      <ListGroupItem
        as={Link}
        href="/Account"
        id="wd-account-link"
        className={`border-0 bg-black text-center
      ${
        pathname.includes("Account")
          ? "bg-white text-danger"
          : "bg-black text-white"
      }`}
      >
        <FaRegCircleUser
          className={`fs-1 ${
            pathname.includes("Account") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Account
      </ListGroupItem>
      {links.map((link) => (
        <ListGroupItem
          key={link.path}
          as={Link}
          href={link.path}
          className={`bg-black text-center border-0
              ${
                pathname.includes(link.label)
                  ? "text-danger bg-white"
                  : "text-white bg-black"
              }`}
        >
          {link.icon({ className: "fs-1 text-danger" })}
          <br />
          {link.label}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
