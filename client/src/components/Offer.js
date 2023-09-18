import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Offer extends Component {
  render() {
    return (
      <div>
        <div className="container my-24 mx-auto md:px-6">
          <section className="">
            <div className="relative overflow-hidden bg-cover rounded-lg bg-no-repeat bg-[50%] bg-[url('https://i0.wp.com/lpatucson.org/central/wp-content/uploads/sites/3/2019/07/iStock-971404756.jpg?fit=1254%2C836&ssl=1')] h-[500px]"></div>
            <div className="container mx-auto px-6 md:px-12 xl:px-32">
              <div className="text-center">
                <div className="mt-[-170px] block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:py-16 md:px-12">
                  <h1 className="mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                    The best offer on the market <br />
                    <span className="text-danger dark:text-danger-400">
                      for your learning
                    </span>
                  </h1>
                  <NavLink
                    to="/Contact"
                    className="mb-2 inline-block sm:mx-0 md:mx-6 mt-3 sm:mt-2 mx-0 rounded bg-danger px-6 sm:px-6 md:px-8 lg:px-12 pt-4 pb-3.5 text-[16px] font-medium uppercase leading-normal text-black bg-blue-500 shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] md:mr-2 md:mb-0"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    href="#!"
                    role="button"
                  >
                    ENROLL NOW
                  </NavLink>

                  <NavLink
                    to="/AboutUs/location"
                    className="mb-2 inline-block mx-6 rounded bg-danger px-6 sm:px-6 md:px-8 lg:px-12 pt-4 pb-3.5 text-[16px] font-medium uppercase leading-normal text-black bg-red-500 shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] md:mr-2 md:mb-0"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    href="#!"
                    role="button"
                  >
                    Learn more
                  </NavLink>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Offer;
