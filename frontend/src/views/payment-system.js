import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './payment-system.css'

const PaymentSystem = (props) => {
  return (
    <div className="payment-system-container">
      <Helmet>
        <title>Payment-System - MARTCUHK</title>
        <meta property="og:title" content="Payment-System - MARTCUHK" />
      </Helmet>
      <div className="payment-system-container01">
        <div data-modal="practices" className="payment-system-modal">
          <div className="payment-system-practices">
            <div className="payment-system-heading">
              <span className="payment-system-header">Our practices</span>
              <svg
                viewBox="0 0 1024 1024"
                data-close="practices"
                className="payment-system-close"
              >
                <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
              </svg>
            </div>
            <div className="payment-system-grid">
              <div className="payment-system-section">
                <div className="payment-system-heading1">
                  <span className="payment-system-header01">Cardiology</span>
                  <span className="payment-system-caption">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="payment-system-text">Read more</span>
                  <img
                    alt="image"
                    src="/external/arrow-2.svg"
                    className="payment-system-image"
                  />
                </div>
              </div>
              <div className="payment-system-section1">
                <div className="payment-system-heading2">
                  <span className="payment-system-header02">Orthopedics</span>
                  <span className="payment-system-caption1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="payment-system-text01">Read more</span>
                  <img
                    alt="image"
                    src="/external/arrow-2.svg"
                    className="payment-system-image01"
                  />
                </div>
              </div>
              <div className="payment-system-section2">
                <div className="payment-system-heading3">
                  <span className="payment-system-header03">Ophtalmology</span>
                  <span className="payment-system-caption2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="payment-system-text02">Read more</span>
                  <img
                    alt="image"
                    src="/external/arrow-2.svg"
                    className="payment-system-image02"
                  />
                </div>
              </div>
              <div className="payment-system-section3">
                <div className="payment-system-heading4">
                  <span className="payment-system-header04">Pediatrics</span>
                  <span className="payment-system-caption3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="payment-system-text03">Read more</span>
                  <img
                    alt="image"
                    src="/external/arrow-2.svg"
                    className="payment-system-image03"
                  />
                </div>
              </div>
              <div className="payment-system-section4">
                <div className="payment-system-heading5">
                  <span className="payment-system-header05">Nutrition</span>
                  <span className="payment-system-caption4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="payment-system-text04">Read more</span>
                  <img
                    alt="image"
                    src="/external/arrow-2.svg"
                    className="payment-system-image04"
                  />
                </div>
              </div>
              <div className="payment-system-section5">
                <div className="payment-system-heading6">
                  <span className="payment-system-header06">General</span>
                  <span className="payment-system-caption5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="payment-system-text05">Read more</span>
                  <img
                    alt="image"
                    src="/external/arrow-2.svg"
                    className="payment-system-image05"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="payment-system-hero">
          <header data-thq="thq-navbar" className="payment-system-navbar">
            <img
              alt="image"
              src="data:image/png;base64,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"
              className="payment-system-image06"
            />
            <div className="payment-system-left">
              <nav className="payment-system-links">
                <span className="payment-system-link">Individuals</span>
                <span className="payment-system-link01">Businesses</span>
                <span className="payment-system-link02">Innovators</span>
                <span className="payment-system-link03">Everyone</span>
              </nav>
            </div>
            <div
              data-thq="thq-navbar-btn-group"
              className="payment-system-right"
            >
              <button className="payment-system-phone button">
                <img
                  alt="image"
                  src="/external/phone.svg"
                  className="payment-system-image07"
                />
                <span className="payment-system-text06">+852 1666-6666</span>
              </button>
              <a
                href="#book"
                className="payment-system-book button-main button"
              >
                <img
                  alt="image"
                  src="/external/calendar.svg"
                  className="payment-system-image08"
                />
                <span className="payment-system-text07">
                  Apply for a Credit Card
                </span>
              </a>
            </div>
            <div
              data-thq="thq-burger-menu"
              className="payment-system-burger-menu"
            >
              <svg viewBox="0 0 1024 1024" className="payment-system-icon1">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div
              data-thq="thq-mobile-menu"
              className="payment-system-mobile-menu"
            >
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="payment-system-nav"
              >
                <div className="payment-system-container02">
                  <img
                    alt="image"
                    src="/external/logo-1500h-1500h.png"
                    className="payment-system-image09"
                  />
                  <div
                    data-thq="thq-close-menu"
                    className="payment-system-menu-close"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="payment-system-icon3"
                    >
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="payment-system-nav1"
                >
                  <span className="payment-system-text08">Features</span>
                  <span className="payment-system-text09">How it works</span>
                  <span className="payment-system-text10">Prices</span>
                  <span className="payment-system-text11">Contact</span>
                  <a
                    href="#book"
                    className="payment-system-book1 button-main button"
                  >
                    <img
                      alt="image"
                      src="/external/calendar.svg"
                      className="payment-system-image10"
                    />
                    <span className="payment-system-text12">
                      Book an appointment
                    </span>
                  </a>
                </nav>
              </div>
            </div>
          </header>
          <div className="payment-system-background"></div>
        </section>
        <section id="book" className="payment-system-book2">
          <div className="payment-system-heading7">
            <h2 className="payment-system-text13">Visa Payment Portal</h2>
            <p className="payment-system-text14">
              Complete your transaction quickly and securely. Please have your
              Visa credit card details ready. Transactions are encrypted with
              256-bit SSL security. For your convenience, we also offer the
              option to save your card information for future purchases. Please
              enter your card details below and follow the steps to finalize
              your payment.
            </p>
          </div>
          <ul className="list"></ul>
          <div className="payment-system-container03">
            <div className="payment-system-container04">
              <h3 className="payment-system-header07">Total Amount:</h3>
              <div className="payment-system-container05">
                <p>$:</p>
                <p>价格</p>
              </div>
              <span className="payment-system-text17">
                <span className="payment-system-text18">
                  Power by
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="payment-system-text19">Visa</span>
                <span>  | </span>
                <span className="payment-system-text21"> Terms   Privacy</span>
                <span> </span>
              </span>
            </div>
            <div className="payment-system-container06">
              <div className="payment-system-container07">
                <h1 className="payment-system-text23">Payment method</h1>
                <span className="payment-system-text24">Card information</span>
              </div>
              <div className="payment-system-container08">
                <input
                  type="text"
                  placeholder="1234 1234 1234 1234"
                  className="payment-system-textinput Content"
                />
                <input
                  type="date"
                  required="true"
                  className="payment-system-textinput1 Content input"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="payment-system-textinput2"
                />
              </div>
              <div className="payment-system-container09">
                <span className="payment-system-text25">Name on card</span>
              </div>
              <div className="payment-system-container10">
                <input
                  type="text"
                  placeholder="Name"
                  className="payment-system-textinput3"
                />
              </div>
              <div className="payment-system-container11">
                <span className="payment-system-text26">Billing address</span>
              </div>
              <div className="payment-system-container12">
                <input
                  type="text"
                  placeholder="Address"
                  className="payment-system-textinput4"
                />
              </div>
              <div className="payment-system-container13">
                <span className="payment-system-text27">
                  Securely save my information for 1-click checkout
                </span>
                <span className="payment-system-text28">
                  Enter your phone number to create a Link account and pay
                  faster on VISA, LLC and everywhere Link is accepted.
                </span>
                <input
                  type="text"
                  placeholder="(852)0000-0000"
                  className="payment-system-textinput5"
                />
              </div>
              <div className="payment-system-container14">
                <Link
                  to="/payment-success"
                  className="payment-system-book3 button-main button"
                >
                  <span>Submit</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="payment-system-download"></div>
        <div className="payment-system-footer">
          <div className="payment-system-left1">
            <div className="payment-system-brand">
              <p className="payment-system-text30">
                Need help? We’re always here when you need us
              </p>
            </div>
            <div className="payment-system-socials">
              <div className="social">
                <img
                  alt="image"
                  src="/external/insider.svg"
                  className="payment-system-image11"
                />
              </div>
              <div className="social">
                <img
                  alt="image"
                  src="/external/instagram.svg"
                  className="payment-system-image12"
                />
              </div>
              <div className="social">
                <img
                  alt="image"
                  src="/external/twitter.svg"
                  className="payment-system-image13"
                />
              </div>
            </div>
            <div className="payment-system-legal">
              <span className="payment-system-copyright">
                © 2024 finbest. All Rights Reserved.
              </span>
              <span className="legal-link">Privacy Policy</span>
              <span className="legal-link">Terms of Use</span>
            </div>
          </div>
          <div className="payment-system-right1">
            <div className="payment-system-list">
              <span className="payment-system-header08">About Visa</span>
              <div className="payment-system-links1">
                <span className="payment-system-link04">Home</span>
                <span className="payment-system-link05">Careers</span>
                <span className="payment-system-link06">Services</span>
                <span className="payment-system-link07">Blog</span>
                <span className="payment-system-link08">Support</span>
              </div>
            </div>
            <div className="payment-system-list1">
              <span className="payment-system-header09">Our Values</span>
              <div className="payment-system-links2">
                <span className="payment-system-link09">Social Impact</span>
                <span className="payment-system-link10">Inclusion</span>
                <span className="payment-system-link11">Diversity</span>
                <span className="payment-system-link12">Responsibility</span>
              </div>
            </div>
            <div className="payment-system-list2">
              <span className="payment-system-header10">Contact</span>
              <div className="payment-system-links3">
                <span className="payment-system-link13">
                  P.O. Box 8999, San Francisco, California
                </span>
                <a
                  href="mailto:contact@template.new?subject=Main"
                  className="payment-system-link14"
                >
                  contact@visa.com
                </a>
                <a
                  href="tel:(004) 234 - 5678"
                  className="payment-system-link15"
                >
                  (001)800-847-2911
                </a>
              </div>
            </div>
          </div>
          <div className="payment-system-legal1">
            <div className="payment-system-row">
              <span className="legal-link">Privacy Policy</span>
              <span className="legal-link">Terms of Use</span>
            </div>
            <span className="payment-system-copyright5">
              © 2022 finbest. All Rights Reserved.
            </span>
          </div>
        </div>
        <div>
          <div className="payment-system-container16">
            <Script
              html={`<script>
const modalOpen = document.querySelectorAll('[data-open]');
const modalClose = document.querySelectorAll('[data-close]');

modalOpen.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.open}"]\`);
        modal.style.display = "flex";
    });
});

modalClose.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.close}"]\`);
        modal.style.display = "none";
    });
});
</script>
`}
            ></Script>
          </div>
        </div>
        <div>
          <div className="payment-system-container18">
            <Script
              html={`<script>
const dataLetters = document.querySelectorAll("[data-letter]");
let activeLetters = [];
const maxResults = 6;

dataLetters.forEach(letter => {
  letter.addEventListener("click", function() {
    if (this.classList.contains("letter-active")) {
      this.classList.remove("letter-active");
      activeLetters = activeLetters.filter(a => a !== this.dataset.letter);
    } else {
      this.classList.add("letter-active");
      activeLetters.push(this.dataset.letter);
    }
    if (activeLetters.length == 0) {
      document.querySelector("[data-teleport='results']").style.display = "none";
      return;
    }
    showResults();
  });
});

const showResults = () => {
  fetch("https://raw.githubusercontent.com/Shivanshu-Gupta/web-scrapers/master/medical_ner/medicinenet-diseases.json")
    .then(response => response.json())
    .then(data => {
      const filteredData = data.filter(item => {
        const firstLetter = item.disease.charAt(0).toLowerCase();
        if (activeLetters.includes(firstLetter)) {
          return true;
        }
        return false;
      });

      document.querySelector("[data-teleport='results']").style.display = "flex";
      const resultsContainer = document.querySelector("[data-results='letters']");
      resultsContainer.innerHTML = "";

      let counter = 0;
      const diseaseGroups = {};
      const totalActiveLetters = activeLetters.length;

      filteredData.forEach(disease => {
        const firstLetter = disease.disease[0].toLowerCase();
        if (diseaseGroups[firstLetter]) {
          diseaseGroups[firstLetter].push(disease);
        } else {
          diseaseGroups[firstLetter] = [disease];
        }
      });

      Object.keys(diseaseGroups).sort().forEach((firstLetter, index) => {
        const diseasesForThisLetter = diseaseGroups[firstLetter];
        const diseasesToShow = diseasesForThisLetter.slice(0, Math.ceil(maxResults / totalActiveLetters));

        diseasesToShow.forEach(disease => {
          const resultContainer = document.createElement("div");
          resultContainer.classList.add("search-result");
          resultContainer.classList.add("invisible");
          resultContainer.style.animationDelay = \`\${counter * 0.25}s\`;

          const resultText = document.createElement("span");
          resultText.classList.add("result-text");
          resultText.textContent = disease.disease;

          resultContainer.appendChild(resultText);
          resultsContainer.appendChild(resultContainer);
          counter++;

          if (counter === maxResults) {
            const moreContainer = document.createElement("div");
            moreContainer.classList.add("search-result");
            moreContainer.classList.add("more-results");

            const moreText = document.createElement("span");
            moreText.classList.add("result-text");
            moreText.textContent = "More";

            moreContainer.appendChild(moreText);
            resultsContainer.appendChild(moreContainer);
            addedMoreContainer = true;
            return;
          }
        });
      });
    });
};
</script>
`}
            ></Script>
          </div>
        </div>
        <div>
          <div className="payment-system-container20">
            <Script
              html={`<script>
function scroll(direction) {
  const doctorsDiv = document.querySelector('[data-teleport="doctors"]');
  const scrollAmount = 300;
  if (direction === 'previous') {
    doctorsDiv.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  } else if (direction === 'next') {
    doctorsDiv.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
}

const buttons = document.querySelectorAll('[data-doctors]');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const direction = button.dataset.doctors;
    scroll(direction);
  });
});
</script>`}
            ></Script>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentSystem
