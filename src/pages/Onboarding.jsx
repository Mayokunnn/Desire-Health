import {Outlet} from 'react-router-dom'

import Main from "../components/Main";
import Navbar from "../components/Navbar";

export default function Onboarding() {
  return (
    <Main styles="">
        <Navbar/>

        <Outlet/>
    </Main>
  )
}
