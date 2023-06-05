import axios from "axios";
import ApiManager from "../ApiManager";

export const loginUser = async (data) => {
  console.log("LoginUser");
  const apiUrl = "http://localhost:8000/api/auth/patientlogin";
  try {
    const response = await axios.post(apiUrl, data, {
      withCredentials: true,
    });
    console.log(response.data);
  } catch (error) {
    alert(error);
  }
};

export const getUserMe = async (token) => {
  try {
    return await ApiManager("/auth/currentuser", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(`Failed: ${error}`);
  }
};
