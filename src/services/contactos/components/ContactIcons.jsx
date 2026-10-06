const baseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#fff",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

export function PhoneIcon() {
  return (
    <svg {...baseProps}>
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2m10 3a2 2 0 0 1 2 2m-2-6a6 6 0 0 1 6 6" />
    </svg>
  );
}

export function WhatsappIcon() {
  return (
    <svg {...baseProps}>
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="m3 21 1.65-3.8a9 9 0 1 1 3.4 2.9z" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg {...baseProps}>
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
      <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0m7.5-4.5v.01" />
    </svg>
  );
}

export function SaveContactIcon() {
  return (
    <svg {...baseProps}>
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M8 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0M16 19h6m-3-3v6M6 21v-2a4 4 0 0 1 4-4h4" />
    </svg>
  );
}
