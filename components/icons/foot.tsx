import React from "react";

const foot = ({
  width = 30,
  height = 30,
  className = "",
  fill = "red",
  ...rest
}) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 64.000000 64.000000"
      preserveAspectRatio="xMidYMid meet"
      {...rest}
    >
      <g
        transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
        className={className}
        // fill={fill}
        stroke="none"
      >
        <path
          d="M286 539 c-29 -35 -35 -89 -11 -109 37 -31 95 23 95 88 0 58 -44 69
    -84 21z"
        />
        <path
          d="M108 533 c-24 -28 -30 -60 -18 -98 16 -47 47 -56 77 -21 27 32 30 81
    7 114 -18 26 -45 28 -66 5z"
        />
        <path
          d="M429 437 c-29 -19 -34 -29 -34 -62 0 -38 2 -40 33 -43 59 -6 117 79
    80 116 -18 18 -41 15 -79 -11z"
        />
        <path
          d="M190 345 c-14 -8 -42 -19 -62 -25 -69 -19 -59 -89 18 -128 19 -10 52
    -40 72 -67 44 -58 78 -69 112 -35 14 14 20 32 19 58 0 20 2 56 6 79 7 38 5 44
    -31 82 -45 48 -93 61 -134 36z"
        />
        <path
          d="M459 265 c-61 -33 -57 -105 5 -105 26 0 41 8 65 35 17 20 31 41 31
    48 0 36 -54 48 -101 22z"
        />
      </g>
    </svg>
  );
};

export default foot;
