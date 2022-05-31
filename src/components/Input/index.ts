import { styled } from "@/css";

export const Input = styled("input", {
  padding: "$2",
  border: "2px solid $gray5",
  background: "transparent",
  color: "$gray12",
  fontSize: "$base",
  "&:disabled": {
    color: "$gray9",
  },
});
