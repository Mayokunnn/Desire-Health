
import PropTypes from 'prop-types'

Section.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
}

export default function Section({children, color}) {
  return (
    <div className={`${color === 'grey' ? 'bg-[#cccccc]' : 'bg-white'} h-screen px-48 py-12 `}>
        {children}
    </div>
  )
}
