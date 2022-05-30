import { styled } from "@/css";

export const Stack = styled('div', {
  display: "flex",
  minWidth: 0,
  variants: {
    pad: {
      true: {
        padding: "$1"
      },
      sm: {
        padding: "$2"
      },
      md: {
        padding: "$4"
      }
    },
    h: {
      true: {
        flexDirection: "row"
      }
    },
    v: {
      true: {
        flexDirection: "column"
      }
    },
    gap: {
      true: {
        gap: "$1",
      },
      sm: {
        gap: "$2"
      },
      md: {
        gap: "$4"
      }
    },
    "fill": {
      true: {
        "> *": {
          flex: "1"
        },
      }
    }
  }
});