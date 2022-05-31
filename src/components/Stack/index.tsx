import { styled } from "@/css";
import { Box } from "@/components/Box";

export const Stack = styled(Box, {
  display: "flex",
  minWidth: 0,
  variants: {
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
    fill: {
      true: {
        "> *": {
          flex: "1"
        },
      }
    }
  }
});