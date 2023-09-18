import React from 'react'

export default function Student() {
    return (
        <div>
            <div className="container my-24 mx-auto md:px-6">
                <section className="">
                    <div className="container text-center lg:text-left xl:px-32">
                        <div className="flex grid items-center lg:grid-cols-2">
                            <div className="mb-12 lg:mb-0">
                                <div
                                    className="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
                                    <h3 className="mb-3 text-5xl font-bold">
                                    Benefits About Online Learning Expertise
                                    </h3>

                                    <p className="mb-4 text-3xl mt-14 font-bold">
                                    Student Centered
                                    </p>
                                    <p className="mb-6 text-gray-500 text-xl dark:text-neutral-300">
                                    We’re in the business of teaching students, not just languages. That means that no matter where your language skills are, we’ll start where you are and help you to move along the fluency continuum.
                                    </p>

                                    <p className="mb-4 text-3xl mt-10    font-bold">
                                    Immersive
                                    </p>
                                    <p className="mb-6 text-gray-500 text-xl dark:text-neutral-300">
                                    We teach languages, not about languages. That’s why we teach in your target language starting day one, giving you an immersive learning experience in the classNameroom.
                                    </p>

                                    <p className="mb-4 text-3xl mt-10 font-bold">
                                    Accessible
                                    </p>
                                    <p className="text-gray-500 text-xl dark:text-neutral-300">
                                    We’ve earned a reputation for successfully teaching students who had been unable to learn at other schools. We’re proud of that because we believe everyone can learn a new language no matter their age or academic background..
                                    </p>
                                </div>
                            </div>

                            <div>
                                    <img src="https://images.unsplash.com/photo-1592188657297-c6473609e988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                                    className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
\
            </div>
        </div>
    )
}
