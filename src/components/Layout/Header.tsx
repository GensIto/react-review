import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "../tools/Hamburger/Hamburger";

export const Header = () => {
  return (
    <header className='flex justify-between items-center p-4'>
      <img className='h-6 w-6' src='./images/logo/vite.svg' alt='logo' />
      {/* <ul className='flex gap-2 items-center'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul> */}
      <Hamburger />
    </header>
  );
};
