import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import'./DonationDetails.css';

const DonationDetails = () => {
    const donations =useLoaderData();
const {id } = useParams();
// console.log(typeof(id));
const intId = parseInt(id)
// console.log(typeof(intId));
const donation = donations.find( doantion => doantion.id === intId)
// console.log(donation)

    return (
        <div>
          <Navbar></Navbar>
          <div className="container mx-auto py-20 space-y-4 overflow-hidden relative">
            <div className="">
            <img className="w-full rounded-xl h-2/5 " src={donation.picture} alt="" />
            </div>
            <h2 className="text-6xl font-semibold">{donation.title}</h2>
            <p className="text-2xl ">{donation.description}</p>
            <button className={`absolute inset-x-0 bottom-72  bg-gray-900 bg-opacity-75  h-32 w-full mx-auto text-2xl text-white text-left p-5`}>donate</button>

          </div>
        </div>
    );
};

export default DonationDetails;