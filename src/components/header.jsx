import React, { useState } from "react";
// import { FaTimes } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <section className="shadow-lg">
        <div className="max-w-[1320px] mx-auto p-[10px_20px] lg:p-[15px_20px] md:max-w-[1320px] sm:max-w-full sm:px-4">
          <header className="grid grid-cols-2 xl:grid-cols-3 items-center">
            <div className="logo text-[#14B8A6] font-semibold text-[30px]">
              SlideCraft
            </div>
            <nav className="hidden xl:block">
              <ul className="flex justify-between items-center">
                <li>
                  <a
                    href="#"
                    className="text-[17px] text-[#121212] hover:text-[#14B8A6] duration-[0.3s] font-medium"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[17px] text-[#121212] hover:text-[#14B8A6] duration-[0.3s] font-medium"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[17px] text-[#121212] hover:text-[#14B8A6] duration-[0.3s] font-medium"
                  >
                    Testimonial
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[17px] text-[#121212] hover:text-[#14B8A6] duration-[0.3s] font-medium"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[17px] text-[#121212] hover:text-[#14B8A6] duration-[0.3s] font-medium"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex items-center justify-end">
              <button className="hidden xl:block bg-[#14B8A6] p-[10px_15px] text-white rounded-lg cursor-pointer text-[17px] font-medium hover:bg-[#14b8a5c4] duration-[0.3s]">
                Get Started
              </button>
              <button
                onClick={toggleMenu}
                className="xl:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
              >
                <IoMenu size={28} color="#121212" />
              </button>
            </div>
          </header>
        </div>

        <div
          className={`fixed inset-0 bg-white z-50 xl:hidden transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-[15px_20px] border-b">
            <div className="text-[#14B8A6] font-semibold text-[30px]">
              SlideCraft
            </div>
            <button
              onClick={toggleMenu}
              className="text-[#121212] text-[24px] font-bold"
            >
              <IoClose size={35} color="[#121212]" />
            </button>
          </div>
          <div className="flex flex-col justify-center items-center h-full space-y-8 -mt-24">
            <a
              href="#"
              className="text-[24px] text-[#121212] hover:text-[#14B8A6] duration-[0.3s] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#"
              className="text-[24px] text-[#121212] hover:text-[#14B8A6] duration-[0.3s] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#"
              className="text-[24px] text-[#121212] hover:text-[#14B8A6] duration-[0.3s] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonial
            </a>
            <a
              href="#"
              className="text-[24px] text-[#121212] hover:text-[#14B8A6] duration-[0.3s] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
            <a
              href="#"
              className="text-[24px] text-[#121212] hover:text-[#14B8A6] duration-[0.3s] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <button
              className="bg-[#14B8A6] w-[80%] p-[12px_18px] text-white rounded-lg cursor-pointer text-[20px] font-medium hover:bg-[#14b8a5c4] duration-[0.3s]"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
