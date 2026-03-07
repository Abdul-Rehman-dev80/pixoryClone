import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div>
      {/* --- SIDEBAR OVERLAY --- */}
      <div
        className={`fixed inset-0 z-50 transition-visibility duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Sidebar Content */}
        <div
          className={`absolute top-0 left-0 h-full w-[80%] w-screen bg-white shadow-xl transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="flex flex-col p-5 gap-6 text-[16px] font-bold text-gray-700">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">Shop All</li>
            <li className="hover:text-black cursor-pointer">About</li>
            <li className="hover:text-black cursor-pointer">FAQ</li>
          </ul>
          <div className="w-[30px] absolute right-3 top-3" onClick={toggleMenu}>
            <svg
              data-v-92ebc0b3=""
              className="path"
              viewBox="0 0 24 24"
              preserveAspectRatio="none"
            >
              <path
                d="M18.2301 16.978L13.2701 12.0113L18.2101 7.05459C18.5601 6.70412 18.5601 6.13335 18.2101 5.78288C17.8601 5.43241 17.2901 5.43241 16.9401 5.78288L12.0001 10.7396L7.03006 5.76285C6.68006 5.41238 6.11006 5.41238 5.76006 5.76285C5.41006 6.11333 5.41006 6.68409 5.76006 7.03457L10.7201 12.0013L5.76006 16.9679C5.41006 17.3184 5.41006 17.8892 5.76006 18.2396C5.94006 18.4199 6.17006 18.5 6.40006 18.5C6.63006 18.5 6.86006 18.4099 7.04006 18.2396L12.0001 13.273L16.9601 18.2396C17.1401 18.4199 17.3701 18.5 17.6001 18.5C17.8301 18.5 18.0601 18.4099 18.2401 18.2396C18.5901 17.8892 18.5901 17.3184 18.2401 16.9679L18.2301 16.978Z"
                fill="var(--icon-color)"
                style={{ height: "100%" }}
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-between md:mx-25 mx-5 items-center border-b border-gray-300 md:py-3 py-1.5">
        <div className="md:w-62.5 flex items-center">
          <ul className="md:flex hidden gap-6 text-[13px] text-gray-500 font-bold">
            <li>Home</li>
            <li>Shop All</li>
            <li>About</li>
            <li>FAQ</li>
          </ul>
          <Menu
            onClick={toggleMenu}
            className="md:hidden mr-[30px]"
            size={24}
          />
        </div>
        <div className="font-bold text-xl md:w-[150px] md:px-0 w-[125px]">
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <div className="flex justify-around items-center md:w-[250px]">
          <div className="md:w-[100px] w-[60px] border border-black py-2 md:text-[14px] text-[11px] md:px-6 px-3 text-gray-600 font-bold mr-[10px]">
            $ USD
          </div>
          <div className="block md:hidden">
            <svg
              data-v-92ebc0b3=""
              className="path"
              viewBox="0 0 24 24"
              preserveAspectRatio="none"
            >
              <path
                d="M18 8.8C18.66 8.8 19.2 9.34 19.2 10V18C19.2 18.66 18.66 19.2 18 19.2H6C5.34 19.2 4.79999 18.66 4.79999 18V10C4.79999 9.34 5.34 8.8 6 8.8H18ZM18 7H6C4.34 7 3 8.34 3 10V18C3 19.66 4.34 21 6 21H18C19.66 21 21 19.66 21 18V10C21 8.34 19.66 7 18 7ZM12 3C9.41 3 7.27 4.75 7 7H8.83002C9.11002 5.75 10.42 4.8 12 4.8C13.58 4.8 14.88 5.75 15.17 7H17C16.73 4.75 14.59 3 12 3ZM12 14.8C14.59 14.8 16.73 13.05 17 10.8H15.17C14.89 12.05 13.58 13 12 13C10.42 13 9.12002 12.05 8.83002 10.8H7C7.27 13.05 9.41 14.8 12 14.8Z"
                fill="var(--icon-color)"
                style={{ height: "100%" }}
              ></path>
            </svg>
          </div>
          <div className="hidden md:block">
            <svg
              data-v-e063cca5=""
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z"
                stroke="black"
                strokeWidth="2"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M2.90625 20.2501C3.82775 18.6537 5.15328 17.328 6.74958 16.4062C8.34588 15.4845 10.1567 14.9993 12 14.9993C13.8433 14.9993 15.6541 15.4845 17.2504 16.4062C18.8467 17.328 20.1722 18.6537 21.0938 20.2501"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div>
            <svg
              data-v-9082203a=""
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.25 17.25H6.54375L3.92813 2.86875C3.89752 2.69653 3.80768 2.54042 3.67415 2.42743C3.54062 2.31444 3.37179 2.25168 3.19687 2.25H1.5"
                stroke="#111121"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M7.5 21C8.53553 21 9.375 20.1605 9.375 19.125C9.375 18.0895 8.53553 17.25 7.5 17.25C6.46447 17.25 5.625 18.0895 5.625 19.125C5.625 20.1605 6.46447 21 7.5 21Z"
                stroke="#111121"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M17.25 21C18.2855 21 19.125 20.1605 19.125 19.125C19.125 18.0895 18.2855 17.25 17.25 17.25C16.2145 17.25 15.375 18.0895 15.375 19.125C15.375 20.1605 16.2145 21 17.25 21Z"
                stroke="#111121"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M5.85938 13.5H17.6344C17.985 13.5011 18.3247 13.3785 18.5939 13.1539C18.8631 12.9293 19.0445 12.617 19.1063 12.2719L20.25 6H4.5"
                stroke="#111121"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
