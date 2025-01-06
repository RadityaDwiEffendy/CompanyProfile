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

  useEffect(() => {
    const s = () => {
      const z = document.getElementById('zoom-bg')
      let sp = window.scrollY

      z.style.backgroundSize = 100 + sp / 5 + "%";


    }
    window.addEventListener("scroll", s);

    return () => {
      window.removeEventListener("scroll", s)
    }
  }, [])

  


  return (
    <>
      <nav className="bg-black shadow-md p-5 fixed z-[1000] top-0 left-0 w-full" >

        <ul className="flex space-x-10">
          <Image className="ml-16 w-[150px] h-16" src="/images/Logo_Gas.png" alt="Logo Gas" width={150} height={64} />

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
                className={`ml-10 w-24 h-10 border border-white ${isOpen ? "border-b-0" : ""
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

      <div className="mt-[100px] w-full h-[110vh] bg-[url('/images/bgUngu.png')] bg-cover bg-center" id="zoom-bg">
        <div className="absolute top-[50%] w-7/12 ml-10" >
          <div className="">
            <p className="text-7xl leading-tight font-medium">Standar Baru</p>
            <p className="text-7xl leading-tight font-medium">dalam Manajemen</p>
            <p className="text-7xl leading-tight font-medium">Layanan & Operasi TI</p>
          </div>
          <div className="w-[50rem] mt-10">
            <p className="text-3xl">Memberikan Solusi TI yang inovatif dan efisien, memastikan bisnis Anda tetap terdepan di dunia digital yang bergerak cepat saat ini</p>
          </div>
        </div>
      </div>

    </>


  );
}


