import Link from "next/link";
import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
}
const AppLayout = ({ children }: Props) => {
  const [gnbOpen, setGnbOpen] = useState(false);

  const gnbToggle = () => {
    setGnbOpen((prev) => !prev);
  };
  return (
    <div className="h-screen ">
      <div className="flex justify-center w-full">
        <div
          className={`w-screen h-screen bg-black md:hidden opacity-0 fixed transition-opacity duration-500 ${
            gnbOpen ? "opacity-70" : ""
          }`}
        ></div>
        <div className="flex items-center md:mt-4 w-full relative md:justify-center">
          <button
            type="button"
            className={`${
              gnbOpen ? "opacity-0" : " opacity-100"
            } overflow-hidden w-6 h-6 bg-orange-300 md:hidden absolute left-2 top-2 z-10`}
            onClick={gnbToggle}
          >
            <span className=" absolute left-full">button</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div
            className={`${
              gnbOpen ? "" : " -translate-x-full fixed"
            }bg-slate-500 pt-8 md:pt-0 md:translate-x-0 md:bg-white h-screen md:h-auto w-80 md:mx-0 md:w-auto transition-all duration-500 md:transition-none`}
          >
            <button
              type="button"
              className={`${
                gnbOpen ? "opacity-100" : "opacity-0"
              }  overflow-hidden w-6 h-6 bg-orange-300 md:hidden absolute left-72 top-2 z-10`}
              onClick={gnbToggle}
            >
              <span className=" absolute left-full">button</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="md:space-x-10 md:flex ">
              <li className="border-t-2 border-transparent md:hover:border-slate-800">
                <Link href="/">
                  <a className="flex text-white px-2 md:text-cyan-600 md:hover:text-cyan-900 py-1">
                    home
                  </a>
                </Link>
              </li>
              <li className="border-t-2 border-transparent md:hover:border-slate-800">
                <Link href="/profile">
                  <a className="flex text-white  px-2 md:text-cyan-600 md:hover:text-cyan-900 py-1">
                    profile
                  </a>
                </Link>
              </li>
              <li className="border-t-2 border-transparent md:hover:border-slate-800">
                <Link href="/signup">
                  <a className="flex text-white  px-2 md:text-cyan-600 md:hover:text-cyan-900 py-1">
                    signup
                  </a>
                </Link>
              </li>
              <li className="border-t-2 border-transparent md:hover:border-slate-800">
                <Link href="/faq">
                  <a className="flex text-white  px-2 md:text-cyan-600 md:hover:text-cyan-900 py-1">
                    FAQ
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-orange-600 grow mt-4 flex flex-col">
        <div className="w-lg bg-orange-900 flex flex-col">{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
