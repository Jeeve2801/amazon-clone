import React from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <div className="home__container">
          <img
            src="https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg"
            alt="wallpaper"
            className="home__image"
          />
          <div className="home__row">
            <Product
              id="1"
              title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
              price={165.0}
              rating={5}
              image="https://m.media-amazon.com/images/I/81j0RhrgNNL._AC_UL640_QL65_.jpg"
            />
            <Product
              id="2"
              title="From Blog to Business: How to Make Money Blogging & Work From Anywhere"
              price={120.0}
              rating={4}
              image="https://m.media-amazon.com/images/I/818TZIqtDGS._AC_UL640_QL65_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="3"
              title="All new Echo Show 5 (2nd Gen, 2021 release) - Smart speaker with 5.5inch screen, crisp sound and Alexa (Black)"
              price={5499.0}
              rating={4}
              image="https://m.media-amazon.com/images/I/514kzV+UPOS._SX679_.jpg"
            />
            <Product
              id="4"
              title="Amazfit GTS2 Mini Smart Watch with 1.55inch AMOLED Display, SpO2 Level Measurement, 14 Days' Battery Life, 70+ Sports Modes, Built-in Amazon Alexa & GPS, HR, Sleep&Stress Monitoring(Meteor Black)"
              price={6499.0}
              rating={4}
              image="https://m.media-amazon.com/images/I/61nxpq3D4JS._SX679_.jpg"
            />
            <Product
              id="5"
              title="2020 Apple iPad Air with A14 Bionic chip (10.9-inch/27.69 cm, Wi-Fi, 64GB) - Sky Blue (4th Generation)"
              price={50000.0}
              rating={4}
              image="https://m.media-amazon.com/images/I/71dwvdUu72L._SX679_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="5"
              title="LG UltraWide 29 Inch WFHD (2560 x 1080) IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, sRGB 99%, Multi Tasking Monitor, HDMI X 2, Made in India - 29WL50S, Black, Small"
              price={17499.0}
              rating={4}
              image="https://m.media-amazon.com/images/I/61dVD28WPrL._SX679_.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
