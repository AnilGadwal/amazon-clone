import React from 'react'
import "./Home.css"
import Product from "./Product"

const Home = () => {
    return (
        <div className="home">
            <img
            className="home_image" 
            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/Chhalaang/nobranding/1500x600_Hero-Tall_p._CB415559680_.jpg"
            alt=""
            />

            <div className="home_row">
            <Product
            id="234234"
            title="Samsung 24 Inch LS24R350FHWXXL FHD Monitor with Bezel-Less Design, AMD Freesync and 75hz Refresh Rate"
            image="https://m.media-amazon.com/images/I/5149xWPtfML._AC_SY200_.jpg"
            price={150}
            rating={4}

            />

            <Product
            id="456456"
            title="Acer 23.6 Inch VA Panel Curved Full HD 1920 x 1080 144Hz 4MS LED Monitor I HDMI Display Port I AMD FreeSync Technology I Eye Care Features (ED242QRA)"
            image="https://m.media-amazon.com/images/I/714mr6GxecL._AC_UY218_.jpg"
            price={150}
            rating={2}/>
            </div>

            <div className="home_row">
            <Product
            id="234234"
            title="BenQ (GW2480) 23.8 Inch FHD 1080p Eye-Care LED Backlit Computer Monitor, 1920x1080 Display, IPS ,Brightness Intelligence"
            image="https://images-eu.ssl-images-amazon.com/images/I/71j2461ZzkL._AC_UL160_SR160,160_.jpg"
            price={150}
            rating={3}
            />

            <Product
            id="768678"
            title="BenQ EW2480 23.8 Eye-Care IPS Monitor | FHD 1080p HDRi | Brightness Intelligence Plus, Edge to Edge Slim Bezel"
            image="https://images-eu.ssl-images-amazon.com/images/I/71f8%2B16FLwL._AC_UL160_SR160,160_.jpg"
            price={150} 
            rating={5}/>
            
            <Product
            id="123213"
            title="Acer Nitro VG240YB 23.8 inch Full HD IPS Monitor I AMD Radeon Freesync Technology I 1MS VRB I 75Hz Refresh I 2 x HDMI and 1 x VGA Ports"
            image="https://images-eu.ssl-images-amazon.com/images/I/71JPEEGxpWL._AC_UL160_SR160,160_.jpg"
            price={150}
            rating={3}/>
            </div>

            <div className="home_row">
            <Product
            id="35745"
            title="Dell P Series 24-inch (60.96 cm) Screen Full HD (1080p) LED-Lit Monitor with IPS Panel - P2419H (Black)"
            image="https://images-eu.ssl-images-amazon.com/images/I/91ddm%2BP-VCL._AC_UL160_SR160,160_.jpg"
            price={150}
            rating={3}
            />
            </div>

        </div>
    )
}

export default Home
