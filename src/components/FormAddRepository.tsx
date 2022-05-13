import { useState } from "react";
import { useGlobalState } from "@/hooks/useGlobalState";

export function FormAddRepository() {
  const [payload, setPayload] = useState("");
  const { dispatch } = useGlobalState();

  return <div>
    <input type="text" placeholder="owner/repo" onChange={e => setPayload(e.target.value)} />
    <button onClick={() => dispatch({ type: "ADD_REPO", payload })}>Add</button>
  </div>;
}