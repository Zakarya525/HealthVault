import ApiManager from "../ApiManager";

export const loginUser = async (data) => {
  const endpoint = "patientlogin";
  try {
    const response = await ApiManager.post(endpoint, data);
    console.log(response.data);
    return response.data; // Return the response data
  } catch (error) {
    console.error(error);
    throw new Error(error.message); // Throw an error if the request fails
  }
};

export const getUserMe = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await ApiManager.get("patient", config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};
