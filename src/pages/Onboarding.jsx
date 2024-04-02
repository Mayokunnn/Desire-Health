import { Outlet } from "react-router-dom";

import Main from "../components/Main";
import Navbar from "../components/Navbar";

export default function Onboarding() {
  return (
    <Main styles="bg-onboarding h-screen">
      <Navbar type={"onboarding"} />
      {/* <img src='/assets/onboarding-bg.png' alt='Onboarding Bg' className='absolute z-100 bottom-0 right-0'/> */}
      <div>
        <Outlet />
      </div>
    </Main>
  );
}
