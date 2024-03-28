import PropTypes from 'prop-types'

import Button from "./Button";
import Logo from "./Logo";
import NavList from "./NavList";

Navbar.propTypes = {
  type: PropTypes.string,
}

export default function Navbar({type = ''}) {
  return (
    <div className="flex items-center justify-between px-16 py-6 w-full">
        <Logo color={type ? 'onboarding' :  'header'}/>
        <NavList type={type} navItems={['Home','About Us','Services','Join Us' ,'Blogs', 'Forums', 'Contact Us']} />
        <div className="flex gap-6 items-center justify-center">
            {!type && <Button type='transparent'/>}
            <Button type={'primary'} text={type === 'onboarding' ? 'sign in' : 'register'}/>
        </div>
    </div>
  )
}
