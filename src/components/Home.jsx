import React from "react";

const Home = () => {
  return (
    <>
      <section className="bg-hero sm:bg-mobile md:bg-tab bg-no-repeat h-[550px] md:h-[350px] sm:h-[400px] flex flex-col justify-center items-center text-white">
        <h1 className="font-medium text-[48px] sm:text-[40px] mb-4">
          Privacy Policy
        </h1>
        <p className="font-semibold text-base mb-4">
          Last updated: November 15, 2022
        </p>
        <p className="w-[60%] md:w-[90%] sm:w-[85%] sm:text-[14px] text-base leading-5">
          This Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law
          protects You. <br /> <br /> We use Your Personal data to provide and
          improve the Service. By using the Service, You agree to the collection
          and use of information in accordance with this Privacy Policy. This
          Privacy Policy has been created with the help of the{" "}
          <a href="" className="underline">
            Free Privacy Policy Generator.
          </a>
        </p>
      </section>
    </>
  );
};

export default Home;
