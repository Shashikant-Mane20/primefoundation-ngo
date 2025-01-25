"use client";

import { useState } from "react";
import Link from "next/link";
import menuData from "../../../public/data/menuData";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [openSubmenus, setOpenSubmenus] = useState({}); 

  const toggleSubmenu = (index) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <nav className="bg-[#111827] text-white py-4 fixed w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <FaRegHeart className="text-red-500 text-3xl" />
          <h1 className="text-2xl font-bold">PrimeFoundation</h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`fixed top-0 left-0 h-screen w-3/4 bg-[#111827] transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:h-auto md:w-auto md:translate-x-0 md:flex md:space-x-6 space-y-4 md:space-y-0 pt-16 md:pt-0`}
        >
          {menuData.map((item, index) => (
            <li key={index} className="relative group px-4 py-2 md:p-0">
              {/* Main Link */}
              <div
                className={`flex items-center justify-between ${
                  item.dropdown ? "cursor-pointer" : ""
                }`}
                onClick={() =>
                  item.dropdown && isMenuOpen && toggleSubmenu(index)
                }
              >
                <Link
                  href={item.link}
                  onClick={() => !item.dropdown && setIsMenuOpen(false)}
                  className="block"
                >
                  {item.label}
                </Link>

                {/* Mobile Submenu Toggle Icon */}
                {item.dropdown && isMenuOpen && (
                  <span
                    className={`text-2xl transform transition-transform ${
                      openSubmenus[index] ? "rotate-180" : "rotate-0"
                    }`}
                  >
                   <RiArrowDropDownLine/> 
                  </span>
                )}
              </div>

              {/* Mobile Submenu */}
              {item.dropdown && isMenuOpen && (
                <ul
                  className={`pl-4 mt-2 bg-gray-800 text-white rounded transition-max-h duration-300 overflow-hidden ${
                    openSubmenus[index] ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  {item.dropdown.map((subItem, subIndex) => (
                    <li key={subIndex} className="py-2 px-2 hover:bg-gray-700">
                      <Link
                        href={subItem.link}
                        onClick={() => setIsMenuOpen(false)}
                        className="block"
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {/* Desktop Submenu */}
              {item.dropdown && (
                <ul className="hidden md:absolute left-0 top-full bg-white text-black rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.dropdown.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="px-4 py-2 hover:bg-gray-200 whitespace-nowrap"
                    >
                      <Link href={subItem.link} className="block">
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* Donate Button */}
          <li className="mt-4 md:mt-0 px-4 md:px-0">
            <Link
              href="/donate"
              onClick={() => setIsMenuOpen(false)}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
            >
              Donate
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
