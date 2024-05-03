import { Outlet, useLocation } from "react-router-dom";

import Main from "../components/LandingPage/Main";
import Navbar from "../components/LandingPage/Navbar";

export default function Onboarding() {
  const location = useLocation();
  const isLoginPage = location.pathname.includes("login");

  return (
    <Main styles="bg-onboarding h-screen flex flex-col overflow-auto">
      <Navbar type={isLoginPage ? "onboarding" : ""} pageType={"onboarding"} />
      <div className="z-10 flex items-center justify-center flex-grow">
        <Outlet />
      </div>
      <img
        src="/assets/onboarding-bg.png"
        alt="Onboarding Background"
        className="absolute bottom-0 right-0 z-0"
      />
    </Main>
  );
}
