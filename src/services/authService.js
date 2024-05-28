import axios from "axios";

let baseURL = "http://localhost:3000/api";// Default base URL for local development

// Check if the code is running in a Vercel environment
const isVercel = process.env.NODE_ENV === "production"; // Assume production means Vercel deployment

if (isVercel) {
  baseURL = "/api"; // Use relative path for Vercel deployment
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