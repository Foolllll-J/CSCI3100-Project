import React from 'react'

import PropTypes from 'prop-types'

import './features.css'

const Features = (props) => {
  return (
    <div className="features-section quick-links">
      <div className="features-heading">
        <h3 className="features-header">{props.title}</h3>
        <img alt="image" src={props.icon} className="features-icon" />
      </div>
      <p className="features-text">{props.description}</p>
      <div className="features-divider"></div>
    </div>
  )
}

Features.defaultProps = {
  icon: '/external/arrow.svg',
  title: 'Virtual Assistant',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
}

Features.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Features
