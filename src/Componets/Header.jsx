import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/data'>Data</Link>
            <h1 className='text-4xl text-center'>All data</h1>
            {/* <h1 className='text-3xl text-center'>All data: {data1.chefName}</h1> */}

        </div>
    );
};

export default Header;