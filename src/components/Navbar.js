import { Fragment, useState } from "react";
import React from "react";
import logo from "../components/assests/llllllll.PNG";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { NavLink, Link } from "react-router-dom";

const About = [
  {
    name: "Our Directors",
    href: "/AboutUs/OurDirectors",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
    content: "Our Directors",
  },
  {
    name: "Our Method",
    href: "/AboutUs/OurMethod",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
    content: "Our Method",
  },
  {
    name: "Location",
    href: "/AboutUs/location",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
    content: "Location",
  },
  {
    name: "Testimonials",
    href: "/AboutUs/testimonials",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
    content: "Testimonials",
  },
];

const Courses = [
  {
    name: "CLTC Hindi Course",
    href: "/Courses/CLTC/hindi/Course",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
    content: "CLTC Hindi Course",
  },
  {
    name: "English Course",
    href: "/Courses/English/Course",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
    content: "English Course",
  },
  {
    name: "Urdu",
    href: "/Courses/Urdu/Course",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
    content: "Urdu Courses",
  },
  {
    name: "IELTS",
    href: "/Courses/IELTS",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
    content: "IELTS",
  },
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
  { name: "Hindi", href: "/" },
  { name: "English", href: "/" },
  { name: "Urdu", href: "/" },
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
      <header className="bg-white shadow-lg shadow-black fixed top-[-0px] w-full z-20 ">
        <nav
          className="mx-auto h-[90px] flex max-w-[90rem] items-center justify-between p-6 lg:px-8"
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
                className="flex items-center gap-x-1 text-sm font-semibold  hover:text-blue-500 leading-6 text-gray-900"
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
                <Popover.Panel className="absolute cursor-pointer -left-8 top-full z-10 mt-3 w-screen max-w-[200px] overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {About.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                      >
                        <div className="flex-auto">
                          {item.component ? (
                            <item.component
                              to={item.href}
                              className={item.className}
                            >
                              {item.content}
                            </item.component>
                          ) : (
                            <a href={item.href} className="block font-semibold">
                              {item.name}
                            </a>
                          )}
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
                COURSES
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
                    {Courses.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                      >
                        <div className="flex-auto">
                          {item.component ? (
                            <item.component
                              to={item.href}
                              className={item.className}
                            >
                              {item.content}
                            </item.component>
                          ) : (
                            <a href={item.href} className="block font-semibold">
                              {item.name}
                            </a>
                          )}
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
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
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
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
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
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
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
                            <NavLink
                              key={item.name}
                              to={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              activeClassName="active"
                            >
                              {item.name}
                            </NavLink>
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
                        COURSES
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...Courses].map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            activeClassName="active"
                          >
                            {item.name}
                          </NavLink>
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
                          <NavLink
                            key={item.name}
                            to={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            activeClassName="active"
                          >
                            {item.name}
                          </NavLink>
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
                          <NavLink
                            key={item.name}
                            to={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            activeClassName="active"
                          >
                            {item.name}
                          </NavLink>
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
                          <NavLink
                            key={item.name}
                            to={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            activeClassName="active"
                          >
                            {item.name}
                          </NavLink>
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
