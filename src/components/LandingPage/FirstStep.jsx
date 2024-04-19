import PropTypes from "prop-types";
import { InputField } from "./InputField";
import Button from "./Button";
import { Link } from "react-router-dom";

FirstStep.propTypes = {
  onNext: PropTypes.func.isRequired,
  register: PropTypes.func
};

export function FirstStep({ onNext, register }) {
  // const [formData, setFormData] = useState({
  //   companyName: "",
  //   email: "",
  //   phone: "",
  //   address: "",
  //   companyType: "Private",
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    onNext()
   };

  return (
    <div className="space-y-3">
      <InputField
        label="Company Name"
        id="organisationName"
        name="organisationName"
        register={register}
        placeholder="Company Name"
      />
      <InputField
        label="Email"
        id="email"
        name="email"
        register={register}
        type="email"
        placeholder="Email"
      />
      <InputField
        label="Phone"
        id="phone"
        name="phone"
        register={register}
        placeholder="Phone"
      />
      <InputField
        label="Address"
        id="address"
        name="address"
        register={register}
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
          {...register('companyType')}
          className="text-xs lg:text-sm w-full border border-gray-600 p-1.5 rounded focus:border-azure-radiance-800 focus:outline-none focus:border-[1.5px]"
        >
          <option value="private">Private</option>
          <option value="public">Public</option>
          <option value="government">Government</option>
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
