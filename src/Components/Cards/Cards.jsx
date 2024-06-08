import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Cards = () => {
    const [cards,setCards] = useState([]);

    useEffect(()=>{
        fetch('build.json')
        .then(res => res.json())
        .then(data =>setCards(data));
        
    },[])
    console.log(cards.length)
    return (
        <div>
            {
                cards.map((singleCard,idx) => <Card key={idx} singleCard={singleCard} ></Card>)
            }
        </div>
    );

};

export default Cards;