import React from 'react';

const JoinUs = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center my-8 bg-slate-200 py-4 px-8 rounded-md'>
            <div>
                <p className='text-orange-500 font-bold'>Join us</p>
                <h2 className='text-5xl font-bold'>Become a contributor <br /> and enjoy program <br />benefits</h2>
                <button className='btn btn-ghost bg-orange-500 text-white hover:text-black my-4'>Join Us</button>
            </div>
            <div>
                <img className='w-[600px] h-[400px] rounded-2xl' src="https://i.ibb.co/41JP4Vn/head-chef-adding-fresh-chopped-green-herbs-pan-while-cooking-gourmet-dish-restaurant-professional-ki.jpg" alt="" />
            </div>
        </div>
    );
};

export default JoinUs;