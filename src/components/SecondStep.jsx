import PropTypes from "prop-types";
import { InputField } from "./InputField";
import { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

SecondStep.propTypes = {
  formData: PropTypes.object.isRequired,
  onNext: PropTypes.func.isRequired,
};

export function SecondStep({ formData, onNext }) {
  const [contactPerson, setContactPerson] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "contactPerson") {
      setContactPerson(value);
    } else if (name === "contactNumber") {
      setContactNumber(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = () => {
    // Check if any of the required fields are empty
    if (
      contactPerson.trim() === "" ||
      contactNumber.trim() === "" ||
      password.trim() === ""
    ) {
      return; // Stop the function execution if any field is empty
    }

    // If all required fields are filled, combine with existing form data and proceed to the next step
    onNext({ ...formData, contactPerson, contactNumber, password });
  };

  return (
    <div className="space-y-3">
      <InputField
        label="Contact Person"
        id="contactPerson"
        name="contactPerson"
        value={contactPerson}
        onChange={handleChange}
        placeholder="Contact Person"
      />
      <InputField
        label="Contact Number"
        id="contactNumber"
        name="contactNumber"
        value={contactNumber}
        onChange={handleChange}
        placeholder="Contact Number"
      />
      <InputField
        label="Password"
        id="password"
        name="password"
        value={password}
        onChange={handleChange}
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
