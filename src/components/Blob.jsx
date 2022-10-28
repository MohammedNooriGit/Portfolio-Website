import React from "react";
import coffee from "../assets/computerGuy.svg";

export default function Blob() {
  return (
    <div className="top-left-blob pointer-events-none">
      <svg
        id="visual"
        viewBox="0 0 900 600"
        width="900"
        height="600"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <g transform="translate(-17.34999999999998 21.900000000000006)">
          <path
            d="M250 -11C250 93.8 125 187.5 8.7 187.5C-107.7 187.5 -215.3 93.8 -215.3 -11C-215.3 -115.7 -107.7 -231.3 8.7 -231.3C125 -231.3 250 -115.7 250 -11"
            fill="#0096ff"
          ></path>
        </g>
      </svg>
    </div>
  );
}

export function SippingCoffee() {
  return (
    <img
      className="absolute top-0 left-0 opacity-10 pointer-events-none"
      src={coffee}
      alt="code"
    />
  );
}

export function TopCurve() {
  return (
    <div class="custom-shape-divider-top-1666871497 pointer-events-none">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
  );
}

export function TopWave() {
  return (
    <div class="custom-shape-divider-top-skills pointer-events-none">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
  );
}

export function BottomWave() {
  return (
    <div class="custom-shape-divider-bottom-1666887528 pointer-events-none">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
  );
}
