import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt="" 
                />
                <div className="home__row">
                    <Product 
                    id="12"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" 
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/41Ag4WE7uyL._SX324_BO1,204,203,200_.jpg"
                    rating={5}/>
                    <Product 
                    id="14"
                    title="Palm Tree Sunset - Vinyl Decal Skin Compatible with Amazon Echo Dot 3rd Generation Alexa - Decorations for Your Smart Home Speakers, Great Accessories Gift for mom, dad, Birthday, Kids"
                    price={8.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/71LvLGPQcyL._AC_SL1000_.jpg"
                    rating={4}/>

                </div>
                <div className="home__row">
                    <Product
                    id="13"
                    title="Silicone LED Digital Sports Electronic Wristwatch - Unisex"
                    price={12.99}
                    image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/53/718375/1.jpg?0866" 
                    rating={3}/>
                    <Product 
                    id="15"
                    title="2021 Men's Casual Shoes Breathable Shoes Running Sneakers"
                    price={16.99}
                    image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/79/359717/3.jpg?0565"
                    rating={4}
                    />
                    <Product
                    id="18"
                    title="Samsung SINGLE DOOR FRIDGE 212LITRES - BLUE WITH CROWN DESIGN"
                    price={185.99}
                    image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/43/794817/1.jpg?2490"
                    rating={5}  
                    />

                </div>
                <div className="home__row">
                <Product
                    id="19"
                    title="Samsung LED Display TV 5050"
                    price={387.99}
                    image="https://www.naijatechguide.com/wp-content/uploads/2020/02/samsung-scaled.jpg"
                    rating={5}  
                />  
                </div>
            </div>
        </div>
    )
}

export default Home
