import { Link } from "react-router-dom";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { InputField } from "./InputField";

export default function LoginForm() {
     const { register, handleSubmit } = useForm();

     function onSubmit(data) {
       console.log(data);
     }
  return (
    <form
      className="bg-white rounded-md shadow border border-1 p-6 text-[10px] flex flex-col w-full lg:max-w-[300px] gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-2xl lg:text-xl font-medium">Sign In</h2>
      <InputField
        label="Email"
        id="email"
        type="email"
        register={register}
      />
      <InputField
        label="Password"
        id="password"
        type="password"
        register={register}
      />
      <Link
        className="ml-auto text-azure-radiance-800 font-bold"
        to="/onboarding/reset"
      >
        Forgot Password?
      </Link>
      <Button text={"sign in"} type="form" />
      <p className="text-xs lg:text-xs text-center">
        { `Don't have an account yet?`}
        <Link
          className="text-azure-radiance-800 font-bold"
          to={ "/onboarding/register" }
        >
          {"Create account"}
        </Link>{" "}
      </p>
    </form>
  );
}
