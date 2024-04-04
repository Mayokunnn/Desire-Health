import PropTypes from 'prop-types';

Logo.propTypes = {
    color: PropTypes.string,
    
}

export default function Logo({color}) {
const colorHeader = color === 'header'
? 'text-white text-lg'
: color === 'footer'
? 'text-azure-radiance-600 text-3xl'
: color === 'onboarding'
? 'text-azure-radiance-600 text-base'
: 'text-black';


  return (
    <h2 className={`capitalize open-sans font-normal break-all leading-none ${colorHeader}`}>
        Desire
       <p className='uppercase font-bold'>Health</p> 
    </h2>
  )
}
