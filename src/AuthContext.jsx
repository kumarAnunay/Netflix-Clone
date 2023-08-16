import { createContext, useContext, useReducer } from "react";

// Context to hold state and action
const AuthContext = createContext();

// Initial state
const initialState = {
  token: null,
  userInfo: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, token: action.payload };
    case "LOGOUT":
      return { ...state, token: null };
    case "USER_INFO":
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
};

// AuthProvider component
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the context
const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("AuthContext provider error");
  }

  return context;
};

export { AuthProvider, useAuth };
