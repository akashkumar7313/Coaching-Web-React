import React, { Component } from 'react'

export class Difference extends Component {
  render() {
    return (
      <div>
<div className="container my-24 mx-auto md:px-6">
  <section className="">
    <div className="flex flex-wrap">
      <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
        <div className="flex lg:py-12">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/people/033.jpg"
            className="w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px] z-[10]" alt="Person" />
        </div>
      </div>
      <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
        <div className="flex h-full items-center rounded-lg bg-primary p-6 text-center bg-blue-600 text-white lg:pl-12 lg:text-left">
          <div className="lg:pl-12">
            <h2 className="mb-6 text-3xl font-bold">
            The Covenant Foreign Languages
            </h2>
            <p className="mb-6 pb-2 text-[18px] lg:pb-0">
            At Covenant we recognize that our students want more than to simply learn a language. They want to connect with people across the world, compete in a global marketplace, or simply navigate the local bazaar on their own. That’s why all of our classNamees are focused on teaching you to truly engage with the language in a way that will give you confidence to use it outside the classNameroom.
            </p>
            <h2 className="mb-6 text-3xl font-bold">
            Our Mission
            </h2>
            <p className="mb-6 pb-2 text-[18px] lg:pb-0">
            To be a bridge that connects India and the world by providing culturally relevant and innovative language learning, equipping students to communicate confidently and succeed in their individual goals.
            </p>
            <button type="button"
              className="rounded-full border-2 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
              data-te-ripple-init data-te-ripple-color="light">
              ENROLL NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
      </div>
    )
  }
}

export default Difference
