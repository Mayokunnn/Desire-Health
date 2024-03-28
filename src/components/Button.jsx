import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
}

export default function Button({type = 'primary', text = 'register'}) {
    let color;
    if(type === 'primary') {
        color = 'text-white text-sm bg-azure-radiance-600 px-4 ml-3 max-w-3-6 py-2 rounded hover:bg-azure-radiance-700 transition'
    }
    if(type === 'secondary') {
        color = 'text-white bg-[#66748c] text-xs px-4 py-2 max-w-3-6 rounded hover:bg-[#535f76] transition'
    }
    if(type === 'small'){
        color = 'text-white text-xs bg-azure-radiance-600 ml-3 px-3 max-w-3-6 py-1.5 rounded hover:bg-azure-radiance-700 transition'
    }
    if(type === 'transparent'){
        return <Link to={'/onboarding'} className="text-white font-medium">Sign In</Link>
    }
    if(type === 'form'){
        color = 'text-white text-xs bg-azure-radiance-600 flex items-center justify-center w-full py-2 rounded hover:bg-azure-radiance-700 transition'
    }

  return (
    <button className={`capitalize font-medium focus:outline-none  ${color}`}>{text}</button>
  )
} 
