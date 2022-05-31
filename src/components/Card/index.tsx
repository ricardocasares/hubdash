import { styled } from "@/css";
import { Stack } from "@/components/Stack";
import { blink, indefinite } from "@/css/animations";

export const Card = styled(Stack, {
  padding: "$3",
  position: "relative",
  background: "$gray6",
  variants: {
    status: {
      "queued": {
        color: "$gray11",
        backgroundSize: "300% 300%",
        backgroundImage: "repeating-linear-gradient(-45deg, $gray1, $gray1 0.5rem, $gray3 0.5rem, $gray3 1rem)",
        animation: `${indefinite} 60s linear infinite reverse`,
      },
      "in_progress": {
        color: "$blue11",
        backgroundImage: "repeating-linear-gradient(-45deg, $blue1, $blue1 0.5rem, $blue5 0.5rem, $blue5 1rem)",
        backgroundSize: "300% 300%",
        animation: `${indefinite} 60s linear infinite reverse`,
      },
      "completed": {
        color: "$gray11",
        background: "$gray5"
      }
    },
    conclusion: {
      "failure": {
        color: "$red11",
        background: "$red5"
      },
      "success": {
        color: "$grass11",
        background: "$grass5"
      },
      "action_required": {
        color: "$yellow11",
        background: "$yellow5",
        animation: `${blink} 1s linear infinite`,
      }
    }
  }
});
