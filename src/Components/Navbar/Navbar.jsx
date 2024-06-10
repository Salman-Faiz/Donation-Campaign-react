import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (





        <div className="container mx-auto ">
            <div className="flex justify-between  pt-10">
                <img src="https://iili.io/Jpvu3mu.png" alt="" />
                <div>
                    <ul className="flex text-xl gap-4 font-semibold">
                        <li><NavLink to={'/'}></NavLink>Home</li>
                        <li><NavLink to={'/donation'}></NavLink>Donation</li>
                        <li><NavLink to={'/statistics'}></NavLink>Statistics</li>
                    </ul>

                </div>
            </div>
            <div className="text-center pt-60 space-y-16">
                <h1 className="text-6xl font-bold">I Grow By Helping People In Need</h1>
                <div className="text-5xl">
                    <input className=" border-2  rounded-lg rounded-e-none " type="text" /><button className="bg-red-600  px-6 py-2 rounded-lg rounded-s-none ">Search</button>
                </div>
            </div>
        </div>




    );
};

export default Navbar;