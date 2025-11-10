"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();
  return <span> &gt; {pathname.split("/").pop()}</span>;
}
