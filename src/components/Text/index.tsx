import { styled } from "@/css";

export const Text = styled("p", {
  margin: 0,
  padding: 0,
  fontSize: "$base",
  fontWeight: "$normal",
  lineHeight: "$tight",
  variants: {
    as: {
      h1: {
        fontSize: "$6xl",
        fontWeight: "$semibold"
      },
      h2: {
        fontSize: "$5xl",
        fontWeight: "$semibold"
      },
      h3: {
        fontSize: "$4xl",
        fontWeight: "$semibold"
      },
      h4: {
        fontSize: "$3xl",
        fontWeight: "$semibold"
      },
      h5: {
        fontSize: "$2xl",
        fontWeight: "$semibold"
      },
      h6: {
        fontSize: "$xl",
        fontWeight: "$semibold"
      },
    }
  }
});