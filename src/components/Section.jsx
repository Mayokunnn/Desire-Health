
import PropTypes from 'prop-types'

Section.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    type: PropTypes.string,
} 

export default function Section({children, color, type = ''}) {
  return (
    <div className={`${color === 'grey' ? 'bg-[#f3f3f3] ' : 'bg-white h-screen px-48 py-12'} space-y-6  ${type === 'about' ? 'bg-about-bg bg-cover h-[80vh]' : ''} ${type === 'footer' ? 'h-[60vh]' : ''}`}>
        {children}
    </div>
  )
}
