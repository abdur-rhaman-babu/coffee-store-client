import { createContext, useState } from "react";
import { auth } from "./../firebase/firebase.init";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signinUser = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const userInfo = {
    name: "Coffee Shop",
    users,
    loading,
    setUsers,
    setLoading,
    createUser,
    signinUser
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
