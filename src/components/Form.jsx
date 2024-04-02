import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "./Button";

Form.propTypes = {
  type: PropTypes.string,
  setOptions: PropTypes.func,
};

export default function Form({ type = "", setOptions }) {
  function handleChange(event) {
    setOptions(event.target.value);
  }

  if (type === "login") {
    return (
      <form className="bg-white rounded-md shadow border border-1 p-5 text-[10px] flex flex-col w-full max-w-[200px] lg:max-w-[300px] gap-2">
        <h2 className="text-lg font-medium">Sign In</h2>
        <div className="group">
          <label className="uppercase font-medium peer-hover:bg-gray-800 ">
            Email
          </label>
          <input className=" w-full border border-gray-600 p-1.5 rounded focus:border-azure-radiance-800 focus:outline-none focus:border-[1.5px] peer" />
        </div>
        <div>
          <label className="uppercase font-medium">Password</label>
          <input className=" w-full border border-gray-600 p-1.5 rounded focus:border-azure-radiance-800 focus:outline-none focus:border-[1.5px]" />
        </div>
        <Link
          className="ml-auto text-azure-radiance-800 font-bold"
          to="/onboarding/reset"
        >
          Forgot Password ?
        </Link>
        <Button text="sign in" type="form" />
        <p className="text-center">
          {`Don't have an account yet? `}
          <Link
            className=" text-azure-radiance-800 font-bold"
            to="/onboarding/register"
          >
            Create account
          </Link>{" "}
        </p>
      </form>
    );
  }
  if (type === "register") {
    return (
      <form className="bg-white rounded-md shadow border border-1 py-8 px-10 text-[10px] items-center flex flex-col w-full max-w-[200px] lg:max-w-[300px] gap-4">
        <div className="w-full space-y-1 p-3">
          <label className="custom-radio">
            <input
              type="radio"
              name="radio"
              value={"client"}
              onChange={handleChange}
            />
            <img src="/assets/client.svg" className="w-4 h-4" />
            Client
          </label>
          <label className="custom-radio">
            <input
              type="radio"
              name="radio"
              value={"worker"}
              onChange={handleChange}
            />
            <img src="/assets/healthcare.svg" className="w-4 h-4" />
            HealthCare Worker
          </label>
          <label className="custom-radio">
            <input
              type="radio"
              name="radio"
              value={"organisation"}
              onChange={handleChange}
            />
            <img src="/assets/organisation.svg" className="w-4 h-4" />
            Organisation
          </label>
        </div>
        <Button text="continue" type="form" />
        <p>
          Have an account?{" "}
          <Link
            className=" text-azure-radiance-800 font-bold"
            to="/onboarding/login"
          >
            Login
          </Link>{" "}
        </p>
      </form>
    );
  }
}
