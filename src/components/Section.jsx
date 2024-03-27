
import PropTypes from 'prop-types'

Section.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    type: PropTypes.string,
} 

export default function Section({children, color, type = ''}) {
  return (
    <div className={`${color === 'grey' ? 'bg-[#f3f3f3] px-24 ' : 'bg-white px-48 py-12 h-screen'} space-y-6  ${type === 'about' ? 'bg-about-bg bg-cover py-12 h-screen' : ''} ${type === 'footer' ? 'h-[60vh] pb-6 pt-12' : ''}`}>
        {children}
    </div>
  )
}
