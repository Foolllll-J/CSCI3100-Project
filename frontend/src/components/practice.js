import React from 'react'

import PropTypes from 'prop-types'

import './practice.css'

const Practice = (props) => {
  return (
    <div className="practice-practice">
      <div className="practice-heading">
        <h3 className="practice-header">{props.title}</h3>
        <p className="practice-caption">{props.description}</p>
      </div>
      <div className="read-more">
        <span className="practice-text">Read more</span>
        <img
          alt="image"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d5181e55-6322-4af5-9dc3-672ed25dc104/28b9406b-aeae-452e-9c87-3c26809a1cc9?org_if_sml=1507&amp;force_format=original"
          className="practice-image"
        />
      </div>
    </div>
  )
}

Practice.defaultProps = {
  title: 'Cardiology',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
}

Practice.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Practice
