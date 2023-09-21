import React from "react";
import { BsTelephone } from "react-icons/bs";
import { BsStopwatch } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsPinMap } from "react-icons/bs";
import { Breadcrumbs } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import Footer from "../../Footer";
import { useState } from "react";
import axios from "axios";
import Navbar from "../../Navbar";

export default function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobileNo, setMobileNo] = useState();
  const [courseToApply, setCourseToApply] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Check if the mobile number is not less than 10 digits or not up to 10 digits
    if (mobileNo.length !== 10) {
      alert("Mobile number should be 10 digits");
      return;
    }

    const data = { name, email, mobileNo, courseToApply };

    axios
      .post("http://localhost:8081/create/new/QueryForm", data)
      .then((result) => {
        alert("Form submitted successfully!");
        setName("");
        setEmail("");
        setMobileNo("");
        setCourseToApply("");
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

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
              to="/Contact"
              className="text-[16px] font-semibold leading-10  text-blue-500"
            >
              CONTACT US
            </NavLink>
          </Breadcrumbs>
          <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] rounded-md bg-no-repeat bg-[url('https://t4.ftcdn.net/jpg/03/23/90/01/360_F_323900197_YRq2Lfh3LMToFyy6X2Ay6jZEN1F7Eczd.jpg')]"></div>
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
                  <ul className="md:ml-8 md:gap-0 mt-5 lg:gap-0 sm:pt-4 sm:ml-2 text-[12px] sm:text-[14px] lg:text-[18px] font-semibold justify-center md:pt-2 lg:pt-[18px] text-black drop-shadow-md">
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
                      <span className="text-black">Support Time: </span> 9am -
                      9pm
                    </li>
                    <li className="flex gap-2">
                      <BsPinMap />
                      <span className="text-black">Address:</span>A-1, First
                      Floor, Sameera Plaza Building, Naza Market, <br />{" "}
                      Hazratganj, Lucknow
                    </li>
                  </ul>
                  {/* :MAP CONTAINER */}
                  <div className="order-1 col-span-full mt-10">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d113911.09703999321!2d80.941699!3d26.8488!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfda7eb1f4349%3A0xddb24865b7386109!2sThe%20Covenant%20Services!5e0!3m2!1sen!2sin!4v1694754057265!5m2!1sen!2sin"
                      title="map"
                      scrolling="no"
                      frameborder="0"
                      width="100%"
                      height="300px"
                      className=""
                      loading="lazy"
                    />
                  </div>
                </div>
                <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12">
                  <form className="p-4" onSubmit={handleSubmit}>
                    <div class="relative h-12 w-[20] sm:w-[500px] bg-cyan-800 ">
                      <h1 className=" pl-5 pt-2 text-[20px] font-semibold text-white">
                        1. Name
                      </h1>
                    </div>
                    <div className="h-20 w-[20] sm:w-[500px] bg-slate-100">
                      <input
                        className="appearance-none text-[20px] bg-transparent border-b m-5 border-teal-500 w-[200px] md:w-[450px] sm:w-[450px] lg:w-[450px] text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div class="relative h-12 w-[20] sm:w-[500px] bg-cyan-800 mt-10 ">
                      <h1 className=" pl-5 pt-2 text-[20px] font-semibold text-white">
                        {" "}
                        2. E-Mail
                      </h1>
                    </div>
                    <div className="h-20 w-[20] sm:w-[500px] bg-slate-100">
                      <input
                        className="appearance-none text-[20px] bg-transparent border-b m-5 border-teal-500 w-[200px] md:w-[450px] sm:w-[450px] lg:w-[450px] text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                        type="email"
                        id="email"
                        placeholder="E-mail"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div class="relative h-12 w-[20] sm:w-[500px] bg-cyan-800 mt-10 ">
                      <h1 className=" pl-5 pt-2 text-[20px] font-semibold text-white">
                        {" "}
                        3. Mobile Number
                      </h1>
                    </div>
                    <div className="h-20 w-[20] sm:w-[500px] bg-slate-100">
                      <input
                        className="appearance-none text-[20px] bg-transparent border-b m-5 border-teal-500 w-[200px] md:w-[450px] sm:w-[450px] lg:w-[450px] text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        id="mobileNo"
                        name="mobileNo"
                        placeholder="Mobile Number"
                        value={mobileNo}
                        onChange={(e) => setMobileNo(e.target.value)}
                        required
                      />
                    </div>
                    <div class="relative h-12 w-[20] sm:w-[500px] bg-cyan-800 mt-10 ">
                      <h1 className=" pl-5 pt-2 text-[20px] font-semibold text-white">
                        {" "}
                        4. Course to apply
                      </h1>
                    </div>
                    <div className="h-20 w-[20] sm:w-[500px] bg-slate-100">
                      <input
                        className="appearance-none text-[20px] bg-transparent border-b m-5 border-teal-500 w-[200px] md:w-[450px] sm:w-[450px] lg:w-[450px] text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        id="courseToApply"
                        placeholder="Course To Apply"
                        name="courseToApply"
                        value={courseToApply}
                        onChange={(e) => setCourseToApply(e.target.value)}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-cyan-800 py-2 px-16 mx-8 sm:mx-36 md:mx-36 lg:mx-40 mt-14 text-[20px] text-white rounded-md shadow-xl"
                      disabled={isLoading} // Disable the button while loading
                    >
                      {isLoading ? "Loading..." : "Submit"}
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
