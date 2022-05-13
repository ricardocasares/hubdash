import { useEffect, useReducer, createContext, Dispatch, FunctionComponent as FC, ReactElement, Reducer, useContext } from "react";

export type State = {
  token?: string;
  repos: string[];
};

export type Action = AddRepoAction | DelRepoAction | AddTokenAction;
export type AddRepoAction = { type: 'ADD_REPO'; payload: string; };
export type DelRepoAction = { type: 'DEL_REPO'; payload: string; };
export type AddTokenAction = { type: 'ADD_TOKEN'; payload: string; };
export type StateContext = { state: State; dispatch: Dispatch<Action>; };

const initialState: State = { repos: [] };
const StateContext = createContext<StateContext>({} as StateContext);

const stateReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'ADD_TOKEN':
      return { ...state, token: action.payload };
    case 'ADD_REPO':
      return { ...state, repos: [...state.repos, action.payload] };
    case 'DEL_REPO':
      const repos = state.repos.filter(repo => repo != action.payload);
      return { ...state, repos };
    default:
      return state;
  }
};


export type StateProvider = FC<{ children: ReactElement; }>;
export const StateProvider: StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState, (state) => {
    try {
      const local = JSON.parse(localStorage.getItem('state') || "");
      return local;
    } catch (error) {
      return state;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("state", JSON.stringify(state));
    } catch (error) {
      console.log(error);
    }
  }, [state]);

  return <StateContext.Provider value={{ state, dispatch }}>{children}</StateContext.Provider>;
};

export function useGlobalState() {
  return useContext(StateContext);
}