import Link from "next/link";
import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
}
const AppLayout = ({ children }: Props) => {
  const [gnbOpen, setGnbOpen] = useState(false);

  const gnbToggle = () => {
    setGnbOpen((prev) => !prev);
    console.log(gnbOpen);
  };
  return (
    <div>
      <div className="flex justify-center">
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
            </ul>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default AppLayout;
