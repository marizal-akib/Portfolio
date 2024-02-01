import { Link } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <li className="text-white font-extrabold hover:text-[greenYellow] ">
        <Link className="active:text-[greenYellow]" to={"/"}>
          Home
        </Link>
      </li>

      <li className="text-white  font-extrabold hover:text-[greenYellow] " >
        <Link  to={'/blogs'}>Blogs</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#1b1f22] fixed z-50 max-w-7xl ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="greenYellow"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box  w-52"
          >
            {navLink}
          </ul>
        </div>
      </div>

      <div className="navbar-end">
        <div className=" hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <Link className="btn hidden mr-12 font-light btn-sm p-2 px-2 rounded-md border-none bg-[GreenYellow]">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
