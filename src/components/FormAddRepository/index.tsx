import { useState } from "react";
import { useGlobalState } from "@/hooks/useGlobalState";
import { styled } from "@/css";
import { Stack } from "@/components/Stack";

const Input = styled('input', {
  "padding": "$2",
  "border": "2px solid $gray5",
  "background": "transparent",
  "color": "$gray12",
  "fontSize": "$base",
  "&:disabled": {
    color: "$gray9"
  }
});

export function FormAddRepository() {
  const [payload, setPayload] = useState("");
  const { dispatch } = useGlobalState();
  const disabled = payload.length < 3;

  const onClick = () => {
    dispatch({ type: "ADD_REPO", payload });
    setPayload("");
  };

  return <Stack h gap>
    <Input css={{ flex: 1 }} type="text" placeholder="owner/repo" onChange={e => setPayload(e.target.value)} value={payload} />
    <Input type="button" onClick={onClick} value="Add repository" disabled={disabled} />
  </Stack>;
}