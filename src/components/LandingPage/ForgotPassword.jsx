import { useState } from "react";
import { InputField } from "./InputField";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    newPassword: "",
    confirmPassword: "Private",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Check if any of the required fields are empty
    if (formData.email.trim() === "" || formData.otp.trim() === "") return;

    setCurrentStep(2);
  };

  const handleReset = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Check if any of the required fields are empty
    if (
      formData.newPassword.trim() === "" ||
      formData.confirmPassword.trim() === "" ||
      formData.newPassword.trim() !== formData.confirmPassword.trim()
    )
      return; // Stop the function execution if any field is empty

    navigate("/onboarding");
  };

  return (
    <div className="inline-block lg:grid grid-cols-2  lg:px-24 lg:py-6 gap-8">
      <div className="hidden lg:flex flex-col items-center">
        <p className="text-3xl">
          Join us in revolutionizing healthcare delivery, in your world and
          others, one virtual visit at a time.{" "}
        </p>
        <img
          src="/assets/login-illustration.png"
          alt="Login Illustration"
          className="max-w-80"
        />
      </div>
      <div className="block lg:flex items-start justify-center">
        <form className="bg-white rounded-md shadow border border-1 p-5 text-[10px] flex flex-col w-full lg:max-w-[300px] gap-2">
          <div className="space-y-1">
            <h2 className="text-xl font-medium capitalize">Reset Password</h2>
            <div className="flex gap-2">
              <span
                className={`h-0.5 w-1/2 ${
                  currentStep === 1 ? "bg-azure-radiance-800" : "bg-gray-500"
                } rounded`}
              ></span>
              <span
                className={`h-0.5 w-1/2 ${
                  currentStep === 2 ? "bg-azure-radiance-800" : "bg-gray-500"
                } rounded`}
              ></span>
            </div>
          </div>
          {currentStep === 1 && (
            <div className="flex flex-col gap-2">
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
                label="Otp"
                id="otp"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                type="otp"
                placeholder="OTP"
              />
              <div className="flex justify-end">
                <p className=" text-azure-radiance-800 font-bold uppercase">
                  Resend OTP
                </p>
              </div>
              <Button text={"Next"} type="form" onClick={handleNext} />

              <p className="text-center">
                Have an account?
                <Link
                  className="text-azure-radiance-800 font-bold"
                  to={"/onboarding"}
                >
                  Log in
                </Link>
              </p>
            </div>
          )}
          {currentStep === 2 && (
            <div className="flex flex-col gap-2">
              <InputField
                label="New Password"
                id="newPassword"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                type="password"
                placeholder="New Password"
              />
              <InputField
                label="Confirm Password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                type="password"
                placeholder="Confirm Password"
              />
              <Button text={"Reset"} type="form" onClick={handleReset} />
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
