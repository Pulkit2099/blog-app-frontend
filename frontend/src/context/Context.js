import { createContext ,useReducer,useEffect} from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {

  //if there is user inside local storage then it take this "user" if there is no user is gonna be null
   user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
  };

  export const Context=createContext(INITIAL_STATE)
//use this cntprvfr in index.js then all comp can reach this datsa
  export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  
    useEffect(() => {
     localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);
  
    return (
      <Context.Provider
        value={{
          user: state.user,
          isFetching: state.isFetching,
          error: state.error,
          dispatch,
        }}
      >
        {children}
      </Context.Provider>
    );
  };
