import React from 'react';
import Navbar from '../Navbar/Navbar';

const Navbg = () => {
    // {/* <div className="bg-[url('https://iili.io/Jy77iOB.webp')] pb-60  bg-no-repeat  bg-cover bg-top "> */}

    return (
      
            
            <div className='overflow-hidden relative '>
                <img style={{ height: '900px', width: '100%' }} src="https://iili.io/Jy77iOB.webp" alt="" />
                <div className='absolute inset-0 bg-white bg-opacity-85'>
                    <Navbar></Navbar>

                    <div className="text-center pt-60 space-y-16">
                        <h1 className="text-6xl font-bold text-green-700">I Grow By Helping People In Need</h1>
                        <div >
                           <span className="text-5xl"> <input className=" border-2  rounded-lg rounded-e-none " type="text" /><button className="bg-red-600  px-6 py-2 rounded-lg rounded-s-none text-white ">Search</button></span>
                        </div>
                    </div>
                </div>


            </div>
       
    );
};

export default Navbg;