import React from 'react';
import Link from 'next/link';
import Products from '../Product';
import Image from 'next/image';

const category = [
  { name: 'Mens', link: "category/men's clothing" },
  { name: 'Womens', link: "category/women's clothing" },
  { name: 'Jewelery', link: 'category/jewelery' },
  { name: 'Electronics', link: 'category/electronics' },
];

function index() {
  return (
    <div className="flex flex-col mt-5">
      <div className="flex bg-gray-100 shadow-sm my-1 p-1 justify-center">
        {category.map((item) => (
          <div key={item.name} className="px-2 py-1 mx-2 text-gray-600">
            <Link href={item.link}>{item.name}</Link>
          </div>
        ))}
      </div>
      <div
        className="flex flex-wrap md:flex-nowrap justify-center md:px-24 mx-auto my-5
                   rounded-lg bg-gradient-to-br 
                   bg-opacity-75 shadow-sm py-5 text-pink-600 "
      >
        <div className="relative flex w-full md:w-4/6 mx-2">
          <div className="absolute flex flex-col left-2  top-10">
            <div className="text-lg md:text-3xl font-bold">New Fashions</div>
            <div className="md:w-72 text-sm space-x-1 text-bold md:text-md text-white text-left">
              {' '}
              Discover our range of clothes, accessories, beauty, activewear and
              more
            </div>
          </div>
          <img
            src="/images/mens-clothing.jpg"
            alt="category-image"
            className="rounded-md shadow-lg border-2 border-pink-500 hover:border-white object-cover "
          />
        </div>
        <div className="w-full md:w-2/6 flex-wrap mx-2">
          <div className="relative flex w-full mt-1 max-h-60">
            <div className="absolute left-2 top-2 md:top-10 text-lg md:text-xl">
              <div className="text-lg md:text-xl font-bold bg-white">
                Furniture
              </div>
              <div className="text-xs md:text-md text-white text-left">
                thousands of quality new and second hand furniture
                items,wonderful addition to your home.
              </div>
            </div>
            <img
              src="/images/furniture.jpg"
              alt="category-image"
              className="rounded-md shadow-lg border-2 border-blue-500 hover:border-white object-cover"
            />
          </div>
          <div className="relative flex w-full mt-1">
            <div className="absolute left-2 top-2 md:top-10">
              <div className=" text-lg md:text-xl font-bold bg-white">
                Gamming
              </div>
              <div className="text-xs space-x-1 md:text-md text-white text-left">
                Explore our selection of gaming laptops, desktops, PC games &
                more for your PC gaming setup
              </div>
            </div>
            <img
              src="/images/joystick.jpg"
              alt="category-image"
              className="rounded-md shadow-lg border-2 border-yellow-500 hover:border-white object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <Products />
      </div>
      <div className="relative flex flex-wrap justify-center rounded-md h-72 md:mx-20 mt-10 mb-2 md:px-10 bg-gray-200">
        <div className="w-full md:w-2/6">
          <img
            src="/images/fashion-girl2.jpg"
            alt="women-clothing"
            className="md:absolute left-0 h-72 md:mr-10 object-contain"
          />
        </div>
        <div className="w-full md:w-4/6 flex flex-col justify-center md:mx-10 my-2 md:my-auto">
          <div className=" md:text-2xl font-extrabold mx-auto text-gray-800">
            Check out trending fashions !
          </div>
          <a className="bg-blue-500 hover:shadow-md mx-auto px-2 py-1 w-24 rounded-sm items-center text-white m-1">
            <Link href="/category/women's clothing">See more</Link>
          </a>
        </div>
        <div className="w-full md:w-2/6 md:ml-10">
          {' '}
          <img
            src="/images/fashion-girl.jpg"
            alt="women-clothing"
            className="absolute top-0 right-0 h-72 md:ml-10 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default index;
