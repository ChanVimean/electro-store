import { AiFillHome, AiFillProduct } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaRegNewspaper, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";

const Navbar = () => {
  // JavaScript

  // Obejct:
  // [Key]: [Value]
  const navigations = [
    { label: "Home", to: "/", icon: AiFillHome },
    { label: "About", to: "/about", icon: FaRegNewspaper },
    { label: "Product", to: "/product", icon: AiFillProduct },
    {
      label: "Contact",
      to: "/contact",
      icon: BsFillTelephoneFill,
    },
  ];

  // UI
  return (
    <nav className="flex justify-between items-center bg-amber-50 px-6 py-3 shadow-md sticky top-0 z-50">
      {/* Left */}
      {/* <img src="/public/images/logo.png" alt="logo" /> */}
      <img src="logo.png" alt="logo" className="w-16" />

      {/* Center Menu */}
      {/* <ul className="flex gap-4">
        <li className="flex gap-1.5">
          <AiFillHome size={24} />
          <Link to="/">Home</Link>
        </li>
        <li className="flex gap-1.5">
          <FaRegNewspaper size={24} />
          <Link to="/about">About</Link>
        </li>
        <li className="flex gap-1.5">
          <BsFillTelephoneFill size={24} />
          <Link to="/contact">Contact</Link>
        </li>
      </ul> */}

      <ul className="hidden md:flex gap-2">
        {navigations.map((nav, index) => (
          <li key={index}>
            <Link
              to={nav.to}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-gray-700 font-medium hover:bg-amber-100 hover:text-amber-600 transition-colors"
            >
              <nav.icon size={20} />
              {nav.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right */}
      <ul className="hidden md:flex gap-4 items-center">
        <li className="relative cursor-pointer text-gray-700 hover:text-amber-600 transition-colors">
          <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-[10px] leading-none rounded-full w-4 h-4 flex items-center justify-center">
            0
          </span>
          <Link to="/cart">
            <FaShoppingCart size={22} />
          </Link>
        </li>
        <li className="cursor-pointer text-gray-700 hover:text-amber-600 transition-colors">
          <CgProfile size={30} />
          {/* <CgProfile size={32} className="text-9xl" /> */}
        </li>
      </ul>

      {/* Sidebar: only show on smaller screen size */}
      <ul className="md:hidden"></ul>
    </nav>
  );
};

export default Navbar;
