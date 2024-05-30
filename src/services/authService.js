import axios from "axios";

const baseURL = "https://desirehealth-production.up.railway.app/api";// Default base URL for local development


const signIn = async (data) => {
  try {
    const response = await axios.post(`${baseURL}/signin`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const signUp = async (data) => {
  try {
    const response = await axios.post(`${baseURL}/signup`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export {signIn, signUp}