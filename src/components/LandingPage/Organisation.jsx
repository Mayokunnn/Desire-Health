import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { FirstStep } from "./FirstStep";
import { SecondStep } from "./SecondStep";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { signUp } from "../../services/authService";

export default function Organisation() {
  const [currentStep, setCurrentStep] = useState(1);

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate()

  const { mutate, isLoading } = useMutation({
    mutationFn: (data) => {
      const newClient = { ...data, userType: "organisation" };
      return signUp(newClient); // Assuming signUp returns a promise
    },

    onSuccess: () => {
      navigate("/onboarding"); // Handle successful sign-up (redirect to login?)
      toast.success("Registered");
    },
    onError: (error) => {
      console.error("Sign-up error:", error);
      // Handle sign-up errors (display error messages)
      toast.error(`${error}`)
    },
  });

  function onSubmit(data) {
    mutate(data);
  }


  const handleNext = () => {
    setCurrentStep(2);
  };

  
  return (
    <form className="bg-white rounded-md shadow border border-1 p-5 text-[10px] flex flex-col w-full lg:max-w-[300px] gap-2">
      <h2 className="text-xl font-medium">Organisation</h2>
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
      {currentStep === 1 && (
        <FirstStep onNext={handleNext} register={register} />
      )}
      {currentStep === 2 && (
        <SecondStep onSubmit={handleSubmit(onSubmit)} register={register} />
      )}
    </form>
  );
}
