import { styled } from "@/css";

export const Box = styled('div', {
  variants: {
    full: {
      true: {
        height: "$full"
      }
    }
  }
});
