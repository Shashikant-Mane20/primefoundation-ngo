// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import menuData from "../../../public/data/menuData";
// import { FaRegHeart } from "react-icons/fa";
// import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

// const Navbar = () => {
//   const [menuItems] = useState(menuData); // Access the menu data
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
//   const [openSubmenus, setOpenSubmenus] = useState({}); // State for submenu toggles

//   const toggleSubmenu = (index) => {
//     setOpenSubmenus((prev) => ({
//       ...prev,
//       [index]: !prev[index], // Toggle the specific submenu
//     }));
//   };

//   return (
//     <>
//       <nav className="bg-[#111827] text-white py-4 fixed w-full z-50">
//         <div className="container mx-auto flex justify-between items-center px-4">
//           {/* Logo Section */}
//           <div className="flex items-center space-x-2">
//             <FaRegHeart className="text-red-500 text-3xl" />
//             <h1 className="text-2xl font-bold">PrimeFoundation</h1>
//           </div>

//           {/* Hamburger Menu for Mobile */}
//           <button
//             className="md:hidden text-3xl focus:outline-none"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
//           </button>

//           {/* Navigation Links */}
//           <ul
//             className={`fixed md:relative top-0 left-0 h-screen md:h-auto w-3/4 md:w-auto bg-[#111827] text-center md:text-left transform transition-transform duration-300 ${
//               isMenuOpen ? "translate-x-0" : "-translate-x-full"
//             } md:translate-x-0 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 pt-16 md:pt-0`}
//           >
//             {menuItems.map((item, index) => (
//               <li key={index} className="relative group px-4 py-2 md:p-0">
//                 {/* Main Link */}
//                 <div
//                   className={`flex items-center justify-between md:cursor-default ${
//                     item.dropdown ? "cursor-pointer" : ""
//                   }`}
//                   onClick={() =>
//                     item.dropdown && isMenuOpen && toggleSubmenu(index)
//                   }
//                 >
//                   <Link
//                     href={item.link}
//                     onClick={() => !item.dropdown && setIsMenuOpen(false)}
//                   >
//                     {item.label}
//                   </Link>

//                   {/* Submenu Toggle Icon for Mobile Only */}
//                   {item.dropdown && isMenuOpen && (
//                     <span
//                       className={`text-xl transform transition-transform ${
//                         openSubmenus[index] ? "rotate-180" : "rotate-0"
//                       }`}
//                     >
//                       ▼
//                     </span>
//                   )}
//                 </div>

//                 {/* Dropdown Items for Mobile */}
//                 {item.dropdown && isMenuOpen && (
//                   <ul
//                     className={`pl-4 mt-2 bg-gray-800 text-white rounded transition-max-h duration-300 overflow-hidden ${
//                       openSubmenus[index] ? "max-h-screen" : "max-h-0"
//                     }`}
//                   >
//                     {item.dropdown.map((subItem, subIndex) => (
//                       <li key={subIndex} className="py-2 px-2 hover:bg-gray-700">
//                         <Link
//                           href={subItem.link}
//                           onClick={() => setIsMenuOpen(false)}
//                         >
//                           {subItem.label}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}

//                 {/* Dropdown Items for Desktop - Visible on Hover */}
//                 <ul
//                   className={`${
//                     item.dropdown ? "md:absolute left-0 top-full bg-white text-black rounded shadow-md opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" : ""
//                   } md:hidden md:group-hover:block`}
//                 >
//                   {item.dropdown?.map((subItem, subIndex) => (
//                     <li key={subIndex} className="py-2 px-4 hover:bg-gray-700">
//                       <Link href={subItem.link}>{subItem.label}</Link>
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             ))}

//             {/* Donate Button */}
//             <li className="mt-4 md:mt-0 px-4 md:px-0">
//               <Link
//                 href="/donate"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
//               >
//                 Donate
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;


"use client";

import { useState } from "react";
import Link from "next/link";
import menuData from "../../../public/data/menuData";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuItems] = useState(menuData);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile toggle
  const [openSubmenus, setOpenSubmenus] = useState({}); // For submenu toggle

  const toggleSubmenu = (index) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle specific submenu on click
    }));
  };

  return (
    <>
      <nav className="bg-[#111827] text-white py-4 fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <FaRegHeart className="text-red-500 text-3xl" />
            <h1 className="text-2xl font-bold">PrimeFoundation</h1>
          </div>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden text-3xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>

          {/* Navigation Links */}
          <ul
            className={`fixed md:relative top-0 left-0 h-screen md:h-auto w-3/4 md:w-auto bg-[#111827] text-center md:text-left transform transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 pt-16 md:pt-0`}
          >
            {menuItems.map((item, index) => (
              <li key={index} className="relative group px-4 py-2 md:p-0">
                {/* Main Link */}
                <div
                  className={`flex items-center justify-between md:cursor-default ${
                    item.dropdown ? "cursor-pointer" : ""
                  }`}
                  onClick={() =>
                    item.dropdown && isMenuOpen && toggleSubmenu(index)
                  }
                >
                  <Link
                    href={item.link}
                    onClick={() => !item.dropdown && setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>

                  {/* Submenu toggle icon (Mobile only) */}
                  {item.dropdown && isMenuOpen && (
                    <span
                      className={`text-xl transform transition-transform ${
                        openSubmenus[index] ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      ▼
                    </span>
                  )}
                </div>

                {/* Mobile dropdown menu */}
                {item.dropdown && isMenuOpen && (
                  <ul
                    className={`pl-4 mt-2 bg-gray-800 text-white rounded transition-max-h duration-300 overflow-hidden ${
                      openSubmenus[index] ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    {item.dropdown.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="py-2 px-2 hover:bg-gray-700"
                      >
                        <Link href={subItem.link}>{subItem.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Desktop dropdown (hover effect) */}
                {item.dropdown && (
                  <ul
                    className={`absolute left-0 top-full mt-1 bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
                  >
                    {item.dropdown.map((subItem, subIndex) => (
                      <li key={subIndex} className="py-2 px-4 hover:bg-gray-700">
                        <Link href={subItem.link}>{subItem.label}</Link>
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
    </>
  );
};

export default Navbar;
