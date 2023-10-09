import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const{user,logout}= useContext(AuthContext);
  const navigate =useNavigate()
  const handleSignOut =() =>{
        logout()
        .then(result=>{
          
          console.log("logout")
          toast.success('Logout successful!'); 
          navigate(location?.state ? location.state : '/');
          
      })
        .catch()
  }
    const  links = <>
                <li className="mr-5 text-lg font-medium hidden md:block lg:block" ><NavLink to="/"  >Home</NavLink></li>
                <li className="mr-5 text-lg font-medium hidden md:block lg:block"><NavLink to="/gallery">Gallery</NavLink></li>
                <li className="mr-5 text-lg font-medium hidden md:block lg:block"><NavLink to="/about">About</NavLink></li>
    </>
    const  linksTab = <>
    <li className="mr-5 " ><NavLink to="/"  >Home</NavLink></li>
    <li className="mr-5 "><NavLink to="/gallery">Gallery</NavLink></li>
    <li className="mr-5 "><NavLink to="/about">About</NavLink></li>
</>
    return (
        // <div>
            
            // </div>
            <div className="navbar bg-slate-100 rounded-lg">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {linksTab}
                </ul>
              </div>
             <img className=" w-28 h-12 lg:w-40 lg:h-16  rounded-md" src="https://i.ibb.co/9bGtPGx/One-Day-Logo-Blue-Type-R.jpg" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {links}
              </ul>
            </div>
            <div className="navbar-end">

              {
                user ?
               
                <div className="flex">
                  <a className="btn w-10">{user.displayName?user.displayName :user.email}</a>
                  <a onClick={handleSignOut} className="btn ">  SignOut</a></div>
                :
                <Link to={"/login"}><a className="btn">Login</a></Link> 
              }
             
            </div>
          </div>

    );
};

export default Navbar;