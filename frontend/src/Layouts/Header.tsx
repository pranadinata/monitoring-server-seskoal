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
import logoSeskoal from "@assets/images/seskoal.png";
import Style from "styled-jsx/style";

const Header = ({ themeMode }: any) => {
  return (
    <>
    <Style jsx>{`
                .ph-duotone.ph-list:before{
                    opacity: 0.0
                };
            `}
    </Style>
    <React.Fragment>
      <nav className="pc-sidebar" id="pc-sidebar-hide">
        <div className="navbar-wrapper">
          <div className="m-header" style={{ 'height': '15vh' }}>
            <center>
            <Link href="/" className="b-brand text-primary">
              <Image src={logoSeskoal.src} width={150} height={100} alt="logo" className="logo-xl landing-logo" />
            </Link>
            </center>
            
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
    </>
    
  );
};

export default Header;
