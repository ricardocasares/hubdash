import { ChangeEventHandler, useState } from "react";
import { Stack } from "@/components/Stack";
import { Input } from "@/components/Input";
import { useGlobalState } from "@/hooks/useGlobalState";

export function FormAddRepository() {
  const [payload, setPayload] = useState("");
  const { dispatch } = useGlobalState();
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => setPayload(e.target.value);
  const disabled = payload.length < 3;

  const addRepo = () => {
    dispatch({ type: "ADD_REPO", payload });
    setPayload("");
  };


  return <Stack as="form" h gap>
    <Input type="text" onChange={onChange} placeholder="owner/repo" value={payload} css={{ flex: 1 }} />
    <Input type="submit" onClick={addRepo} value="Add repository" disabled={disabled} />
  </Stack>;
}