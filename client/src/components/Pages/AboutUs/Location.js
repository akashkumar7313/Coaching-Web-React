import React from "react";
import { BsTelephone } from "react-icons/bs";
import { BsStopwatch } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsPinMap } from "react-icons/bs";
import { Breadcrumbs } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import Footer from "../../Footer";
import Navbar from "../../Navbar";

export default function Location() {
  return (
    <div className="bg-green-200 ">
    <Navbar/>
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
              to="/AboutUs/location"
              className="text-[16px] font-semibold leading-10  text-blue-500"
            >
              LOCATION
            </NavLink>
          </Breadcrumbs>
          <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] rounded-md bg-no-repeat bg-[url('https://img.freepik.com/premium-photo/photo-kids-learning-computer-their-clasroom_763111-26032.jpg')]"></div>
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
                    Covenant Education Hazratganj, Lucknow
                  </div>
                  <ul className="md:ml-8 md:gap-0 lg:gap-0 sm:pt-4 sm:ml-2 text-[12px] sm:text-[14px] lg:text-[18px] font-semibold justify-center md:pt-2 lg:pt-[18px] text-black drop-shadow-md">
                    <li className="flex gap-2 sm:mt-2">
                      <BsTelephone />
                      <span className="text-black">
                        Phone:{" "}
                        <a className="text-black" href="tel:+91 8081405950">
                          +91-9335920991
                        </a>
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AiOutlineMail />
                      <span className="text-black">
                        Email:{" "}
                        <a
                          className=" text-black"
                          href="mailto:irwinamitdas@gmail.com"
                        >
                          irwinamitdas@gmail.com
                        </a>
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <BsStopwatch />
                      <span className="text-black">Support Time: </span> 9am - 9pm
                    </li>
                    <li className="flex gap-2">
                      <BsPinMap />
                      <span className="text-black">Address:</span>A-1, First Floor, Sameera Plaza Building, Naza Market, <br/> Hazratganj, Lucknow
                    </li>
                  </ul>
                </div>
                <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12">
                   {/* :MAP CONTAINER */}
                   <div className="order-1 col-span-full mt-10">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d113911.09703999321!2d80.941699!3d26.8488!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfda7eb1f4349%3A0xddb24865b7386109!2sThe%20Covenant%20Services!5e0!3m2!1sen!2sin!4v1694754057265!5m2!1sen!2sin"
                      title="map" scrolling="no" frameborder="0"
                      width="100%" height="300px"
                      className=""
                      loading="lazy"
                    />
                  </div>
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
