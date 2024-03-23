import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import ProductCard from '../components/product-card'
import './search.css'

// Todo: 主页按类别搜索；按价格过滤

const Search = (props) => {
    const [displayedProducts, setDisplayedProducts] = useState([])
    const [resultQuantity, setResultQuantity] = useState(0)
    const [resultPageQuantity, setResultPageQuantity] = useState(0)

    const { keyword, category, page } = useParams();

    const fetchSearchResults = async (keyword='', category='', page=1, userToken='') => {
        try {
            const response = await axios.post(`http://${props.SERVER_URL}/api/fetch-search-results`, {
                keyword: keyword,
                category: category,
                page: page,
                userToken: userToken
            })
            setDisplayedProducts(response.data.searchResults)
            setResultQuantity(response.data.quantity)
            setResultPageQuantity(Math.ceil(response.data.quantity / 8))
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                console.log(error.response.data.message)
            } else {
                console.log('Some error occurs. Please try again later.')
            }
        }
    }

    useEffect(() => {
        fetchSearchResults(keyword, category, page, props.userToken)
    }, [keyword, category, page, props.userToken])

    const PageNumbers = () => {
        if (Number(page) === 0 || resultPageQuantity === 0) {
            return <span></span>
        } else if (resultPageQuantity > 0 && resultPageQuantity <= 5) {
            return (
                <div className="search-pages">
                    <div className="search-primary">
                        {[...Array(resultPageQuantity)].map((_, index) => (
                            <Link to={`/search/${keyword}/${category}/${index+1}`} key={index} className={index + 1 === Number(page) ? "search-number-current page-current page" : "page"}>
                                <span className="search-text">{index + 1}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            )
        } else if (resultPageQuantity > 5) {
            if (Number(page) <= 3) {
                return (
                    <div className="search-pages">
                        <div className="search-primary">
                            {[...Array(resultPageQuantity)].slice(0, Number(page) + 1).map((_, index) => (
                                <Link to={`/search/${keyword}/${category}/${index+1}`} key={index} className={index + 1 === Number(page) ? "search-number-current page-current page" : "page"}>
                                    <span className="search-text">{index + 1}</span>
                                </Link>
                            ))}
                            <img
                                alt="image"
                                src="/external/more.svg"
                                className="search-more"
                            />
                            <Link to={`/search/${keyword}/${category}/${resultPageQuantity}`} className="page">
                                <span className="search-text20">{resultPageQuantity}</span>
                            </Link>
                        </div>
                    </div>
                )
            } else if (Number(page) > 3 && Number(page) < resultPageQuantity - 2) {
                return (
                    <div className="search-pages">
                        <div className="search-primary">
                            <Link to={`/search/${keyword}/${category}/1`} className="page">
                                <span className="search-text20">{1}</span>
                            </Link>
                            <img
                                alt="image"
                                src="/external/more.svg"
                                className="search-more"
                            />
                            {[...Array(resultPageQuantity)].slice(Number(page) - 2, Number(page) + 1).map((_, index) => (
                                <Link to={`/search/${keyword}/${category}/${Number(page)+index-1}`} key={index} className={Number(page)+index-1 === Number(page) ? "search-number-current page-current page" : "page"}>
                                    <span className="search-text">{Number(page) + index - 1}</span>
                                </Link>
                            ))}
                            <img
                                alt="image"
                                src="/external/more.svg"
                                className="search-more"
                            />
                            <Link to={`/search/${keyword}/${category}/${resultPageQuantity}`} className="page">
                                <span className="search-text20">{resultPageQuantity}</span>
                            </Link>
                        </div>
                    </div>
                )
            } else if (Number(page) <= resultPageQuantity) {
                return (
                    <div className="search-pages">
                        <div className="search-primary">
                            <Link to={`/search/${keyword}/${category}/1`} className="page">
                                <span className="search-text20">1</span>
                            </Link>
                            <img
                                alt="image"
                                src="/external/more.svg"
                                className="search-more"
                            />
                            {[...Array(resultPageQuantity)].slice(Number(page) - 2, resultPageQuantity).map((_, index) => (
                                <Link to={`/search/${keyword}/${category}/${Number(page)+index-1}`} key={index} className={Number(page)+index-1 === Number(page) ? "search-number-current page-current page" : "page"}>
                                    <span className="search-text">{Number(page)+index - 1}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )
            } else {
                return (
                    <span></span>
                )
            } 
        }
    }
    
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
                {(displayedProducts && displayedProducts instanceof Array && displayedProducts.length !== 0) ? (displayedProducts.map(item => {
                    const itemId = item.productID
                    return (
                        <Link key={itemId} to={`/product-info/${item.productID}`}>
                            <ProductCard
                                productID={`${item.productID}`}
                                productPrice={`${item.productPrice}`}
                                productName={`${item.productName}`}
                                rootClassName="product-card-root-class-name"
                                className="search-component"
                            ></ProductCard>
                        </Link>
                    )
                })) : (<div>No product matched</div>)}
              
            </div>
          </div>
        </div>
        <div className="search-container3">
          <div className="search-pagination">
            <Link
                to={`/search/${keyword}/${category}/${Number(page)-1}`}
                className="search-previous button-option button" 
                style={(Number(page) > 1 && Number(page) <= resultPageQuantity) ? {display: 'flex'} : {display: 'none'}}>
              <svg viewBox="0 0 1024 1024" className="search-icon10">
                <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
              </svg>
              <span className="search-text16">Previous</span>
            </Link>
            <PageNumbers />
            <Link
                to={`/search/${keyword}/${category}/${Number(page)+1}`} 
                className="search-next button-option button"
                style={(Number(page) > 0 && Number(page) < resultPageQuantity) ? {display: 'flex'} : {display: 'none'}}>
              <span className="search-text21">Next</span>
              <svg viewBox="0 0 1024 1024" className="search-icon12">
                <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
