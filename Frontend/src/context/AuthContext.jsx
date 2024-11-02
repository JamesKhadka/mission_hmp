import { useContext, useEffect, useReducer, createContext } from "react";


//properties which represent the user info 

const initialState = {
  user: localStorage.getItem("user") != null && localStorage.getItem("user") !== "undefined"
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  role: localStorage.getItem("role") || null,
  token: localStorage.getItem("token") || null,
};


export const authContext = createContext(initialState);

//it haldel the state  and the actions for transition of state
const authReducer = (state, action) => {

  switch (action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        role: null,
        token: null,
      };

    case 'LOGIN_SUCCESS':
      return {
        user: action.payload.user,
        role: action.payload.role,
        token: action.payload.token,
      };

    case 'LOGOUT':
      return {
        user: null,
        role: null,
        token: null,
      };
    default:
      return state;
  }

}

//provider
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user))
    localStorage.setItem('token', state.token)
    localStorage.setItem('role', state.role)

  }, [state])

  return <authContext.Provider
    value={{
      user: state.user,
      role: state.role,
      token: state.token,
      dispatch
    }}>
    {children}
  </authContext.Provider>
}
