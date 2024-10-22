import React, { useEffect, useState } from 'react';

import searchIcon from '../../assets/Icons/search-interface-symbol.png';
import profileIcon from '../../assets/Icons/profile.png';
import menuBarsIcon from '../../assets/Icons/menu.png';

const navLgClass = [
  'text-[#150B2BB3]',
  'hidden',
  'lg:flex',
  'justify-center',
  'items-center',
  'gap-12',
];

const navSmClass = [
  'text-[#150B2BB3]',
  'bg-[#150B2B0D]',
  'py-4',
  'rounded-xl',
  'absolute',
  'top-[104px]',
  'md:top-[128px]',
  'right-0',
  'left-0',
  'hidden',
  'flex-col',
  'items-center',
  'gap-4',
];

const Navbar = () => {
  const [navClass, setNavClass] = useState([]);

  useEffect(() => {
    handleNavClass();
  }, []);

  window.addEventListener('resize', () => {
    handleNavClass();
  });

  const handleNavClass = () => {
    window.innerWidth >= 1024
      ? setNavClass(navLgClass)
      : setNavClass(navSmClass);
  };

  const handleMenu = () => {
    const navMenu = document.getElementById('nav-menu');
    const navClasses = navMenu.classList.value;

    navClasses.includes('hidden')
      ? (navMenu.classList.remove('hidden'), navMenu.classList.add('flex'))
      : navClasses.includes('flex') &&
        (navMenu.classList.remove('flex'), navMenu.classList.add('hidden'));
  };

  return (
    <div className="py-7 md:py-10 lg:py-12 relative flex justify-between items-center">
      <h3 className="text-[#150B2B] text-[32px] leading-10 font-bold cursor-pointer">
        Recipe Calories
      </h3>

      <ul id="nav-menu" className={navClass.join(' ')}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Recipes</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Search</a>
        </li>
      </ul>

      <div className="flex justify-end items-center gap-4">
        {/* Search Div */}
        <div className="bg-[#150B2B0D] px-6 py-3 rounded-full hidden md:flex items-center gap-2">
          <img className="size-6" src={searchIcon} alt="0" />
          <input
            className="bg-transparent outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
        {/* Search Btn */}
        <button className="bg-[#150B2B0D] size-12 rounded-full flex md:hidden justify-center items-center">
          <img className="size-6" src={searchIcon} alt="profile" />
        </button>
        {/* Profile */}
        <button className="bg-[#0BE58A] size-12 rounded-full flex justify-center items-center">
          <img className="size-6" src={profileIcon} alt="profile" />
        </button>
        {/* Menu Bars */}
        <button onClick={() => handleMenu()} className="size-8 block lg:hidden">
          <img className="size-8" src={menuBarsIcon} alt="menu" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
