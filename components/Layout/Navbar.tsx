// @ts-nocheck
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Navitem from '../Navitem';
import Image from 'next/image';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
function Navbar() {
  let [activeIdx, setActiveIdx] = useState(0);
  const [navActive, setNavActive] = useState(false);

  const cartItems = useSelector((state) => state.cart.totalCartItem);
  const wishListItems = useSelector((state) => state.wishList.wishList);

  const Menu = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '#' },
    { title: 'Contact', link: '#' },
  ];
  return (
    <nav className="top-0 sticky z-[99] px-2 md:px-20 bg-white bg-opacity-90 shadow-sm">
      <div className="flex flex-wrap justify-between items-center mx-auto ">
        <Link href="/">
          <div className=" flex justify-center text-xl font-mono-monospace font-bold whitespace-nowrap text-red-400 cursor-pointer">
            {<Image alt="logo" src="/favicon.ico" width={32} height={32} />}
            <p className="my-auto">
              shop<span className="text-black">x</span>
            </p>
          </div>
        </Link>

        <button
          data-collapse-toggle="#navbar-default"
          onClick={() => {
            setNavActive(!navActive);
          }}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${navActive ? '' : 'hidden'}`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0">
            {Menu.map((menu, idx) => (
              <div
                key={menu.title}
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
              >
                <Navitem
                  menu={menu.title}
                  link={menu.link}
                  active={activeIdx === idx}
                />
              </div>
            ))}
          </ul>
        </div>
        <div className=" flex">
          <Link href="/wishlist">
            <button className="inline-flex relative item-center px-2 py-1 rounded-lg border border-white hover:border-black w-10 h-6">
              <AiOutlineHeart />
              {wishListItems.length ? (
                <div
                  className="inline-flex absolute top-0 right-0 justify-center items-center w-4 h-4 
              text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white
               dark:border-gray-900"
                ></div>
              ) : (
                <></>
              )}
            </button>
          </Link>
          <Link href="/cart">
            <a className="flex">
              {' '}
              <button
                className="inline-flex relative item-center px-2 py-1 rounded-lg
                border border-white hover:border-black w-10 h-6"
              >
                <AiOutlineShoppingCart />
                {cartItems ? (
                  <div
                    className="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 
              text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white
               dark:border-gray-900"
                  >
                    {cartItems}
                  </div>
                ) : (
                  <></>
                )}
              </button>
            </a>
          </Link>
          <Link href="#">
            <a className="flex">
              {' '}
              <button className="inline-flex justify-center item-center ml-2 rounded-full hover:bg-gray-200 w-6 h-6">
                <CgProfile size={25} />
              </button>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
