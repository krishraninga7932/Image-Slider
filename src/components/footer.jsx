import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import {
  FiChevronsRight,
  FiMapPin,
  FiPhone,
  FiMail,
  FiGlobe,
} from "react-icons/fi";

const Footer = () => {
  return (
    <div>
      <section className="bg-gray-50">
        <div className="max-w-[1320px] mx-auto px-5 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="logo text-[#14B8A6] font-semibold text-[28px]">
                SlideCraft
              </div>
              <p className="text-gray-500 text-[15px] mt-4 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                molestias adipisci deleniti quo magnam obcaecati ducimus
                distinctio soluta est. Culpa!
              </p>
              <div className="flex gap-3 mt-6">
                <FaFacebookF className="text-[#14B8A6] cursor-pointer duration-300 hover:bg-[#14B8A6] hover:text-white border border-[#14B8A6] rounded-full p-2 text-[32px]" />
                <FaTwitter className="text-[#14B8A6] cursor-pointer duration-300 hover:bg-[#14B8A6] hover:text-white border border-[#14B8A6] rounded-full p-2 text-[32px]" />
                <FaInstagram className="text-[#14B8A6] cursor-pointer duration-300 hover:bg-[#14B8A6] hover:text-white border border-[#14B8A6] rounded-full p-2 text-[32px]" />
                <FaPinterestP className="text-[#14B8A6] cursor-pointer duration-300 hover:bg-[#14B8A6] hover:text-white border border-[#14B8A6] rounded-full p-2 text-[32px]" />
              </div>
            </div>
            <div>
              <h2 className="text-[20px] font-medium text-[#2d2c2c]">
                Quick Links
              </h2>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-gray-500 cursor-pointer text-[15px] hover:text-[#14B8A6] duration-300">
                  <FiChevronsRight /> Home
                </li>
                <li className="flex items-center gap-2 text-gray-500 cursor-pointer text-[15px] hover:text-[#14B8A6] duration-300">
                  <FiChevronsRight /> About
                </li>
                <li className="flex items-center gap-2 text-gray-500 cursor-pointer text-[15px] hover:text-[#14B8A6] duration-300">
                  <FiChevronsRight /> Testimonial
                </li>
                <li className="flex items-center gap-2 text-gray-500 cursor-pointer text-[15px] hover:text-[#14B8A6] duration-300">
                  <FiChevronsRight /> Blog
                </li>
                <li className="flex items-center gap-2 text-gray-500 cursor-pointer text-[15px] hover:text-[#14B8A6] duration-300">
                  <FiChevronsRight /> Contact
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-[20px] font-medium text-[#2d2c2c]">
                Slider Resources
              </h2>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-gray-500 cursor-pointer text-[15px] hover:text-[#14B8A6] duration-300">
                  <FiChevronsRight /> Gallery
                </li>
                <li className="flex items-center gap-2 text-gray-500 cursor-pointer text-[15px] hover:text-[#14B8A6] duration-300">
                  <FiChevronsRight /> Templates
                </li>
                <li className="flex items-center gap-2 text-gray-500 cursor-pointer text-[15px] hover:text-[#14B8A6] duration-300">
                  <FiChevronsRight /> Tutorials
                </li>
                <li className="flex items-center gap-2 text-gray-500 cursor-pointer text-[15px] hover:text-[#14B8A6] duration-300">
                  <FiChevronsRight /> Pricing
                </li>
                <li className="flex items-center gap-2 text-gray-500 cursor-pointer text-[15px] hover:text-[#14B8A6] duration-300">
                  <FiChevronsRight /> Support
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-[20px] font-medium text-[#2d2c2c]">
                Contact Us
              </h2>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center gap-2 text-gray-500 text-[15px]">
                  <FiMapPin className="text-[#14B8A6]" /> 123 Slider Street,
                  Motion City
                </li>
                <li className="flex items-center gap-2 text-gray-500 text-[15px]">
                  <FiPhone className="text-[#14B8A6]" /> +1 (555) 123-4567
                </li>
                <li className="flex items-center gap-2 text-gray-500 text-[15px]">
                  <FiMail className="text-[#14B8A6]" /> contact@slidecraft.com
                </li>
                <li className="flex items-center gap-2 text-gray-500 text-[15px]">
                  <FiGlobe className="text-[#14B8A6]" /> www.slidecraft.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
