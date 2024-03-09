import React from 'react'

import PropTypes from 'prop-types'

import './solid-button1.css'

const SolidButton1 = (props) => {
  return (
    <div className="solid-button1-container">
      <button className="solid-button1-button Button button">
        {props.button}
      </button>
    </div>
  )
}

SolidButton1.defaultProps = {
  button: 'Button',
}

SolidButton1.propTypes = {
  button: PropTypes.string,
}

export default SolidButton1
