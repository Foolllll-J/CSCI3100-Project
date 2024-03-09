import React from 'react'

import PropTypes from 'prop-types'

import OutlineButton1 from './outline-button1'
import './place-card1.css'

const PlaceCard1 = (props) => {
  return (
    <div className="place-card1-container">
      <img
        alt={props.imageAlt}
        src={props.image}
        className="place-card1-image"
      />
      <div className="place-card1-container1">
        <span className="place-card1-text">{props.city}</span>
        <span className="place-card1-text1">{props.description}</span>
        <OutlineButton1 button1="Discover place"></OutlineButton1>
      </div>
    </div>
  )
}

PlaceCard1.defaultProps = {
  image:
    'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000',
  imageAlt: 'image',
  city: 'City Name',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
}

PlaceCard1.propTypes = {
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  city: PropTypes.string,
  description: PropTypes.string,
}

export default PlaceCard1
