import PropTypes from 'prop-types'

Main.propTypes = {
    children: PropTypes.node.isRequired,
    styles: PropTypes.string, 
}

export default function Main({children, styles = ''}) {
  return (
    <div className={` ${styles}`}>
        {children} 
    </div>
  )
}
