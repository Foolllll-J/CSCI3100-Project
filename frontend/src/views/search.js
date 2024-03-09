import React from 'react'
import { Link } from 'react-router-dom'

import ProductCard from '../components/product-card'
import './search.css'

const Search = (props) => {
  return (
    <div className="search-container">
      <div className="search-main">
        <div className="search-speakers section-container1">
          <div className="search-max-width max-content-container">
            <div className="search-heading-container">
              <h1 className="search-text12 Heading-1">
                <br></br>
                <br></br>
                <span>Search results</span>
              </h1>
            </div>
            <div className="search-speakers-container">
              <Link to="/product-info">
                <ProductCard
                  aAAA="商品信息1"
                  lastName="价格1"
                  productName="商品1"
                  rootClassName="product-card-root-class-name"
                  className="search-component"
                ></ProductCard>
              </Link>
              <ProductCard
                aAAA="digital marketing associate @ WPP"
                imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBlb3BsZXxlbnwwfHx8fDE2NDM3MDU1MTE&amp;ixlib=rb-1.2.1&amp;h=300"
                lastName="Simpson"
                productName="Mellisa"
              ></ProductCard>
              <ProductCard
                aAAA="VP OF Marketing @ BUZZFEED"
                imageSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHBlb3BsZXxlbnwwfHx8fDE2NDM3MDU1MTE&amp;ixlib=rb-1.2.1&amp;h=300"
                lastName="tevlenko"
                productName="alina"
              ></ProductCard>
              <ProductCard
                aAAA="HEAD OF DIGITAL @ HUBSPOT"
                imageSrc="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI5fHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&amp;ixlib=rb-1.2.1&amp;h=300"
                lastName="iprovich"
                productName="gregor"
              ></ProductCard>
              <ProductCard
                aAAA="marketing officer @ salesforce"
                imageSrc="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&amp;ixlib=rb-1.2.1&amp;h=300"
                lastName="daris"
                productName="damian"
              ></ProductCard>
              <ProductCard
                aAAA="social media manager @ vodafone"
                imageSrc="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0N3x8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY5MQ&amp;ixlib=rb-1.2.1&amp;h=300"
                lastName="warren"
                productName="matt"
              ></ProductCard>
              <ProductCard
                aAAA="creative director @ BBDO"
                imageSrc="https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2OHx8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY5MQ&amp;ixlib=rb-1.2.1&amp;h=300"
                lastName="moore"
                productName="kathie"
              ></ProductCard>
              <ProductCard
                aAAA="CMO @ youtube Europe"
                imageSrc="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwNHx8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY4MQ&amp;ixlib=rb-1.2.1&amp;h=300"
                lastName="chan"
                productName="erick"
              ></ProductCard>
            </div>
          </div>
        </div>
        <div className="search-container3">
          <div className="search-pagination">
            <button className="search-previous button-option button">
              <svg viewBox="0 0 1024 1024" className="search-icon10">
                <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
              </svg>
              <span className="search-text16">Previous</span>
            </button>
            <div className="search-pages">
              <div className="search-primary">
                <div className="search-number-current page-current page">
                  <span className="search-text17">1</span>
                </div>
                <div className="page">
                  <span className="search-text18">2</span>
                </div>
                <div className="page search-number1">
                  <span className="search-text19">3</span>
                </div>
              </div>
              <img
                alt="image"
                src="/external/more.svg"
                className="search-more"
              />
              <div className="page">
                <span className="search-text20">12</span>
              </div>
            </div>
            <button className="search-next button-option button">
              <span className="search-text21">Next</span>
              <svg viewBox="0 0 1024 1024" className="search-icon12">
                <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
