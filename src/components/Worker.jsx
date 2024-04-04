import { useState } from "react";
import { inputStyles, labelStyles } from "./Form";
import { InputField } from "./InputField";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Worker() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((check) => !check);
  };
  return (
    <form className="bg-white rounded-md shadow border border-1 p-5 text-[10px] flex flex-col w-full max-w-[200px] lg:max-w-[300px] gap-2">
      <h2 className="text-xl font-medium">HealthCare Worker</h2>
      <div>
        <InputField
          label="Full Name"
          id="fullname"
          type="name"
          className={inputStyles}
        />
      </div>
      <div className="flex gap-2">
        <div>
          <label htmlFor="sex" className={labelStyles}>
            Sex
          </label>
          <select id="sex" className={inputStyles}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="dob" className={labelStyles}>
            Date of Birth
          </label>
          <select id="dob" className={inputStyles}>
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
          className={inputStyles}
        />
      </div>
      <div>
        <InputField
          label="Email"
          id="email"
          type="email"
          className={inputStyles}
        />
      </div>
      <div>
        <InputField
          label="Password"
          id="password"
          type="password"
          className={inputStyles}
        />
      </div>
      <div>
        <label htmlFor="license" className={labelStyles}>
          License
        </label>
        <input
          id="license"
          type="license"
          name="license"
          className={inputStyles}
        />
      </div>
      <div className="flex items-center justify-center gap-2">
        <input
          type="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
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
          Login
        </Link>
      </p>
    </form>
  );
}
