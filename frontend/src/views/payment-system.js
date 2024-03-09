import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

import './payment-system.css'

const PaymentSystem = (props) => {
  return (
    <div className="payment-system-container">
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
