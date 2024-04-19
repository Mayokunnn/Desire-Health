import axios from "axios";

const signIn = async (data) => {
  try {

    const response = await axios.post("http://localhost:3000/api/signin", data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const signUp = async (data) => {
  try {
    const response = await axios.post("http://localhost:3000/api/signup", data);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.message);
  }
};

export {signIn, signUp}