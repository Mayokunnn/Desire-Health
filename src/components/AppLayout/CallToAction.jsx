import { FaRegPaperPlane } from "react-icons/fa";
import Button from "../LandingPage/Button";

export default function CallToAction() {
  return (
    <div className="bg-azure-radiance-800 text-white flex flex-col items-center justify-center m-1 gap-3 py-2 px-5 rounded-md">
      <p className="text-base leading-tight font-medium text-center">Book an appointment</p>
      <p className="text-xs text-center">
        Schedule a personalised consultation with an experienced
        professional
      </p>
      <Button text="Schedule" type="app">
          <FaRegPaperPlane size={10} />
        </Button>
    </div>
  );
}
