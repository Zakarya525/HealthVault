import ApiManager from "../ApiManager";

export const loginUser = async ({ cnic, password }) => {
  try {
    console.log("I am in Login User Sir", cnic, password);
    return await ApiManager("signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        patientCNIC: cnic,
        patientPassword: password,
      }),
    });
  } catch (error) {
    console.log(`Failed: ${error}`);
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
