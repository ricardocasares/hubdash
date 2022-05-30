import { createTheme } from "@/css";
import { dark as darkColors } from "@/css/colors";

export const dark = createTheme("dark", {
  colors: {
    ...darkColors,
  },
});
