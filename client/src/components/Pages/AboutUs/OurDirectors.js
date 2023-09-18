import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import Footer from "../../Footer";

export default function OurDirectors() {
  return (
    <div className="bg-green-200 ">
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
              to="/AboutUs/OurDirectors"
              className="text-[16px] font-semibold leading-10  text-blue-500"
            >
              OUR DIRECTORS
            </NavLink>
          </Breadcrumbs>
          <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] rounded-md bg-no-repeat bg-[url('https://img.freepik.com/premium-photo/photo-kids-learning-computer-their-clasroom_763111-26032.jpg')]"></div>
          <div className=" md:px-12 ">
            <div className="block rounded-lg h-auto bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
              <div className="flex flex-wrap gap-6 mx-10">
                <div>
                  <div className="text-5xl font-bold pt-5 lg:pt-0">Our Directors</div>
                  <p className="text-[18px] mt-10  text-neutral-500">
                    Covenant Education of Languages was founded in 2005 by Hugo  <br />
                    and Lessandra Alves. Together, their years of language learning  <br />
                    and teaching experience have helped propel a small Spanish-only <br />
                    school into 2 locations offering 7 language options today.
                  </p>
                  <p className="text-[18px] mt-4  text-neutral-500">
                    Collectively, Covenant Education’s directors have earned 2 CELTAs, <br />
                    2 Masters Degrees, 1 DELE and 1 DELTA. They’ve reached fluency in <br />
                    9 languages, and taught over 1,500 students from 36 countries <br /> combining  
                    their considerable expertise with years of experience  <br /> in learning
                    environments around the world.
                  </p>
                  <p className="text-[18px] mt-4  text-neutral-500 ">
                    Their dream is for Covenant Education to serve as a bridge
                    that  <br /> connects India and the world by providing
                    culturally relevant and  <br /> innovative language learning,
                    equipping students to communicate  <br /> confidently and
                    succeed in their individual goals.
                  </p>
                  <p className="text-[18px] mt-4  text-neutral-500">
                    Click on any of our directors to learn more about their
                    experience,  <br /> certifications, and awards.
                  </p>
                </div>
                <div class="mb-12 mx-10  md:px-3 lg:mb-0 lg:w-5/12">
                  <div className=" flex flex-wrap justify-evenly gap-4 mx-1 mt-16">
                    <img
                      src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                      className="w-[200px] h-[300px] shadow-xl rounded-full"
                      alt="Avatar"
                    />
                    <img
                      src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                      className="w-[250px] h-[350px] shadow-xl rounded-full"
                      alt="Avatar"
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
