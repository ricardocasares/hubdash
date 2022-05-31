import { globalCss } from "@/css";

export const cssReset = globalCss({
  "*, *::before, *::after": { boxSizing: "border-box" },
  "*": { margin: "0" },
  "html, body": { height: "$full" },
  body: {
    color: "$gray12",
    lineHeight: "$6",
    fontFamily: "$sans",
    WebkitFontSmoothing: "antialiased",
    background: "$gray1",
  },
  "img, picture, video, canvas, svg": { display: "block", maxWidth: "$full" },
  "input, button, textarea, select": { font: "inherit" },
  "p, h1, h2, h3, h4, h5, h6": { overflowWrap: "break-word" },
  "#__next": { isolation: "isolate" },
  "body, #__next": {
    height: "100vh",
  },
});
