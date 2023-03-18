import React from "react";
import logo from "../assets/images/logo2.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#2E3192] text-white py-16 mt-20">
        <article className="w-[85%] mx-auto flex sm:flex-col justify-between">
          <div className="w-[30%] sm:w-[60%] sm:mb-8">
            <div className="mb-6">
              <img src={logo} alt="logo" />
            </div>
            <p className="leading-8 font-light">
              Job hunting has never been easier. <br className="sm:hidden" /> We got you covered.
            </p>
          </div>
          <div className="w-[60%] sm:w-[100%] flex justify-between">
            <ul className="w-[45%]">
              <li className="font-medium text-lg mb-2">Company</li>
              <li className="font-light leading-8">About Us</li>
              <li className="font-light leading-8">Blog</li>
              <li className="font-light leading-8">Privacy Policy</li>
              <li className="font-light leading-8">Terms and conditions</li>
            </ul>
            <ul className="w-[45%]">
              <li className="font-medium text-lg mb-2">Help</li>
              <li className="font-light leading-8">Contact Us</li>
              <li className="font-light leading-8">FAQs</li>
              <li className="font-light leading-8">Pricing</li>
            </ul>
          </div>
        </article>
      </footer>
      <div className="bg-[#171646]">
        <p className="text-white w-[85%] mx-auto font-thin py-2">
          copyright @ ApplyForMe
        </p>
      </div>
    </>
  );
};

export default Footer;
