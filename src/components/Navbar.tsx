import Logo from "../images/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative bg-white flex justify-between h-min px-8 xl:px-24 2xl:px-40 3xl:px-[19.75rem] pt-10 pb-5">
      {/* Left Side */}
      <div className="flex items-center space-x-10">
        <img className="xl:w-24 cursor-pointer" src={Logo} alt="Shortly Logo" />
        <div className="hidden xl:flex space-x-6">
          <p className="nav-link">Features</p>
          <p className="nav-link">Pricing</p>
          <p className="nav-link">Resources</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-5">
        <p className="hidden xl:inline nav-link">Login</p>
        <button className="button-hover hidden xl:inline text-white bg-cyan py-1 px-4 rounded-full text-sm">
          Sign Up
        </button>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="cursor-pointer xl:hidden"
        >
          <MenuIcon sx={{ fontSize: 40 }} className="text-gray" />
        </button>
      </div>

      {menuOpen && (
        <div className="absolute z-10 bottom-0 left-0 flex w-screen justify-center translate-y-full">
          <div className="bg-dark-violet flex flex-col space-y-8 p-9 items-center justify-center rounded-xl w-[85%] text-lg">
            <p className="mobile-link">Features</p>
            <p className="mobile-link">Pricing</p>
            <p className="mobile-link">Resources</p>

            <div className="w-full h-[0.5px] bg-gray"></div>

            <p className="mobile-link">Login</p>
            <button className="mobile-link w-full bg-cyan rounded-full py-3">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
