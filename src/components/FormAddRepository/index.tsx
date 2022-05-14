import { useState } from "react";
import { useGlobalState } from "@/hooks/useGlobalState";
import css from './styles.module.css';

export function FormAddRepository() {
  const [payload, setPayload] = useState("");
  const { dispatch } = useGlobalState();
  const disabled = payload.length < 3;

  const onClick = () => {
    dispatch({ type: "ADD_REPO", payload });
    setPayload("");
  };

  return <div className={css.form}>
    <input type="text" placeholder="owner/repo" onChange={e => setPayload(e.target.value)} value={payload} />
    <input type="button" onClick={onClick} value="Add" disabled={disabled} />
  </div>;
}