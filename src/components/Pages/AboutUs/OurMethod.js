import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import admin from '../../assets/admin.jpg'

export default function OurMethod() {
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
              to="/AboutUs/OurMethod"
              className="text-[16px] font-semibold leading-10  text-blue-500"
            >
              OUR METHOD
            </NavLink>
          </Breadcrumbs>
          <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] rounded-md bg-no-repeat bg-[url('https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/newscms/2018_29/2504731/180720-read-book-good-health-ac-417p.jpg')]"></div>
          <div className="container px-6 md:px-12">
            <div className="block rounded-lg h-auto bg-white px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
              <div class="container mx-auto md:px-6">
                <section class=" text-center md:text-left">
                    <div class="flex flex-wrap items-center">
                      <div class="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                        <img
                          src={admin}
                          alt="Admin"
                          class="w-full rounded-lg shadow-lg lg:rounded-tr-none lg:rounded-bl-lg"
                        />
                      </div>
                      <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                        <div class="px-6 md:px-12">
                        <div className="text-4xl font-bold pt-5 lg:pt-0">IRWIN AMIT DAS</div>
                          <p className="text-[18px] font-bold mt-2s">Founder & Director <br/>Covenant Education Foreign Languages Languages</p>
                          <p class="mb-6 mt-6 text-neutral-600 dark:text-neutral-300">
                          At Covenant Education we believe we are in the business of teaching students, not just languages. That means that whether you are looking for an introduction to Hindi, intermediate Spanish, or advanced English, we’ll start wherever your language skills are and get to work moving you along the fluency continuum.
                          </p>
                          <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                          We also believe in teaching the language, not about the language. Our teachers teach in your target language starting day one, giving you an immersive learning experience instead of the theoretical lectures favored by many institutions. Our priority is for you to feel comfortable interacting in your new language, not just pass tests.
                          </p>
                          <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                          Classes can be tailored to students’ needs and interests. We’ve customized classes to focus on conversation, culture and even job interviews. We can also customize classes for those with different learning styles, and have earned a reputation for successfully teaching students who had been unable to learn at any other school.
                          </p>
                          <p class=" text-neutral-500 dark:text-neutral-300">
                          Find out what a student-centered learning experience can do for your language skills. We think you’ll be pleased with the results.
                          </p>
                        </div>
                      </div>
                    </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
