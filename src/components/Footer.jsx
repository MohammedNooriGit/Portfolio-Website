import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear;
  return (
    <div className="relative bg-first w-full">
      <div className="text-center text-swhite p-5">
        <p>© {currentYear} Mohammed Noori</p>
      </div>
    </div>
  );
}
