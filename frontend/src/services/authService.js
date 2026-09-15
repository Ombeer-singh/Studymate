import api from "./api";

// ==================== SIGNUP ====================

export const signupUser = async (userData) => {
  const response = await api.post(
    "/auth/signup",
    userData
  );

  return response.data;
};


// ==================== LOGIN ====================

export const loginUser = async (userData) => {
  const response = await api.post(
    "/auth/login",
    userData
  );

  return response.data;
};


// ==================== GET CURRENT USER ====================

export const getCurrentUser = async (token) => {
  const response = await api.get(
    "/auth/me",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};