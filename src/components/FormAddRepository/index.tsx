import { useState } from "react";
import { useGlobalState } from "@/hooks/useGlobalState";
import css from './styles.module.css';

export function FormAddRepository() {
  const [payload, setPayload] = useState("");
  const { dispatch } = useGlobalState();

  return <div className={css.form}>
    <input type="text" placeholder="owner/repo" onChange={e => setPayload(e.target.value)} />
    <input type="button" onClick={() => dispatch({ type: "ADD_REPO", payload })} value="Add" />
  </div>;
}