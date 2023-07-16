import ApiManager from "../ApiManager";

export const loginUser = async (data) => {
  const endpoint = "/auth/login";
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

    console.log("Executing get me");
    const response = await ApiManager.get(
      "/patient_user/get_login_user_details",
      config
    );
    return response.data;
  } catch (error) {
    return null;
  }
};
