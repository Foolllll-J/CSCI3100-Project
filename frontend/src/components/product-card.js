import React from 'react'

import PropTypes from 'prop-types'

import './product-card.css'

const ProductCard = (props) => {
  return (
    <div className={`product-card-speaker-card ${props.rootClassName} `}>
      <div className="product-card-image-container">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="product-card-image"
        />
        <div className="product-card-read-more-container">
          <span className="product-card-hint">Deatails</span>
          <svg viewBox="0 0 1024 1024" className="product-card-icon">
            <path
              d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <span className="product-card-product-name" style={{fontWeight: '600', fontSize: '28px'}}>{props.productName.length >= 15 ? props.productName.substring(0, 13) + '...' : props.productName}</span>
      <span className="product-card-product-id" style={{color: 'var(--green-light)', fontWeight: '500', fontSize: '24px', paddingTop: '5px'}}>{props.productPrice} HKD</span>
      <span className="product-card-text">{props.productID}</span>
    </div>
  )
}

ProductCard.defaultProps = {
  rootClassName: '',
  imageAlt: 'image',
  productPrice: '0 HKD',
  imageSrc:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&ixlib=rb-1.2.1&w=300',
  productName: 'product Name'
}

ProductCard.propTypes = {
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  productPrice: PropTypes.string,
  imageSrc: PropTypes.string,
  productName: PropTypes.string,
  productID: PropTypes.string,
}

export default ProductCard
