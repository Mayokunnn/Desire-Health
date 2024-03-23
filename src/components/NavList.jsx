import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
NavList.propTypes={
    navItems: PropTypes.array
}


export default function NavList({navItems}) {
  return (
    <ul className='flex space-x-3'>
        {navItems.map((item, i)=> 
        <li key={i}>
        <NavLink to={`${item.toLowerCase() === 'home' ? '/' : item.toLowerCase().replace(/\s/g, '')}`} className='text-white font-normal'>{item}</NavLink>
        </li>) }
    </ul>
  )
}
