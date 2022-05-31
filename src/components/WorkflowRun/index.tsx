import { VariantProps } from "@stitches/react";
import { styled } from "@/css";
import { Text } from "@/components/Text";
import { Code } from "@/components/Code";
import { Card } from "@/components/Card";
import { Stack } from "@/components/Stack";
import { Avatar } from "@/components/Avatar";

const Truncated = styled('p', {
  maxWidth: "$46",
  textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap"
});

export type WorkflowRun = {
  name: string;
  actor: string;
  avatar: string;
  branch: string;
} & VariantProps<typeof Card>;


export function WorkflowRun(props: WorkflowRun) {
  const status = ((props.conclusion || props.status)) as string;
  const message = status.split('_').join(' ');

  return <Card v gap status={props.status} conclusion={props.conclusion}>
    <Stack h gap>
      <Avatar src={props.avatar} width="20" height="20" />
      <Truncated>{props.actor}</Truncated>
    </Stack>

    <Truncated>{props.name}</Truncated>
    <Truncated>{message}</Truncated>
    <Truncated as={Code}>{props.branch}</Truncated>
  </Card >;
}
