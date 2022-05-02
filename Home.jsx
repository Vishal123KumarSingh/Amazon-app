import React from "react";
import Product from "../Product/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Imag not Found"
        ></img>
        <div className="home__row">
          <Product
            id={1}
            title="The Lean Startup efe;ea awfe ewaew lwe awe ;rawe wae rewar;wlwewwe;What is a computer set?In general, set refers tng to meet a specific requirement. For example, a user "
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_2x._SY608_CB628315133_.jpg"
            price={50.05}
            rating={3}
          />
          <Product
            id={2}
            title="What is a computer set?
In general, set refers to adjusting or modifying a setting to meet a specific requirement. For example, a user "
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/UHI/D44040375_IN_PC-Electronics-BAU-GW-Creatives_758x608_dbcc-10.5x._SY608_CB621866240_.jpg"
            price={20.05}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id={3}
            title="This is a Amazon sale , where you can choose any item of number 5"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/MayART22/T1/Desktop_Gateway_CC_758x608_En2x._SY608_CB621830421_.jpg"
            price={90.05}
            rating={5}
          />
          <Product
            id={4}
            title="Apple iPhone 12 (128GB) - Blue"
            image="https://m.media-amazon.com/images/I/41xssMLI2DL._AC_SY400_.jpg"
            price={120.05}
            rating={4}
          />
          <Product
            id={5}
            title="What is a computer set? In general, , a user "
            image="https://m.media-amazon.com/images/I/41ezRvTwcaL._AC_SY400_.jpg"
            price={80.05}
            rating={5}
          />
          <Product
            id={6}
            title="The Lean Startup efe;ea awfe ewaew lwe awe ;rawe wae rewar;wlwewwe;"
            image="https://m.media-amazon.com/images/I/51Q1tNCJgkS._AC_SY400_.jpg"
            price={10.05}
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id={7}
            title="123.9cm (49 inch) Gaming Monitor with 32:9 aspect ratio display and 240Hz refresh rate All-encompassing 1000R display with 32:9 aspect ratio240Hz refresh rate with low input lag QLED technology for a more realistic gaming experience"
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            price={1000.05}
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
