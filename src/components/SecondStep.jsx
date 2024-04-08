import PropTypes from "prop-types";
import { InputField } from "./InputField";
import Button from "./Button";
import { Link } from "react-router-dom";

SecondStep.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  register: PropTypes.func,
};

export function SecondStep({ onSubmit , register}) {

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
        type='phone'
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

      <Button text={"Submit"} type="form" onClick={handleSubmit} />

      <p className="text-center">
        Have an account?
        <Link className="text-azure-radiance-800 font-bold" to={"/onboarding"}>
          Log in
        </Link>
      </p>
    </div>
  );
}
