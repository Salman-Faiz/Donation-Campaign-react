import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import'./DonationDetails.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonationToLocalStorage } from "../../../public/Utility/LocalStorage";

const DonationDetails = () => {
    const donations =useLoaderData();
const {id } = useParams();
// console.log(typeof(id));
const intId = parseInt(id)
// console.log(typeof(intId));
const donation = donations.find( doantion => doantion.id === intId)
// console.log(donation)

const handleDonation = () => {
  saveDonationToLocalStorage(intId);
  toast('successfully donated');
}

    return (
        <div>
          <Navbar></Navbar>
          <div className="container mx-auto py-20  overflow-hidden relative">
         
            <div className="">
            <img style={{width:'100%', height:'900px',borderRadius:'25px'}} src={donation.picture} alt="" />
            </div>
            <div className={`absolute  inset-y-auto bottom-80 bg-gray-900 bg-opacity-75  h-32 w-full text-2xl  text-left p-5`}>
          <button onClick={handleDonation} style={{background:`${donation.text_button_bg}`, padding:'8px', borderRadius:'10px'}}>Donate {donation.price}</button>
            </div>
           
            <div className="pt-10">
            <h2 className="text-6xl font-semibold">{donation.title}</h2>
            <p className="text-2xl ">{donation.description}</p>
            <ToastContainer />
            </div>
          

          </div>
        </div>
    );
};

export default DonationDetails;