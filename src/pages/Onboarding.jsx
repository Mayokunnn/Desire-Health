import { Outlet, useLocation } from "react-router-dom";

import Main from "../components/Main";
import Navbar from "../components/Navbar";

export default function Onboarding() {
  const location = useLocation();
  const isLoginPage = location.pathname.includes("login");
  console.log(isLoginPage);

  return (
    <Main styles="bg-onboarding h-screen flex flex-col">
      <Navbar type={isLoginPage ? "onboarding" : ""} pageType={"onboarding"} />
      <div className="flex items-center justify-center flex-grow">
        <Outlet />
      </div>
    </Main>
  );
}
