import React from 'react';

const SingleDonation = ({singleDonation}) => {
    return (
        <div>
           {singleDonation.title}
           <div className="flex gap-10 border border-gray-400 p-6 mb-5 rounded-xl">
          
           <div className="px-6 py-16">
        
        <img className="" src={singleDonation.picture} alt="" />
           </div>
           
           <div className="flex-grow space-y-4">
           <h2 className="text-2xl font-semibold text-slate-600">{singleDonation.title}</h2>
           <h5 className="text-2xl text-slate-400">{singleDonation.category}</h5>
          
        
           </div>
           <div className="my-auto">
           <button className="bg-gradient-to-r from-indigo-400 to-violet-600 px-3 py-2 rounded-lg text-white font-semibold text-xl">View Details</button>
           </div>
        </div>
        </div>
    );
};

export default SingleDonation;