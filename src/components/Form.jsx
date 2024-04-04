import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "./Button";
import { RadioOption } from "./RadioOption";
import { InputField } from "./InputField";

// Common styles
export const inputStyles =
  "w-full border border-gray-600 p-1.5 rounded focus:border-azure-radiance-800 focus:outline-none focus:border-[1.5px]";
export const labelStyles = "uppercase font-medium";

Form.propTypes = {
  type: PropTypes.oneOf(["login", "register"]),
  setOptions: PropTypes.func,
};

export default function Form({ type = "", setOptions }) {
  function handleChange(event) {
    setOptions(event.target.value);
  }

  return (
    <form className="bg-white rounded-md shadow border border-1 p-6 text-[10px] flex flex-col w-full lg:max-w-[300px] gap-2">
      {type === "login" && (
        <>
          <h2 className="text-2xl lg:text-xl font-medium">Sign In</h2>
          <InputField
            label="Email"
            id="email"
            type="email"
            className={inputStyles}
          />
          <InputField
            label="Password"
            id="password"
            type="password"
            className={inputStyles}
          />
          <Link
            className="ml-auto text-azure-radiance-800 font-bold"
            to="/onboarding/reset"
          >
            Forgot Password?
          </Link>
        </>
      )}
      {type === "register" && (
        <>
          <h2 className="text-xl font-medium text-center">Register as a</h2>
          <div className="w-full space-y-2 p-3">
            <RadioOption
              value="client"
              imageSrc="/assets/client.svg"
              onChange={handleChange}
            />
            <RadioOption
              value="worker"
              imageSrc="/assets/healthcare.svg"
              onChange={handleChange}
            />
            <RadioOption
              value="organisation"
              imageSrc="/assets/organisation.svg"
              onChange={handleChange}
            />
          </div>
        </>
      )}
      <Button text={type === "login" ? "sign in" : "continue"} type="form" />
      <p className=" lg:text-base text-center">
        {type === "login" ? `Don't have an account yet? ` : `Have an account?`}
        <Link
          className="text-azure-radiance-800 font-bold"
          to={type === "login" ? "/onboarding/register" : "/onboarding"}
        >
          {type === "login" ? "Create account" : " Login"}
        </Link>{" "}
      </p>
    </form>
  );
}
