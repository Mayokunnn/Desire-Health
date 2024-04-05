import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FirstStep } from "./FirstStep";
import { SecondStep } from "./SecondStep";

export default function Organisation() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleNext = (data) => {
    setCurrentStep(2);
    setFormData(data);
  };

  const handleSubmit = (data) => {
    setFormData(data);
    navigate("/onboarding");
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
      {currentStep === 1 && <FirstStep onNext={handleNext} />}
      {currentStep === 2 && <SecondStep onNext={handleSubmit} />}
    </form>
  );
}
