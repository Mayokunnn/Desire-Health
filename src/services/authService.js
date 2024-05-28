import axios from "axios";

let baseURL = "/api"; // Default base URL for local development

// Check if the code is running in a Vercel environment
if (process.env.VERCEL_URL) {
  baseURL = `https://${process.env.VERCEL_URL}/api`; // Use Vercel deployment URL
}

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