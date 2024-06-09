
import React from 'react';

const Card = ({singleCard}) => {
    const { title,picture,category,card_bg,category_bg,text_button_bg}=singleCard;
    console.log(singleCard)
    
    
    return (
        <div style={{ backgroundColor: `${card_bg}` }} className='rounded-xl' >
            <div>
            <img className='w-full h-80 ' src={picture} alt="" />
          <div className='p-5'>
            <div style={{ backgroundColor: `${card_bg}` }}  className='text-2xl'>
                 
                 <button className=' px-3 py-1 rounded-lg font-semibold' style={{ backgroundColor: `${category_bg}  `, color:`${text_button_bg}` }}>{category}</button>
            </div>
         
          <h2 className='text-4xl'>{title}</h2>
          </div>
            </div>
        </div>
    );
};

export default Card;