import { InputField } from "./InputField";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Worker() {
  const { register, handleSubmit } = useForm();

   const [isChecked, setIsChecked] = useState(false);

   const handleCheckboxChange = (e) => {
     setIsChecked(e.target.checked)
   };

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form
      className="bg-white rounded-md shadow border border-1 p-5 text-[10px] flex flex-col w-full lg:max-w-[300px] gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-xl font-medium">HealthCare Worker</h2>
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
            {...register("sex")}
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
          <select
            id="dob"
            className="w-full border border-gray-600 p-1.5 rounded focus:border-azure-radiance-800 focus:outline-none focus:border-[1.5px]"
            {...register("dob")}
          >
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            {/* Add more options for months */}
          </select>
        </div>
      </div>
      <div>
        <InputField
          label="Phone Number"
          id="phone"
          type="phone"
          register={register}
        />
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
        <label htmlFor="license" className="uppercase font-medium">
          License
        </label>
        <InputField
          label="License"
          id="license"
          type="text"
          register={register}
        />
      </div>
      <div className="flex items-center justify-center gap-2">
        <input
          type="checkbox"
          id="termsAndConditions"
          checked={isChecked}
          onClick={handleCheckboxChange}
          {...register("termsAndConditions")}
        />
        <label htmlFor="checkbox">
          Check here to indicate that you understand and accept the terms and
          conditions of{" "}
          <span className="text-azure-radiance-800 font-semibold">
            Desire Health
          </span>{" "}
        </label>
      </div>

      <Button text={"Create Account"} type="form" />

      <p className="text-center">
        Have an account?
        <Link className="text-azure-radiance-800 font-bold" to={"/onboarding"}>
          Log in
        </Link>
      </p>
    </form>
  );
}
