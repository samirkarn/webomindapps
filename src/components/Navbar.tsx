import React from "react";
import { Button } from "./ui/button";
import { IoIosArrowForward } from "react-icons/io";

const NavBar = () => {
    const [open, setOpen] = React.useState(false);
  
    return (
      <>
        <div className="relative bg-white">
          <div className="max-w-10x2 mx-auto px-4 md:pl-20 border-b-2 border-[#EE1B3033] border-shadow">
            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                  <span className="sr-only">Riskcovry</span>
                  <img
                    className="logo sm:h-10"
                    src="./images/logo.png"
                    alt="riskcovry"
                  />
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setOpen(!open)}
                >
                  <span className="sr-only">Open menu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            
              <div className="hidden md:flex gap-5 items-center justify-end md:flex-1 lg:w-0">
              <a
                  href="#"
                  className="text-sm font-medium text-black"
                >
                  Products
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-black"
                >
                  Industries
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-black"
                >
                  Company
                </a>
                <a
                  href="/"
                  className="text-sm font-medium text-black"
                >
                  Resources
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-white"
                >
                  <Button className="h-10 rounded-full px-4"> 
                    <span>Schedule Demo</span><IoIosArrowForward className="text-lg"/>
                    </Button>
                </a>
              </div>
            </div>
          </div>
  
          <div
            className={
              open
                ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50"
                : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right hidden"
                // "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            }
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="./images/logo.png"
                      alt="riskcovry"
                    />
                   
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      onClick={() => setOpen(!open)}
                    >
                      <span className="sr-only">Close menu</span>
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                  <a
                  href="#"
                  className="text-sm font-medium text-black"
                >
                  Products
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-black"
                >
                  Industries
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-black"
                >
                  Company
                </a>
                <a
                  href="/"
                  className="text-sm font-medium text-black"
                >
                  Resources
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-white"
                >
                  <Button className="h-10 rounded-full px-4"> 
                    <span>Schedule Demo</span><IoIosArrowForward className="text-lg"/>
                    </Button>
                </a>             
                  </nav>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </>
    );
  };

  export default NavBar;
  
  