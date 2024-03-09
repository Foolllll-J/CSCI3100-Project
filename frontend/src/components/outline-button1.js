import React from 'react'

import PropTypes from 'prop-types'

import './outline-button1.css'

const OutlineButton1 = (props) => {
  return (
    <div className="outline-button1-container">
      <button className="outline-button1-button Button button">
        {props.button1}
      </button>
    </div>
  )
}

OutlineButton1.defaultProps = {
  button1: 'Button',
}

OutlineButton1.propTypes = {
  button1: PropTypes.string,
}

export default OutlineButton1
