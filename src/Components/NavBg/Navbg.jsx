import React from 'react';
import Navbar from '../Navbar/Navbar';

const Navbg = () => {
    return (
        <div>
            <div className="bg-[url('https://iili.io/Jy77iOB.webp')] pb-60  bg-no-repeat  bg-cover bg-top ">
            <Navbar></Navbar>
            <div className="text-center pt-60 space-y-16">
                <h1 className="text-6xl font-bold text-cyan-500">I Grow By Helping People In Need</h1>
                <div className="text-5xl">
                    <input className=" border-2  rounded-lg rounded-e-none " type="text" /><button className="bg-red-600  px-6 py-2 rounded-lg rounded-s-none ">Search</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Navbg;