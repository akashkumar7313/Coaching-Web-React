import React from "react";
import { BsTelephone } from "react-icons/bs";
import { BsStopwatch } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsPinMap } from "react-icons/bs";
import { Breadcrumbs } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Contact() {
  return (
    <div className="bg-green-200 ">
      <Navbar />
      <div className="container mb-24 pt-28 mx-auto md:px-6">
        <section className="">
          <Breadcrumbs className="flex justify-end px-20">
          <NavLink
              to="/"
              className="text-[16px] font-semibold leading-10  text-gray-900 hover:text-blue-500"
            >
              Home
            </NavLink>
            <NavLink
              to="/Contact"
              className="text-[16px] font-semibold leading-10  text-gray-900 hover:text-blue-500"
            >
              CONTACT US
            </NavLink>
          </Breadcrumbs>
          <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://t4.ftcdn.net/jpg/03/23/90/01/360_F_323900197_YRq2Lfh3LMToFyy6X2Ay6jZEN1F7Eczd.jpg')]"></div>
          <div className="container px-6 md:px-12">
            <div className="block rounded-lg h-auto bg-white px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
              <div className="flex flex-wrap gap-20 justify-evenly">
                <div>
                  <div className="text-5xl font-bold">Get In Touch</div>
                  <p className="text-[18px] mt-4 ">
                    To speak with someone about beginning classes with Heritage,
                    use the <br /> contact form provided or find the contact
                    details for your preferred <br /> location below.
                  </p>
                  <hr className=" mt-10 text-black" />
                  <div className="text-3xl font-bold mt-7">
                    Convent Dehradun
                  </div>
                  <ul className="md:ml-8 md:gap-0 lg:gap-14 sm:pt-4 sm:ml-2 text-[12px] sm:text-[14px] font-semibold justify-center md:pt-2 lg:pt-[18px] text-black drop-shadow-md">
                    <li className="flex items-center gap-2 sm:mt-2">
                      <BsTelephone />
                      <span className="text-black">
                        Phone:{" "}
                        <a className="text-black" href="tel:+91 8081405950">
                          +91 5597892463
                        </a>
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AiOutlineMail />
                      <span className="text-black">
                        Email:{" "}
                        <a
                          className=" text-black"
                          href="mailto:support@itgrowing.in"
                        >
                          support@gmail.in
                        </a>
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <BsStopwatch />
                      <span className="text-black">Support Time: </span> We
                      Provide 24x7 Services
                    </li>
                    <li className="flex items-center gap-2">
                      <BsPinMap />
                      <span className="text-black">Address:</span> Lucknow,Uttar
                      Pradesh,208002
                    </li>
                  </ul>
                </div>
                <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12">
                  <form className="p-4">
                    <div class="relative h-12 w-[20] sm:w-[500px] bg-cyan-800 ">
                      <h1 className=" pl-5 pt-2 text-[20px] font-semibold text-white">
                        {" "}
                        1. Name
                      </h1>
                    </div>
                    <div className="h-20 w-[20] sm:w-[500px] bg-slate-100">
                      <input
                        className="appearance-none text-[20px] bg-transparent border-b m-5 border-teal-500 w-[200px] md:w-[450px] sm:w-[450px] lg:w-[450px] text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                        type="name"
                        placeholder="Name"
                        aria-label="name"
                      />
                    </div>
                    <div class="relative h-12 w-[20] sm:w-[500px] bg-cyan-800 ">
                      <h1 className=" pl-5 pt-2 text-[20px] font-semibold text-white">
                        {" "}
                        1. E-Mail
                      </h1>
                    </div>
                    <div className="h-20 w-[20] sm:w-[500px] bg-slate-100">
                      <input
                        className="appearance-none text-[20px] bg-transparent border-b m-5 border-teal-500 w-[200px] md:w-[450px] sm:w-[450px] lg:w-[450px] text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                        type="number"
                        placeholder="E-Mail"
                        aria-label="name"
                      />
                    </div>
                    <div class="relative h-12 w-[20] sm:w-[500px] bg-cyan-800 ">
                      <h1 className=" pl-5 pt-2 text-[20px] font-semibold text-white">
                        {" "}
                        1. Mobile Number
                      </h1>
                    </div>
                    <div className="h-20 w-[20] sm:w-[500px] bg-slate-100">
                      <input
                        className="appearance-none text-[20px] bg-transparent border-b m-5 border-teal-500 w-[200px] md:w-[450px] sm:w-[450px] lg:w-[450px] text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Mobile Number"
                        aria-label="name"
                      />
                    </div>
                    <div class="relative h-12 w-[20] sm:w-[500px] bg-cyan-800 ">
                      <h1 className=" pl-5 pt-2 text-[20px] font-semibold text-white">
                        {" "}
                        1. Course to apply
                      </h1>
                    </div>
                    <div className="h-20 w-[20] sm:w-[500px] bg-slate-100">
                      <input
                        className="appearance-none text-[20px] bg-transparent border-b m-5 border-teal-500 w-[200px] md:w-[450px] sm:w-[450px] lg:w-[450px] text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Course to apply"
                        aria-label="name"
                      />
                    </div>
                    <button className="bg-cyan-800 py-2 px-16 mx-8 sm:mx-36 md:mx-36 lg:mx-40 mt-10 text-white rounded-md shadow-xl">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
