import { NavLink } from "react-router-dom";

export default function SignIn() {
  return (
    <NavLink to={'/signin'} className="text-white font-medium">Sign In</NavLink>
  )
}
