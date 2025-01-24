"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              PrimeFoundation is dedicated to creating meaningful change through
              education and awareness. Join us in making a difference.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="hover:text-gray-300 transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/programs"
                  className="hover:text-gray-300 transition"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="/donate"
                  className="hover:text-gray-300 transition"
                >
                  Donate
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-gray-300 transition"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">
              <strong>Address:</strong> 123 Prime Foundation St., Cityville
            </p>
            <p className="text-gray-400">
              <strong>Email:</strong>{" "}
              <a href="mailto:info@primefoundation.com" className="hover:text-gray-300">
                info@primefoundation.com
              </a>
            </p>
            <p className="text-gray-400">
              <strong>Phone:</strong> +123-456-7890
            </p>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-8 text-center border-t border-gray-700 pt-6">
          <div className="flex justify-center space-x-4 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 transition"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; 2025 PrimeFoundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
