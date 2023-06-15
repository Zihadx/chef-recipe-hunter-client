import React from 'react';
import Hero from '../../Componets/Hero';
import Recipes from '../../Componets/Recipes';
import Chefs from '../../Componets/Chefs';
import JoinUs from '../../Componets/JoinUs';
// import AboutUs from '../../Componets/AboutUs';

const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <Chefs></Chefs>
           <JoinUs></JoinUs>
           {/* <AboutUs></AboutUs> */}
        </div>
    );
};

export default Home;