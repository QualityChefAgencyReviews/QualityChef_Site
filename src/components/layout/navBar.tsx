"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { MetaData } from '@/constant/metaData';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/"className="text-xl font-bold text-gray-800">
              {MetaData.title?.toString()}
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/"className="text-gray-800 hover:text-gray-600">
              < >Home</>
            </Link>
            <Link href="#recensioni"className="text-gray-800 hover:text-gray-600">
              < >Recensioni</>
            </Link>
            <Link href="#chef"className="text-gray-800 hover:text-gray-600">
              <>Chef</>
            </Link>
            <Link href="#articoli"className="text-gray-800 hover:text-gray-600">
              < >Articoli</>
            </Link>
            <Link href="#eventi"className="text-gray-800 hover:text-gray-600">
              < >Eventi</>
            </Link>
            <Link href="#newsletter"className="text-gray-800 hover:text-gray-600">
              Newsletter
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/"onClick={toggleMenu} className="block text-gray-800 hover:text-gray-600">
              < >Home</>
            </Link>
            <Link href="#recensioni"onClick={toggleMenu} className="block text-gray-800 hover:text-gray-600">
              < >Recensioni</>
            </Link>
            <Link href="#chef"onClick={toggleMenu} className="block text-gray-800 hover:text-gray-600">
              < >Chef</>
            </Link>
            <Link href="#articoli"onClick={toggleMenu} className="block text-gray-800 hover:text-gray-600">
              < >Articoli</>
            </Link>
            <Link href="#eventi"onClick={toggleMenu} className="block text-gray-800 hover:text-gray-600">
              < >Eventi</>
            </Link>
            <Link href="#newsletter"onClick={toggleMenu} className="block text-gray-800 hover:text-gray-600">
              < >Newsletter</>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
