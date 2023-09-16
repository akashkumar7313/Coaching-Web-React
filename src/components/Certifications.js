import React from "react";
import image1 from './assets/1 (1).png'
import image2 from './assets/1 (2).png'
import image3 from './assets/1 (3).png'
import image4 from './assets/1 (4).png'
import image5 from './assets/1 (5).png'
import image6 from './assets/1 (6).png'

export default function Certifications() {
  return (
    <div className="item-center bg-cyan-100">
      <div className="container px-6 mx-auto pt-14 pb-14">
        <section className=" text-gray-800">
          <h2 className="text-4xl font-bold mb-6 text-center">Certifications</h2>
          <h2 className="text-2xl font-bold mb-14 text-center">Our staff aren’t just qualified, they’ve got the awards and certifications to prove it.</h2>

          <div className="grid lg:grid-cols-3 gap-6">

            <div
              className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img
                src={image1}
                className="w-full"
                alt="image1"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                  <div className="flex justify-start items-end h-full mt-2">
                    <div className="text-black m-5">
                      <h5 className="font-bold text-lg mb-3">I miss the sun</h5>
                      <p>
                        <small>
                          Published <u>13.01.2022</u> by Anna Maria Doe
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img
                src={image6}
                className="w-full"
                alt="image2"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                  <div className="flex justify-start items-end h-full mt-2">
                    <div className="text-black m-5">
                      <h5 className="font-bold text-lg mb-3">I miss the sun</h5>
                      <p>
                        <small>
                          Published <u>13.01.2022</u> by Anna Maria Doe
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img
                src={image2}
                className="w-full"
                alt="image2"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                  <div className="flex justify-start items-end h-full mt-2">
                    <div className="text-black m-5">
                      <h5 className="font-bold text-lg mb-3">I miss the sun</h5>
                      <p>
                        <small>
                          Published <u>13.01.2022</u> by Anna Maria Doe
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img
                src={image3}
                className="w-full"
                alt="image1"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                  <div className="flex justify-start items-end h-full mt-2">
                    <div className="text-black m-5">
                      <h5 className="font-bold text-lg mb-3">I miss the sun</h5>
                      <p>
                        <small>
                          Published <u>13.01.2022</u> by Anna Maria Doe
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img
                src={image4}
                className="w-full"
                alt="image1"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                  <div className="flex justify-start items-end h-full mt-2">
                    <div className="text-black m-5">
                      <h5 className="font-bold text-lg mb-3">I miss the sun</h5>
                      <p>
                        <small>
                          Published <u>13.01.2022</u> by Anna Maria Doe
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img
                src={image5}
                className="w-full"
                alt="image1"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                  <div className="flex justify-start items-end h-full mt-2">
                    <div className="text-black m-5">
                      <h5 className="font-bold text-lg mb-3">I miss the sun</h5>
                      <p>
                        <small>
                          Published <u>13.01.2022</u> by Anna Maria Doe
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}
