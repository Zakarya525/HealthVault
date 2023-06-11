import ApiManager from "../ApiManager";

export const getDoctors = async () => {
  console.log("I am in getDoctors");
  try {
    const response = await ApiManager.get("doctor");
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export const getDoctor = async (id) => {
  const response = await ApiManager.get(`doctor/${id}`);
  return response.data;
};
