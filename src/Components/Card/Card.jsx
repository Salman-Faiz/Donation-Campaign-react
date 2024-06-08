
import React from 'react';

const Card = ({singleCard}) => {
    const { title}=singleCard;
    console.log(singleCard)
    return (
        <div>
            {title}
        </div>
    );
};

export default Card;