import Button from "./Button";
import Logo from "./Logo";
import NavList from "./NavList";
import SignIn from "./SignInMessage";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-16 py-6 w-full absolute">
        <Logo color={'header'}/>
        <NavList navItems={['Home','About Us','Services','Join Us' ,'Blogs', 'Forums', 'Contact Us']} />
        <div className="flex gap-6 items-center justify-center">
            <SignIn/>
            <Button type={'primary'} text={'register'}/>
        </div>
    </div>
  )
}
