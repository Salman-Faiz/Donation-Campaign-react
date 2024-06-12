import { NavLink } from "react-router-dom";
import './Navbar.css'


const Navbar = () => {
    // https://iili.io/Jpvu3mu.png
    const links = <>
     
      <li><NavLink to={'/'}>Home</NavLink></li>
      <li><NavLink to={'/donation'}>Donation</NavLink></li>
      <li><NavLink to={'/statistics'}>Statistics</NavLink></li>
     
    </>
    return (
        <div className="navbar  container mx-auto pt-10">
            <div className="flex-1">
               <img src="https://iili.io/Jpvu3mu.png" alt="" />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                  {links}
                    
                </ul>
            </div>
        </div>




    );
};

export default Navbar;