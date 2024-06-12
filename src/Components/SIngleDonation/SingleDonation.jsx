import React from 'react';

const SingleDonation = ({singleDonation}) => {
    return (
        <div>
       
           <div  style={{ backgroundColor: `${singleDonation.card_bg}` }} className="flex gap-10 border border-gray-400 h-60 mb-5 rounded-xl">
          
          
        
        <div>
        <img className="h-full w-72 rounded-xl" src={singleDonation.picture} alt="" />
        </div>
          
           
           <div className="flex flex-col">
          <div className='flex-grow'>
          <h5 style={{ backgroundColor: `${singleDonation.category_bg}`, color:`${singleDonation.text_button_bg}` }}  className="text-xl  py-1 w-36 rounded-lg text-center my-5">{singleDonation.category}</h5>
          <h2 style={{color:`${singleDonation.text_button_bg}`}}   className="text-4xl font-semibold ">{singleDonation.title}</h2>
          
          </div>
          
           <button  style={{ backgroundColor: `${singleDonation.text_button_bg}` }}  className="  px-3 py-2 rounded-lg text-white font-semibold text-xl mb-5">View Details</button>
           </div>
           
        </div>
        </div>
    );
};

export default SingleDonation;