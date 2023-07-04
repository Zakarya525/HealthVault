import ApiManager from "../ApiManager";

export const loginUser = async (data) => {
  const endpoint = "auth/patientlogin";
  const response = await ApiManager.post(endpoint, data);
  return response.data;
};

export const getUserMe = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await ApiManager.get("auth/patient", config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};
