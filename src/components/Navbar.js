import { Fragment, useState } from "react";
import React from "react";
import logo from "../components/assests/poster.JPG";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const About = [
  { name: "Our Directors", href: "/" },
  { name: "Our Method", href: "/" },
  {
    name: "Locations",
    isLocations: true,
    subItems: [
      { name: "Lucknow", href: "/" },
      { name: "Dehradun", href: "/" },
    ],
  },
  { name: "Testimonials", href: "/" },
];

const Cources = [
  {
    name: "Hindi",
    isLocations: true,
    subItems: [
      { name: "Beginner", href: "/" },
      { name: "Pre-Intermediate", href: "/" },
      { name: "Intermediate", href: "/" },
      { name: "Upper-Intermediate", href: "/" },
      { name: "Advanced", href: "/" },
    ],
  },
  {
    name: "English",
    isLocations: true,
    subItems: [
      { name: "Spoken English", href: "/" },
      { name: "Elementary", href: "/" },
      { name: "Pre-Intermediate", href: "/" },
      { name: "Intermediate", href: "/" },
      { name: "Upper-Intermediate", href: "/" },
      { name: "Advanced", href: "/" },
    ],
  },
  { name: "IELTS", href: "/" }, // Add isLocations property
  { name: "Urdu", href: "/" },
];

const forOrganizations = [
  { name: "Universities", href: "/" },
  { name: "Translation Services", href: "/" },
];

const InternationalStudent = [
  { name: "Accommodations", href: "/" },
  { name: "International Student Services", href: "/" },
];

const PlacementTests = [
  { name: "English", href: "/" },
  { name: "Spanish", href: "/" },
  { name: "Locations", href: "/", isLocations: true }, // Add isLocations property
  { name: "Testimonials", href: "/" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSubItems, setShowSubItems] = useState(false); // Add this state variable

  const handleLocationClick = () => {
    setShowSubItems(!showSubItems); // Toggle the visibility of subitems
  };

  return (
    <div>
      <header className="bg-white fixed top-[-0px] w-full z-20 ">
        <nav
          className="mx-auto h-[90px] flex max-w-[95rem] items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="">
              <img className="h-20" src={logo} alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-6">
            <NavLink
              to="/"
              className="text-sm font-semibold leading-6  hover:text-blue-500 text-gray-900"
            >
              HOME
            </NavLink>
            <Popover className="relative">
              <Popover.Button
                className="flex items-center gap-x-1 text-sm font-semibold hover:text-blue-500 leading-6 text-gray-900"
                onClick={handleLocationClick} // Replace handleLocationsClick with handleLocationClick
              >
                ABOUT US
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute cursor-pointer -left-8 top-full z-10 mt-3 w-screen max-w-[180px] overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {About.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                      >
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold"
                            onClick={
                              item.isLocations ? handleLocationClick : undefined
                            } // Add click handler for Locations
                          >
                            <div className="flex items-center">
                              {item.name}
                              {item.isLocations && (
                                <ChevronDownIcon className="h-5 w-5 mx-2 mt-1 text-gray-400" />
                              )}
                            </div>
                            <span className="absolute inset-0" />
                          </a>
                          {showSubItems &&
                            item.subItems && // Only show subitems if showSubItems is true
                            item.subItems.map((subItem) => (
                              <a
                                href={subItem.href}
                                className="block font-semibold text-gray-900 ml-8 mt-5"
                              >
                                {subItem.name}
                              </a>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <Popover className="relative">
              <Popover.Button
                className="flex items-center gap-x-1 text-sm font-semibold  hover:text-blue-500 leading-6 text-gray-900"
                onClick={handleLocationClick} // Replace handleLocationsClick with handleLocationClick
              >
                COURCES
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute cursor-pointer -left-8 top-full z-10 mt-3 w-screen max-w-[230px] overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {Cources.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                      >
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                            onClick={
                              item.isLocations ? handleLocationClick : undefined
                            } // Add click handler for Locations
                          >
                            <div className="flex items-center cursor">
                              {item.name}
                              {item.isLocations && (
                                <ChevronDownIcon className="h-5 w-5 mx-2 mt-1 text-gray-400" />
                              )}
                            </div>
                            <span className="absolute inset-0" />
                          </a>
                          {showSubItems &&
                            item.subItems && // Only show subitems if showSubItems is true
                            item.subItems.map((subItem) => (
                              <a
                                href={subItem.href}
                                className="block font-semibold text-gray-900 ml-8 mt-5"
                              >
                                {subItem.name}
                              </a>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <Popover className="relative">
              <Popover.Button
                className="flex items-center gap-x-1 text-sm font-semibold  hover:text-blue-500 leading-6 text-gray-900"
                onClick={handleLocationClick} // Add click handler for Locations
              >
                FOR ORGANIZATIONS
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-[200px] overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {forOrganizations.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <Popover className="relative">
              <Popover.Button
                className="flex items-center gap-x-1 text-sm hover:text-blue-500 font-semibold leading-6 text-gray-900"
                onClick={handleLocationClick} // Add click handler for Locations
              >
                INTERNATIONAL STUDENT
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-[200px] overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {InternationalStudent.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <Popover className="relative">
              <Popover.Button
                className="flex items-center gap-x-1 text-sm  hover:text-blue-500 font-semibold leading-6 text-gray-900"
                onClick={handleLocationClick} // Add click handler for Locations
              >
                PLACEMENT TESTS
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-[200px] overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {PlacementTests.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <NavLink
              to="/Contact"
              className="text-sm font-semibold leading-6  hover:text-blue-500 text-gray-900"
            >
              CONTACT US
            </NavLink>
          </Popover.Group>
        </nav>
      </header>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-10 w-auto" src={logo} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              <NavLink
                  to="/Contact"
                  className="text-[16px] font-semibold leading-10  hover:text-blue-500 text-gray-900 hover:bg-gray-50"
                >
                  HOME
                </NavLink>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full  hover:text-blue-500 items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        ABOUT US
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...About].map((item) => (
                          <>
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </Disclosure.Button>
                            {item.isLocations &&
                              item.subItems.map((subItem) => (
                                <Disclosure.Button
                                  key={subItem.name}
                                  as="a"
                                  href={subItem.href}
                                  className="block rounded-lg py-2 mx-6 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                  {subItem.name}
                                </Disclosure.Button>
                              ))}
                          </>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full  hover:text-blue-500 items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        COURCES
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...Cources].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full  hover:text-blue-500 items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        FOR ORGANIZATIONS
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...forOrganizations].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full  hover:text-blue-500 items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        INTERNATIONAL STUDENT
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...InternationalStudent].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full  hover:text-blue-500 items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        PLACEMENT TESTS
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...PlacementTests].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <NavLink
                  to="/Contact"
                  className="text-[16px] font-semibold leading-10  hover:text-blue-500 text-gray-900 hover:bg-gray-50"
                >
                  CONTACT US
                </NavLink>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}
