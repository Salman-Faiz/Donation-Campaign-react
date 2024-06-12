import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import { getStoredDataFromLS } from "../../../public/Utility/LocalStorage";
import SingleDonation from "../SIngleDonation/SingleDonation";


const Donation = () => {
    const [donations, setDonations]= useState([]);
    const donationData = useLoaderData();
    // get data from ls.using useEffect to get data from outside the dom
    useEffect(()=>{
        const storedIds = getStoredDataFromLS();
        const appliedDonation = donationData.filter(singleDonation => storedIds.includes(singleDonation.id));
        setDonations(appliedDonation);

    },[])
    return (
        <div>
            <Navbar></Navbar>
           <div className="grid md:grid-cols-2 gap-5 container mx-auto pt-10">
           {
                donations.map(singleDonation=> <SingleDonation singleDonation={singleDonation}></SingleDonation> )
            }
           </div>
        </div>
    );
};

export default Donation;