import React from 'react'

import PropTypes from 'prop-types'

import './doctor.css'

const Doctor = (props) => {
  return (
    <div className="doctor-doctor">
      <img alt={props.imageAlt} src={props.imageSrc} className="doctor-image" />
      <div className="doctor-heading">
        <h2 className="doctor-text">{props.heading}</h2>
        <p className="doctor-text1">{props.text}</p>
      </div>
    </div>
  )
}

Doctor.defaultProps = {
  imageAlt: 'image',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  imageSrc: '677174db-a227-4bc8-8021-05c93beb1ff9',
  heading: 'Dr. Audrey Smith',
}

Doctor.propTypes = {
  imageAlt: PropTypes.string,
  text: PropTypes.string,
  imageSrc: PropTypes.string,
  heading: PropTypes.string,
}

export default Doctor
