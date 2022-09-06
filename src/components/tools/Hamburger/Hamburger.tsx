import { useState } from "react";
import { HamburgerBtnActive } from "./Button/HamburgerBtnActive";
import { HamburgerBtn } from "./Button/HamburgerBtn";
import { HamburgerMenu, HamburgerMenuActive } from "./styled";
import { Link } from "react-router-dom";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const handleBtn = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen ? (
        <div onClick={handleBtn}>
          <HamburgerBtnActive />
        </div>
      ) : (
        <div onClick={handleBtn}>
          <HamburgerBtn />
        </div>
      )}

      <nav>
        <div className='flex items-center pl-8 h-14'>
          {isOpen ? (
            <HamburgerMenuActive className='flex space-x-0 sm:space-x-4'>
              <Link to='/'>
                <a className='m-0 sm:p-0'>Home</a>
              </Link>
              <Link to='/react-query'>
                <a className='m-0 sm:p-0'>react-query</a>
              </Link>
            </HamburgerMenuActive>
          ) : (
            <HamburgerMenu className='flex space-x-0 sm:space-x-4'>
              <Link to='/'>
                <a className='m-0'>Home</a>
              </Link>
              <Link to='/react-query'>
                <a className='m-0'>react-query</a>
              </Link>
            </HamburgerMenu>
          )}
        </div>
      </nav>
    </>
  );
}
