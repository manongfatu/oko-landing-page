import "./css/styles.css";
import spoonFork from "./images/spoonfork.png";
import phone from "./images/phone.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-1">
            <h3 className="cover-title">OutdoorKitchenOutlet</h3>
          </div>
          <div className="col-2">
            <div className="content">
              <img className="icon-spoonfork" src={spoonFork} />
              <h1 className="site-title">OutdoorKitchenOutlet</h1>
              <h3 className="sub-title">
                The best price guaranteed on all
                <br />
                built-in-BBQ grills and outdoor products.
              </h3>
              <div className="divider"></div>
              <p>
                Call now for huge discounts on most major brands.
                <br />
                We beat all competitors price.
                <br />
                The more you buy the more you save.
              </p>
              <div className="contact-section">
                <span className="contact-label">Call Us Now!</span>
                <a href="tel:(888) 699-9391" className="contact-number">
                  <img src={phone} />
                  (888) 699-9391
                </a>
              </div>
              <p className="text-last">You will glad you did.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
