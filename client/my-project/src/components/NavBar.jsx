import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    //When toggle is clicked menu will open since useState is originally set to false, !setIsMenuOpen will be true
    setIsMenuOpen(!isMenuOpen);
  };

  //Array of objects
  const navItems = [
    { path: "/", title: "Start a search..." },
    { path: "/my-jobs", title: "My Jobs" },
    { path: "/salary", title: "Salary Estimate" },
    { path: "/post-job", title: "Post A Job" },
  ];

  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between items-center py-6">
        <a href="/" className="flex items-center gap-2 text-2xl text-black">
          <img src="../../public/images/logo.jpg" className="logo" />
          <span>Job Portal</span>
        </a>

        {/*Nav items for large devices*/}
        <ul className="hidden md:flex gap-12">
          {/* Rendering the nav items */}
          {
            //Destructure path and title
            navItems.map(({ path, title }) => (
              <li key={path} className="text-base text-primary">
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {/* other code */}
                  {title}
                </NavLink>
              </li>
            ))
          }
        </ul>

        {/*Sign up and Log in buttons*/}
        <div className="text-base text-primary font-medium space-x-5 lg:block">
          <Link to="/log-in" className="py-2 px-5 border rounded">
            Log In
          </Link>
          <Link to="/sign-up" className="py-2 px-5 border rounded bg-orange-500 text-white">
            Sign Up
          </Link>
        </div>

        {/*Menu on mobile viewport*/}
        <div className="md:hidden block">
          <button onClick={handleMenuToggle}>
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5 text-primary" />
            ) : (
              <FaBarsStaggered className="w-5 h-5 text-primary" />
            )}
          </button>
        </div>
      </nav>

      {/*Nav items on mobile viewport*/}
      <div className={`px-4 bg-orange-500 py-5 rounded-sn ${isMenuOpen ? "" : "hidden"}`}>
        <ul>
          {/* Rendering the nav items */}
          {
            //Destructure path and title
            navItems.map(({ path, title }) => (
              <li key={path} className="text-base text-white first:text-white py-1">
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {/* other code */}
                  {title}
                </NavLink>
              </li>
            ))
          }
          <li className="text-white py-1">
            <Link to="/login">Log In</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
