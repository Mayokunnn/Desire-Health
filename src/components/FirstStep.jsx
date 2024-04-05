import PropTypes from "prop-types";
import { InputField } from "./InputField";
import { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

FirstStep.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export function FirstStep({ onNext }) {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    address: "",
    companyType: "Private",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Check if any of the required fields are empty
    if (
      formData.companyName.trim() === "" ||
      formData.email.trim() === "" ||
      formData.phone.trim() === "" ||
      formData.address.trim() === ""
    ) {
      return; // Stop the function execution if any field is empty
    }

    // If all required fields are filled, proceed to the next step
    onNext(formData);
  };

  return (
    <div className="space-y-3">
      <InputField
        label="Company Name"
        id="companyName"
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
        placeholder="Company Name"
      />
      <InputField
        label="Email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        type="email"
        placeholder="Email"
      />
      <InputField
        label="Phone"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
      />
      <InputField
        label="Address"
        id="address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
      />
      <div>
        <label
          htmlFor="companyType"
          className="text-gray-600 uppercase font-semibold text-xs"
        >
          Company Type
        </label>
        <select
          id="companyType"
          name="companyType"
          value={formData.companyType}
          onChange={handleChange}
          className="text-xs lg:text-sm w-full border border-gray-600 p-1.5 rounded focus:border-azure-radiance-800 focus:outline-none focus:border-[1.5px]"
        >
          <option value="Private">Private</option>
          <option value="Public">Public</option>
          <option value="Government">Government</option>
        </select>
      </div>

      <Button text={"Next"} type="form" onClick={handleSubmit} />

      <p className="text-center">
        Have an account?
        <Link className="text-azure-radiance-800 font-bold" to={"/onboarding"}>
          Log in
        </Link>
      </p>
    </div>
  );
}
