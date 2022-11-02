import React from "react";

export default function RightSideDivider() {
  return (
    <div className="custom-shape-divider-right pointer-events-none">
      <svg
        id="visual"
        viewBox="0 0 900 600"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          className="fill-second dark:fill-dsecond"
          d="M605 600L614.2 566.7C623.3 533.3 641.7 466.7 642 400C642.3 333.3 624.7 266.7 625.7 200C626.7 133.3 646.3 66.7 656.2 33.3L666 0L900 0L900 33.3C900 66.7 900 133.3 900 200C900 266.7 900 333.3 900 400C900 466.7 900 533.3 900 566.7L900 600Z"
          stroke-linecap="round"
          stroke-linejoin="miter"
        ></path>
      </svg>
    </div>
  );
}
