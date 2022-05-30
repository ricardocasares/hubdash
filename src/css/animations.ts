import { keyframes } from "@/css";

export const blink = keyframes({
  "50%": {
    opacity: 0.7,
  },
});

export const indefinite = keyframes({
  to: {
    "background-position": "100% 100%;",
  },
});
