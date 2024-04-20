import React from "react";
import styles from "./Header.css";
import Image from "next/image";
import Logo from "../../asset/logo.svg";
import { FaArrowRight } from "react-icons/fa";
import { Inter } from "next/font/google";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  return (
    <div className={"header_wrap"}>
      <div className={"header_logo"}>
        <Image src={Logo} alt="Logo" />
      </div>
      <div className={`header_section ${inter.className}`}>
        <div className="dropdown">
          <button className="dropbtn">
            Dropdown <MdOutlineKeyboardArrowDown />
          </button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <a href="#">Use Cases</a>
        <a href="#">About</a>
      </div>
      <div className={"header_button"}>
        <button>
          Request Demo <FaArrowRight />
        </button>
      </div>
      <GiHamburgerMenu className="hambarguer" />
    </div>
  );
};

export default Header;
