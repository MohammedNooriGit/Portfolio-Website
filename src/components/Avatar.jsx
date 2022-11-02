import React from "react";

export default function Avatar(props) {
  return (
    <img
      width="250"
      className="rounded-[1rem] border-solid border-first dark:border-dfirst border-4 h-auto w-2/4 pointer-events-none"
      src={props.url}
      alt="avatar"
    />
  );
}
