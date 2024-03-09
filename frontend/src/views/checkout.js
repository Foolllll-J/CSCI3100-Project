import React from 'react'
import { Link } from 'react-router-dom'

import { DateTimePrimitive } from '@teleporthq/react-components'

import SectionHeading from '../components/section-heading'
import './checkout.css'

const Checkout = (props) => {
  return (
    <div className="checkout-container">
      <div className="checkout-main">
        <div className="checkout-blog section-container"></div>
        <div className="checkout-max-width max-width-container">
          <SectionHeading
            heading="Checkout"
            subtitle="Confirm the order"
          ></SectionHeading>
          <div className="checkout-cards-container"></div>
          <div className="checkout-container03">
            <div className="checkout-container04">
              <div className="checkout-container05">
                <div className="checkout-container06">
                  <div className="checkout-container07">
                    <div className="checkout-container08">
                      <div className="checkout-container09">
                        <div className="checkout-container10">
                          <div className="checkout-container11">
                            <div className="checkout-container12">
                              <h1 className="checkout-text12 Heading-2">
                                Delivery
                              </h1>
                            </div>
                          </div>
                          <div className="checkout-container13">
                            <div className="checkout-container14">
                              <input
                                type="text"
                                required="true"
                                placeholder="First Name*"
                                className="checkout-textinput01 Content"
                              />
                            </div>
                            <div className="checkout-container15">
                              <input
                                type="text"
                                required="true"
                                placeholder="Last Name*"
                                className="checkout-textinput02"
                              />
                            </div>
                          </div>
                          <div className="checkout-container16">
                            <div className="checkout-container17">
                              <input
                                type="text"
                                required="true"
                                placeholder="Address Line 1*"
                                className="checkout-textinput03"
                              />
                            </div>
                          </div>
                          <div className="checkout-container18">
                            <div className="checkout-container19">
                              <input
                                type="text"
                                placeholder="Add Company, C/O, Apt, Suite, Unit"
                                className="checkout-textinput04"
                              />
                            </div>
                          </div>
                          <div className="checkout-container20">
                            <div className="checkout-container21">
                              <input
                                type="text"
                                required="true"
                                placeholder="Town/City*"
                                className="checkout-textinput05"
                              />
                            </div>
                            <div className="checkout-container22">
                              <input
                                type="text"
                                required="true"
                                placeholder="Postcode*"
                                className="checkout-textinput06"
                              />
                            </div>
                            <div className="checkout-container23">
                              <input
                                type="text"
                                required="true"
                                placeholder="Country/Region*"
                                className="checkout-textinput07"
                              />
                            </div>
                          </div>
                          <div className="checkout-container24">
                            <div className="checkout-container25">
                              <input
                                type="text"
                                required="true"
                                placeholder="Email*"
                                className="checkout-textinput08"
                              />
                            </div>
                            <div className="checkout-container26">
                              <input
                                type="text"
                                required="true"
                                placeholder="Phone Number*"
                                className="checkout-textinput09"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="checkout-container27">
                      <h1 className="checkout-text13 Heading-2">Payment</h1>
                      <div className="checkout-container28">
                        <span>
                          这里要做一个选择VISA 或 MasterCard
                          ，还没做，支付系统只做了VISA
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="checkout-container29">
                    <h1 className="checkout-text15 Heading-2">Order Review</h1>
                    <div className="checkout-container30">
                      <div className="checkout-container31">
                        <input type="checkbox" checked="true" />
                      </div>
                      <div className="checkout-container32">
                        <span className="checkout-text16">
                          I have read, understood, and accept the Terms of Use,
                          Terms of Sale, Privacy Policy, and Return &amp;
                          Exchange Policy.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="checkout-container33">
                  <Link
                    to="/payment-system"
                    className="checkout-navlink2 Button button"
                  >
                    {' '}
                    Save &amp; Submit
                  </Link>
                </div>
              </div>
              <div
                data-thq="thq-dropdown"
                className="checkout-thq-dropdown list-item"
              >
                <ul
                  data-thq="thq-dropdown-list"
                  className="checkout-dropdown-list"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="checkout-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="checkout-dropdown-toggle"
                    >
                      <span className="checkout-text17">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="checkout-dropdown1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="checkout-dropdown-toggle1"
                    >
                      <span className="checkout-text18">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="checkout-dropdown2 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="checkout-dropdown-toggle2"
                    >
                      <span className="checkout-text19">Sub-menu Item</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                data-thq="thq-dropdown"
                className="checkout-thq-dropdown1 list-item"
              >
                <ul
                  data-thq="thq-dropdown-list"
                  className="checkout-dropdown-list1"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="checkout-dropdown3 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="checkout-dropdown-toggle3"
                    >
                      <span className="checkout-text20">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="checkout-dropdown4 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="checkout-dropdown-toggle4"
                    >
                      <span className="checkout-text21">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="checkout-dropdown5 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="checkout-dropdown-toggle5"
                    >
                      <span className="checkout-text22">Sub-menu Item</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="checkout-container34">
                <h1 className="checkout-text23 Heading-2">In Your Cart</h1>
                <div className="checkout-container35">
                  <div className="checkout-container36">
                    <div className="checkout-container37"></div>
                    <div className="checkout-container38">
                      <div className="checkout-container39">
                        <div className="checkout-container40">
                          <div className="checkout-container41">
                            <div className="checkout-container42">
                              <span>Subtotal</span>
                              <span>Estimated Delivery &amp; Handling</span>
                            </div>
                            <div className="checkout-container43">
                              <span>Total</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="checkout-container44">
                        <div className="checkout-container45">
                          <div className="checkout-container46">
                            <span>$:</span>
                            <span className="checkout-text28">Free</span>
                          </div>
                          <span>价格</span>
                        </div>
                        <div className="checkout-container47">
                          <span>$:</span>
                          <span>价格</span>
                        </div>
                      </div>
                    </div>
                    <div className="checkout-container48">
                      <span>Arrives by </span>
                      <span>
                        <DateTimePrimitive
                          format="DD/MM/YYYY"
                          date="Sat Mar 09 2024 01:50:22 GMT+0800 (中国标准时间)"
                        ></DateTimePrimitive>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
