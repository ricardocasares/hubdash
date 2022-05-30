import { styled } from "@/css";
import { blink, indefinite } from "@/css/animations";
import { VariantProps } from "@stitches/react";
import Img from "next/image";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";

const Avatar = styled(Img, {
  borderRadius: "$full",
});

const Workflow = styled(Stack, {
  padding: "$3",
  position: "relative",
  // borderRadius: "$md",
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

const Truncated = styled('p', {
  maxWidth: "$46",
  textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap"
});

export type WorkflowRun = {
  name: string;
  actor: string;
  avatar: string;
  branch: string;
} & VariantProps<typeof Workflow>;

const Code = styled('code', {
  fontSize: "$xs",
  fontFamily: "$mono"
});

export function WorkflowRun(props: WorkflowRun) {
  const status = ((props.conclusion || props.status)) as string;
  const message = status.split('_').join(' ');

  return <Workflow v gap conclusion={props.conclusion} status={props.status}>
    <Truncated>{props.name}</Truncated>
    <Text css={{ color: "inherit" }}>{props.actor}</Text>
    <p>{message}</p>
    <Truncated as={Code}>{props.branch}</Truncated>
  </Workflow >;
}
