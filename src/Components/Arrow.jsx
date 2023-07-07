import "../CSS/Arrow.css";

function Arrow() {
  return (
    <svg
      className="arrow"
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_425_589)">
        <circle cx="22.5" cy="22.5" r="22.5" fill="#4A5FDB" />
        <path
          d="M22.5 12.375V33.3482"
          stroke="#C8F955"
          stroke-width="2"
          stroke-linecap="square"
        />
        <path
          d="M12.375 21.375L22.5 34.875L32.625 21.375"
          stroke="#C8F955"
          stroke-width="2"
          stroke-linecap="square"
        />
      </g>
      <defs>
        <clipPath id="clip0_425_589">
          <rect width="45" height="45" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Arrow;
