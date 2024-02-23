import React, { useState } from "react";
import {
  FaBars,
  FaSearch,
  FaShoppingCart,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import logo from "../../public/logo1-9DA3NCT-e1702999670898.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { title: "jewelery & Accessories ", path: "/" },
    { title: "Clothing & Shoes", path: "/" },
    { title: "Home & Living ", path: "/" },
    { title: "Wedding & Party ", path: "/" },
    { title: "Toys & Entertainment ", path: "/" },
    { title: "Art & Collectibles ", path: "/" },
    { title: "Craft Supplies & Tools ", path: "/" },
  ];

  return (
    <header className='max-w-screen -2x1 xl:px-28 px-4 absolute top-0 right-0 left-0'>
      <nav className='flex justify-between items-center container md:py-4 pt-6 pb-3'>
        <FaSearch className='text-black w-5 h-5 cursor-pointer md:block ' />

        {/* logo  */}
        <a href='/'>
          <img src={logo} alt='photo' />
        </a>

        {/* Acc & Shopping btn  */}
        <div className='text-lg text-black sm:flex item-center gap-4 hidden'>
          <a href='/' className='flex item-center gap-2'>
            <FaUser />
            Account
          </a>
          <a href='/' className='flex item-center gap-2'>
            <FaShoppingCart />
            Shopping
          </a>
        </div>
        {/* nav sm devices     */}
        <div className='sm:hidden'>
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <FaTimes className='w-5 h-5 text-black' />
            ) : (
              <FaBars className='w-5 h-5 text-black' />
            )}
          </button>
        </div>
      </nav>
      <hr />
      {/* nav items  */}
      <div className='pt-4'>
        <ul className='lg:flex items-center justify-between text-black hidden'>
          {navItems.map(({ title, path }) => (
            <li key={title} className='hover:text-orange-500'>
              <Link to='path'>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* only mobile items */}
      <div>
        <ul
          className={`bg-black text-white px-4 py-2 rounded ${
            menuOpen ? "" : "hidden"
          }`}
        >
          {navItems.map(({ title, path }) => (
            <li
              key={title}
              className='hover:text-orange-500 my-3 cursor-pointer'
            >
              <Link to='path'>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
