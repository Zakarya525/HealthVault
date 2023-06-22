import ApiManager from "../ApiManager";

export const getDoctors = async () => {
  const response = await ApiManager.get("doctor");
  return response.data;
};

export const getDoctor = async (id) => {
  const response = await ApiManager.get(`doctor/${id}`);
  return response.data;
};
