import { NavLink } from "react-router-dom";

const Navbar = () => {
    const  links = <>
                <li className="mr-5 hidden md:block lg:block" ><NavLink to="/"  >Home</NavLink></li>
                <li className="mr-5 hidden md:block lg:block"><NavLink to="/donations">Donation</NavLink></li>
                <li className="mr-5 hidden md:block lg:block"><NavLink to="/statistics">Statistics</NavLink></li>
    </>
    const  linksTab = <>
    <li className="mr-5 " ><NavLink to="/"  >Home</NavLink></li>
    <li className="mr-5 "><NavLink to="/donations">Donation</NavLink></li>
    <li className="mr-5 "><NavLink to="/statistics">Statistics</NavLink></li>
</>
    return (
        // <div>
            
            // </div>
            <div className="navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {linksTab}
                </ul>
              </div>
              <a className="btn btn-ghost normal-case text-xl"><img className=" w-28 h-12 lg:w-40 lg:h-16" src="https://i.ibb.co/9bGtPGx/One-Day-Logo-Blue-Type-R.jpg" alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {links}
              </ul>
            </div>
            <div className="navbar-end">
              <a className="btn">Login</a>
            </div>
          </div>

    );
};

export default Navbar;