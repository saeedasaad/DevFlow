import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

const initialState = {
  token: localStorage.getItem("token") || null,
};

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", action.payload);
      return { ...state, token: action.payload };

    case "LOGOUT":
      localStorage.removeItem("token");
      return { ...state, token: null };

    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}