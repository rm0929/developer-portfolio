import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import {styles} from '../styles';
import {navLinks} from '../constants';
import {logo, menu, close} from '../assets';


const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
// WHOLE NAVBAR
    <nav className={`${styles.paddingX} w-full flex py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={ () => {
            setActive("");
            window.scrollTo(0,0);
          }}
        >
{/* IMAGE LOGO BEFORE NAME */}
          <img src={logo} alt="logo" className="w-9 h-9 object-contain"/>
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Rohan&nbsp;
          <span className="sm:block hidden ">| Software Developer
          </span></p>
{/* note* here sm refers to small devices. So on small devices it will be hidden */}
        </Link>

{/* NAVBAR OPTIONS */}
        <ul className="list-none hidden sm:flex flex-row and gap-10">
          { navLinks.map((link) => (
            <li 
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white text-[16px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))} 
        </ul>

{/* this div is for the mobile navigation bar */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
            src={toggle ? close : menu} 
            alt="menu" 
            className="w-[25px] h-[25px] object-contain cursor-pointer justify-end"
            // on clicking we want to change the state
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden': 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[120px] z-10 rounded-2xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
            { navLinks.map((link) => (
              <li 
                key={link.id}
                className={`${
                  active === link.title
                    ? "text-white"
                    : "text-secondary"
                } font-poppins font-medium cursor-pointer text-[14px]`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))} 
            </ul>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar