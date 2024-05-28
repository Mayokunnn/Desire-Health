import { useState } from "react";
import { DatePicker, Space } from 'antd';
import { CiCalendar } from "react-icons/ci";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";


import { InputField } from "./InputField";
import Button from "./Button";
import { signUp } from "../../services/authService";
import Loader from "../Loader";

export default function Client() {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const { register, control, handleSubmit } = useForm();

  const { mutate, isLoading } = useMutation({
    mutationFn: (data) => {
      const newClient = { ...data, userType: "client" };
      return signUp(newClient); // Assuming signUp returns a promise
    },

    onSuccess: () => {
      navigate("/onboarding"); // Handle successful sign-up (redirect to login?)
      toast.success("Registered you as a Client👍");
    },
    onError: (error) => {
      console.error("Sign-up error:", error);
      // Handle sign-up errors (display error messages)
    },
  });

  const onRegister = handleSubmit(async (data) => {
    mutate(data);
  });

  isLoading && <Loader />;
  return (
    <form
      className="bg-white rounded-md shadow border border-1 p-5 text-[10px] flex flex-col w-full lg:max-w-[300px] gap-2"
      onSubmit={handleSubmit(onRegister)}
    >
      <h2 className="text-2xl font-medium">Client</h2>
      <div>
        <InputField
          label="Full Name"
          id="fullname"
          type="name"
          register={register}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label htmlFor="sex" className="uppercase font-medium">
            Sex
          </label>
          <select
            id="sex"
            className="w-full border border-gray-600 p-1.5 rounded focus:border-azure-radiance-800 focus:outline-none focus:border-[1.5px]"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="dob" className="uppercase font-medium">
            Date of Birth
          </label>
          <Controller
          
            name="dob"
            control={control}
            // register={register({ required: true })}
            render={({ field }) => (
              <DatePicker onChange={field.onChange} className="w-full border border-gray-600 p-1.5 rounded focus:border-azure-radiance-800 focus:outline-none focus:border-[1.5px]" placeholder="Date of Birth" />
            )}
          />
        </div>
      </div>
      <div>
   
      </div>
      <div>
        <InputField label="Email" id="email" type="email" register={register} />
      </div>
      <div>
        <InputField
          label="Password"
          id="password"
          type="password"
          register={register}
        />
      </div>
      <div>
        <label htmlFor="pregnant" className="uppercase font-medium">
          Pregnant
        </label>
        <select
          id="pregnant"
          className="w-full border border-gray-600 p-1.5 rounded focus:border-azure-radiance-800 focus:outline-none focus:border-[1.5px]"
          {...register("pregnant")}
        >
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </div>
      <div className="flex items-center justify-center gap-2">
        <input
          type="checkbox"
          id="termsAndConditions"
          checked={isChecked}
          onClick={handleCheckboxChange}
          {...register("termsAndConditions", {
            required: "This field is required",
          })}
        />
        <label htmlFor="termsAndConditions">
          Check here to indicate that you understand and accept the terms and
          conditions of{" "}
          <span className="text-azure-radiance-800 font-semibold">
            Desire Health
          </span>{" "}
        </label>
      </div>

      <Button
        text={isLoading ? "Creating Account..." : "Create Account"}
        type="form"
      />

      <p className="text-center">
        Have an account?{" "}
        <Link className="text-azure-radiance-800 font-bold" to={"/onboarding"}>
          Log in
        </Link>
      </p>
    </form>
  );
}
