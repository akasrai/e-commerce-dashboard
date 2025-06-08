import { useContext } from "react";
import { AuthenticationContext } from "../components/AuthContext";

const useAuth = () => {
  const { user, isAuthenticated, loginUser, logoutUser } = useContext(
    AuthenticationContext
  );

  return {
    user,
    login: loginUser,
    logout: logoutUser,
    isAuthenticated: user.isAuthenticated || false,
  };
};

export default useAuth;
