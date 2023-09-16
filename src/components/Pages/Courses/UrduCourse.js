import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

export default function UrduCourse() {
  return (
    <div className="bg-green-200 ">
      <Navbar />
      <div className="container mb-24 pt-28 mx-auto md:px-6">
        <section className="">
          <Breadcrumbs className="flex justify-end px-20    ">
            <NavLink
              to="/"
              className="text-[16px] font-semibold leading-10  text-gray-900 hover:text-blue-500"
            >
              Home
            </NavLink>
            <NavLink
              to="/Courses/Urdu/Course"
              className="text-[16px] font-semibold leading-10  text-blue-500"
            >
              URDU COURSE
            </NavLink>
          </Breadcrumbs>
          <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] rounded-md bg-no-repeat bg-[url('https://c1.wallpaperflare.com/preview/784/758/415/covering-reading-books-elegant.jpg')]"></div>
          <div className="container px-6 md:px-12">
            <div className="block rounded-lg h-auto bg-white px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
              <div className="flex flex-wrap">
                <div className="mx-8">
                  <div className="text-5xl font-bold">Urdu Course</div>
                  <p className="text-[18px] mt-4 ">
                    To speak with someone about beginning classes with Covenant,
                    use the contact form provided or find the contact details
                    for your preferred location below.
                  </p>
                  <div className="text-3xl font-bold mt-7">
                    Each course will take 12 months to complete.
                  </div>
                  <hr className=" mt-10 text-black" />
                  <div className="text-2xl font-bold mt-7">
                    First year- Elementary course- 1 to 12units
                  </div>
                  <hr className=" mt-10 text-black" />
                  <div className="text-2xl font-bold mt-7">
                    Second Year- Intermediate course- 1 to 12 Units
                  </div>
                  <hr className=" mt-10 text-black" />
                  <div className="text-2xl font-bold mt-7">
                    Third Year-Advance course
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
