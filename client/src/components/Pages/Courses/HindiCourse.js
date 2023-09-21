import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import Footer from "../../Footer";
import Navbar from "../../Navbar";

export default function HindiCourse() {
  return (
    <div className="bg-green-200 ">
    <Navbar/>
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
              to="/Courses/CLTC/hindi/Course"
              className="text-[16px] font-semibold leading-10  text-blue-500"
            >
              HINDI COURSE
            </NavLink>
          </Breadcrumbs>
          <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] rounded-md bg-no-repeat bg-[url('https://c1.wallpaperflare.com/preview/784/758/415/covering-reading-books-elegant.jpg')]"></div>
          <div className="container px-6 md:px-12">
            <div className="block rounded-lg h-auto bg-white px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
              <div className="flex flex-wrap">
                <div className="mx-8">
                  <div className="text-5xl font-bold">CLTC Hindi Course</div>
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
                  <div className="text-2xl mt-4 flex items-center">
                    1. Hindi Vowels, Hindi Consonants, Noun (Sangya), Pronoun,
                    (Survnam).
                  </div>
                  <div className="text-2xl mt-4 flex items-center">
                    2. Conversation: Identify Animals, Role play, Ordinal Number
                    quiz. and number names, body parts,
                  </div>
                  <div className="text-2xl mt-4 flex items-center">
                    3. Weeks, season, month, in Hindi
                  </div>
                  <div className="text-2xl mt-4 flex items-center">
                    4. Festival of India, cultural information
                  </div>
                  <div className="text-2xl mt-4 flex items-center">
                    5. Writing: alphabet dictation. Make sentences (elementary)
                  </div>
                  <div className="text-2xl mt-4 flex items-center">
                    6. Audio conversation
                  </div>
                  <hr className=" mt-10 text-black" />
                  <div className="text-2xl font-bold mt-7">
                    Second Year- Intermediate course- 1 to 12 Units
                  </div>
                  <div className="text-2xl mt-4 flex items-center">
                    1. Hindi Grammar-put the right verbs, helping verbs,
                  </div>
                  <div className="text-2xl mt-4 flex items-center">
                    2. Distance and measurement
                  </div>
                  <div className="text-2xl mt-4 flex items-center">
                    3. Find out the service provider name and services.
                  </div>
                  <div className="text-2xl mt-4 flex items-center">
                    4. Reading Comprehension
                  </div>
                  <div className="text-2xl mt-4 flex items-center">
                    5. Writing: Essay, Letter
                  </div>
                  <div className="text-2xl mt-4 flex items-center">
                    6. Formal introduction in Hindi.
                  </div>
                  <div className="text-2xl mt-4 flex items-center">
                    7. Speaking with native speaker.
                  </div>
                  <div className="text-2xl mt-4 flex items-center">
                    8. Role play.
                  </div>
                  <div className="text-2xl mt-4 flex items-center">
                    9. Audio conversation for practice.
                  </div>
                  <hr className=" mt-10 text-black" />
                  <div className="text-2xl font-bold mt-7">
                    Third Year-Advance course
                  </div>
                  <div className="text-2xl mt-4 flex items-center">
                    1. Express ideas: long and short question, paraphrasing, Debate practice, business and job meeting.
                  </div>
                  <div className="text-2xl mt-4 flex items-center">
                    2. Interview skills
                  </div>
                  <div className="text-2xl mt-4 flex items-center">
                    3. Conference conversation practice classes.
                  </div>
                  <div className="text-2xl mt-4 flex items-center">
                    4. Story writing
                  </div>
                  <div className="text-2xl mt-4 flex items-center">
                    5. Audio and video.
                  </div>
                  <div className="text-2xl mt-4 flex items-center">
                    6. Book reading.
                  </div>
                  <div className="text-2xl mt-4 flex items-center">
                    7. Article writing
                  </div>
                  <div className="text-2xl mt-4 flex items-center">
                    8. Outdoor task
                  </div>
                  <div className="text-2xl mt-4 flex items-center">
                    9. GROWTH PARTICPATE ACTIVITY (GPA)
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
