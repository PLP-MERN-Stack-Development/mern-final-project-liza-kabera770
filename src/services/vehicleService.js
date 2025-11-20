import axios from "axios";

const API_URL = "http://localhost:5000/api/vehicles";

export const addVehicle = async (data) => {
  return await axios.post(`${API_URL}/add`, data);
};

export const getVehicles = async () => {
  return await axios.get(API_URL);
};
