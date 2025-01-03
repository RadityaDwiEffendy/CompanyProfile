'use client'
import Image from "next/image";
import Link from "next/link";
import { handleClientScriptLoad } from "next/script";

import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);


  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);


    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);



  return (
    <>
      <nav className="bg-black shadow-md p-5 fixed z-[1000] top-0 left-0 w-full" >

        <ul className="flex space-x-10">
          <img className="ml-16 w-[150px] h-16" src="/images/Logo_Gas.png"></img>

          <div className="flex space-x-10 items-center ">
            <li>
              <Link href="/" className="ml-[200px] text-white hover:text-customPurple text-sm transition duration-500">Service</Link>
            </li>
            <li>
              <Link href="/" className="text-white hover:text-customPurple text-sm transition duration-500">Visi</Link>
            </li>
            <li>
              <Link href="/" className="text-white hover:text-customPurple text-sm transition duration-500">Solusi</Link>
            </li>
            <li>
              <Link href="/" className="text-white hover:text-customPurple text-sm transition duration-500">Team</Link>
            </li>
            <li>
              <Link href="/" className="text-white hover:text-customPurple text-sm transition duration-500">Blog</Link>
            </li>
            <li>
              <Link href="/" className="text-white hover:text-customPurple text-sm transition duration-500">Members</Link>
            </li>
            <li>
              <Link href="/" className="text-white hover:text-customPurple text-sm transition duration-500">News</Link>
            </li>

            <div className="flex items-center">
              <img className="w-6 h-6 bg-customPurple rounded-3xl" src="/images/profile.png"></img>
              <Link href="/" className="ml-5 text-customPurple text-base hover:text-purple-300 transition furation-500">Masuk</Link>
            </div>


            <div>
              <button
                onClick={toggleDropdown}
                className={`ml-10 w-24 h-10 border border-white ${
                  isOpen ? "border-b-0" : ""
                }`}>ID
              </button>
              {isOpen && (
                <div className="flex items-center justify-center ml-10 absolute w-24 h-10 border-l border-r border-b border-white">
                  <Link href="/" className="block">EN</Link>
                </div>
              )}



            </div>
          </div>
        </ul>
      </nav>

      <div className="w-full h-[100vh] bg-white ">
        <div className="">
          <p>Standar Baru dalam Manajemen Layanan & Operasi TI</p>
        </div>
      </div>

    </>


  );
}
