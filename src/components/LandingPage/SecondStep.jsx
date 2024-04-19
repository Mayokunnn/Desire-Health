import PropTypes from "prop-types";
import { InputField } from "./InputField";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useState } from "react";

SecondStep.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  register: PropTypes.func,
};

export function SecondStep({ onSubmit , register}) {
 const [isChecked, setIsChecked] = useState(false);


 const handleCheckboxChange = (e) => {
   setIsChecked(e.target.checked);
 };
 function handleSubmit(e){
  e.preventDefault()
  onSubmit()
 }
  

  return (
    <div className="space-y-3">
      <InputField
        label="Contact Person"
        id="contactPerson"
        name="contactPerson"
        register={register}
        placeholder="Contact Person"
      />
      <InputField
        label="Contact Number"
        id="contactNumber"
        name="contactNumber"
        type="phone"
        register={register}
        placeholder="Contact Number"
      />
      <InputField
        label="Password"
        id="password"
        name="password"
        register={register}
        type="password"
        placeholder="Password"
      />
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

      <Button text={"Create Account"} type="form" onClick={handleSubmit} />

      <p className="text-center">
        Have an account?
        <Link className="text-azure-radiance-800 font-bold" to={"/onboarding"}>
          Log in
        </Link>
      </p>
    </div>
  );
}
