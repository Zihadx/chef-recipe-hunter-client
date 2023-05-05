import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <Outlet></Outlet>
            
            <Footer></Footer>
        </div>
    );
};

export default Main;