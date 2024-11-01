import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { RadioOption } from "./RadioOption";
import { useForm } from "react-hook-form";

RegisterForm.propTypes = {
  setOptions: PropTypes.func,
  options: PropTypes.string,
};

export default function RegisterForm({setOptions }) {
  

  const navigate = useNavigate()

  const {register, handleSubmit} = useForm()

  const onSubmit = (data) => {
    const { userType } = data;
    setOptions(userType);
    navigate(userType);
  };

  return (
    <form
      className="bg-white rounded-md shadow border border-1 p-6 text-[10px] flex flex-col w-full lg:max-w-[300px] gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
   
          <h2 className="text-xl font-medium text-center">Register as a</h2>
          <div className="w-full space-y-2 p-3">
            <RadioOption
              value="client"
              imageSrc="/assets/client.svg"
              register={register}
              name={"userType"}
            />
            <RadioOption
              value="worker"
              imageSrc="/assets/healthcare.svg"
              register={register}
              name={"userType"}
            />
            <RadioOption
              value="organisation"
              imageSrc="/assets/organisation.svg"
              register={register}
              name={"userType"}
            />
          </div>
      
      <Button text={"continue"} type="form" />
      <p className="text-xs lg:text-xs text-center">
        { `Have an account?`}
        <Link
          className="text-azure-radiance-800 font-bold"
          to={"/onboarding"}
        >
          {"Log in"}
        </Link>
      </p>
    </form>
  );
}
