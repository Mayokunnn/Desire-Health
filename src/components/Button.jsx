import PropTypes from 'prop-types'

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
}

export default function Button({type, text}) {
    let color;
    if(type === 'primary') {
        color = 'text-white bg-azure-radiance-600 px-4 py-2 ml rounded hover:bg-azure-radiance-700 transition'
    }

  return (
    <button className={`capitalize font-medium text-base ${color}`}>{text}</button>
  )
} 
