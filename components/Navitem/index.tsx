import React from 'react';
import Link from 'next/link';

function Navitem(Props: any) {
  return (
    <li
      className={`text-red-400 transform duration-100 delay-75 text-sm border border-white border-spacing-2 block py-2 pr-4 pl-3 rounded-md  md:px-1 md:py-0 hover:border-black ${
        Props.active ? 'text-underline' : ''
      }`}
      aria-current="page"
    >
      <Link href={Props.link}>{Props.menu}</Link>
    </li>
  );
}

export default Navitem;
