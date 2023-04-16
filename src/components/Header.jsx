import React from 'react';

export default function Header() {
  return (
    <div className="border border-dashed flex items-center justify-between w-full p-7">
      <h1 className="border-b-[#C9A96E] font-bold text-[25px] text-[#171717] tracking-[2.5px] leading-[33px] font-[PT Serif]">
        FASHION
      </h1>
      <nav className="">
        <ul className="flex items-center gap-[20px]">
          <li>
            <a
              className="hover:text-[#C9A96E] duration-500 text-[#171717] text-[14px] leading-[19px] font-normal font-[PT Serif]"
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a href="/">Recipes</a>
          </li>
          <li>
            <a href="/">Article</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Purchase</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
