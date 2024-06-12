import React from 'react';

const SingleDonation = ({singleDonation}) => {
    return (
        <div className=''>
       
           <div className="flex gap-10 border border-gray-400 p-6 mb-5 rounded-xl">
          
          
        
        <img className="h-60 rounded-xl" src={singleDonation.picture} alt="" />
          
           
           <div className="flex flex-col">
          <div className='flex-grow'>
          <h2 className="text-4xl font-semibold text-slate-600">{singleDonation.title}</h2>
          <h5 className="text-3xl text-slate-400 pt-6">{singleDonation.category}</h5>
          </div>
          
           <button className=" bg-gradient-to-r from-indigo-400 to-violet-600 px-3 py-2 rounded-lg text-white font-semibold text-xl">View Details</button>
           </div>
           
        </div>
        </div>
    );
};

export default SingleDonation;