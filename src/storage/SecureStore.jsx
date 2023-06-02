import * as SecureStore from "expo-secure-store";

export const saveAuthToken = async (token) => {
  await SecureStore.setItemAsync("authToken", token);
};

export const getAuthToken = async () => {
  const token = await SecureStore.getItemAsync("authToken");
  return token;
};

export const deleteAuthToken = async () => {
  await SecureStore.deleteItemAsync("authToken");
};
