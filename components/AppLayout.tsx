import Link from "next/link";
import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
}
const desktopHeaderHeight = "10";
const AppLayout = ({ children }: Props) => {
  const [gnbOpen, setGnbOpen] = useState(false);

  const gnbToggle = () => {
    setGnbOpen((prev) => !prev);
  };
  return (
    <div className="flex flex-col h-screen items-start ">
      <header
        className={`flex justify-center w-full fixed h-${desktopHeaderHeight}`}
      >
        <div
          className={`w-screen h-screen bg-black md:hidden visible opacity-0 fixed transition-opacity duration-500  ${
            gnbOpen ? "opacity-70" : "invisible"
          }`}
        ></div>
        <div
          className={`${
            gnbOpen ? "" : ""
          } flex items-center  w-full relative md:justify-center items-stretch`}
        >
          <button
            type="button"
            className={`${
              gnbOpen ? "opacity-0 invisible" : "opacity-100 visible"
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
              gnbOpen ? "" : " -translate-x-full  "
            } bg-white flex items-stretch pt-8 md:pt-0 md:translate-x-0 md:bg-orange-600 h-screen md:h-auto w-80 md:mx-0 md:w-auto transition-all duration-500 md:transition-none`}
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
            <ul className="w-full md:w-auto flex-col md:flex-row items-stretch md:space-x-10 flex text-center ">
              <li className="border-t-2 mt-5 md:mt-0 border-transparent md:hover:border-slate-800 w-full text-center">
                <Link href="/">
                  <a className="flex items-center text-orange-600 px-5 md:text-white md:hover:text-cyan-900 py-1 justify-center ">
                    home
                  </a>
                </Link>
              </li>
              <li className="border-t-2 mt-5 md:mt-0 border-transparent md:hover:border-slate-800 w-full text-center">
                <Link href="/profile">
                  <a className="flex items-center text-orange-600 px-5 md:text-white md:hover:text-cyan-900 py-1 justify-center ">
                    profile
                  </a>
                </Link>
              </li>
              <li className="border-t-2 mt-5 md:mt-0 border-transparent md:hover:border-slate-800 w-full text-center">
                <Link href="/signup">
                  <a className="flex items-center text-orange-600 px-5 md:text-white md:hover:text-cyan-900 py-1 justify-center ">
                    signup
                  </a>
                </Link>
              </li>
              <li className="border-t-2 mt-5 md:mt-0 border-transparent md:hover:border-slate-800 w-full text-center">
                <Link href="/faq">
                  <a className="flex items-center text-orange-600 px-5 md:text-white md:hover:text-cyan-900 py-1 justify-center ">
                    FAQ
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main
        className={`w-full bg-orange-600 grow pt-10 flex flex-col pt-${desktopHeaderHeight}`}
      >
        <div className="flex h-80 bg-slate-100">
          <img
            src="https://images.unsplash.com/photo-1584990302213-1248392c4892?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3592&q=80"
            alt=""
          />
        </div>
        <div className="w-lg bg-orange-900 flex flex-col grow">{children}</div>
      </main>
      <footer></footer>
    </div>
  );
};

export default AppLayout;
