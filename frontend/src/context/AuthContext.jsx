import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  signupUser,
  loginUser,
  getCurrentUser,
} from "../services/authService";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const [token, setToken] = useState(
    () => localStorage.getItem("studymate_token")
  );

  const [loading, setLoading] = useState(true);

  // ==================== CHECK CURRENT USER ====================

  useEffect(() => {
    const checkUser = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await getCurrentUser(token);

        if (response.success) {
          setUser(response.user);
        }
      } catch (error) {
        console.error(
          "Authentication Error:",
          error.message
        );

        localStorage.removeItem("studymate_token");
        setToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, [token]);

  // ==================== SIGNUP ====================

  const signup = async (name, email, password) => {
    try {
      const response = await signupUser({
        name,
        email,
        password,
      });

      if (response.success) {
        localStorage.setItem(
          "studymate_token",
          response.token
        );

        setToken(response.token);
        setUser(response.user);

        return {
          success: true,
          message: response.message,
        };
      }

      return {
        success: false,
        message: response.message,
      };
    } catch (error) {
      return {
        success: false,
        message:
          error.response?.data?.message ||
          "Signup failed",
      };
    }
  };

  // ==================== LOGIN ====================

  const login = async (email, password) => {
    try {
      const response = await loginUser({
        email,
        password,
      });

      if (response.success) {
        localStorage.setItem(
          "studymate_token",
          response.token
        );

        setToken(response.token);
        setUser(response.user);

        return {
          success: true,
          message: response.message,
        };
      }

      return {
        success: false,
        message: response.message,
      };
    } catch (error) {
      return {
        success: false,
        message:
          error.response?.data?.message ||
          "Login failed",
      };
    }
  };

  // ==================== LOGOUT ====================

  const logout = () => {
    localStorage.removeItem("studymate_token");

    setToken(null);
    setUser(null);
  };

  // ==================== CONTEXT ====================

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        signup,
        logout,
        isLoggedIn: !!user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// ==================== CUSTOM HOOK ====================

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;