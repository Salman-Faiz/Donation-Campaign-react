import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (





        <div className="container mx-auto ">
            <div className="flex justify-between  pt-10">
                <img src="https://iili.io/Jpvu3mu.png" alt="" />
                <nav>
                <ul className="flex text-xl gap-4 font-semibold">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={"/donation"}>Donation</NavLink></li>
                        <li><NavLink to={'/statistics'}>Statistics</NavLink></li>
                    </ul>
                </nav>
            </div>
           
        </div>




    );
};

export default Navbar;