import React from "react";
import Link from "next/link";
import Image from "next/image";
//import images
import navCardBg from "../assets/images/layout/nav-card-bg.svg";
import logoDark from "../assets/images/logo-dark.svg";
import logoLight from "../assets/images/logo-white.svg";
import avatar1 from "../assets/images/user/avatar-1.jpg";
import SimpleBar from "simplebar-react";
import { menuItems } from "./MenuData";
import NestedMenu from "./NestedMenu";
import { Dropdown } from "react-bootstrap";

const Header = ({ themeMode }: any) => {
  return (
    <React.Fragment>
      <nav className="pc-sidebar" id="pc-sidebar-hide">
        <div className="navbar-wrapper">
          <div className="m-header">
            <Link href="/" className="b-brand text-primary">
              {themeMode === "dark" ?
                <Image src={logoLight} alt="logo" className="logo-lg landing-logo" />
                :
                <Image src={logoDark} alt="logo" className="logo-lg landing-logo" />
              }
     
            </Link>
          </div>
          {/* <div className="navbar-content"> */}
          <SimpleBar className="navbar-content" style={{ maxHeight: "100vh" }}>
            <ul className="pc-navbar" id="pc-navbar">
              {/* Sidebar  */}
              <NestedMenu menuItems={menuItems} />
            </ul>
           
          </SimpleBar>
          {/* </div> */}

        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
