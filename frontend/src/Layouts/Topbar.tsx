import { THEME_MODE } from "@common/layoutConfig";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SimpleBar from "simplebar-react";

//import images
import avatar1 from "@assets/images/user/avatar-1.jpg";
import avatar2 from "@assets/images/user/avatar-2.jpg";
import avatar3 from "@assets/images/user/avatar-3.jpg";

import { deleteCookie, getCookie } from "cookies-next";


interface HeaderProps {
    themeMode?: string; // Define the type for themeMode
    changeThemeMode?: any; // Define the type for changeThemeMode function
    toogleSidebarHide?: () => void;
    toogleMobileSidebarHide?: () => void;
    handleOffcanvasToggle?: () => void;
}

const TopBar = ({ handleOffcanvasToggle, changeThemeMode, toogleSidebarHide, toogleMobileSidebarHide }: HeaderProps) => {
    const router = useRouter();

   
  
  // const [isLogin, setIsLogin] = useState(false);

  useEffect(()=> {
      const token = getCookie("monitoring-server-infolahta");
      if(!token){
        // console.log(token)
        router.push("/login");
      }
  });

    const dispatch = useDispatch<any>();
    // Function to handle theme mode change
    const handleThemeChange = (value: any) => {
        console.log(value)
        dispatch(changeThemeMode(value));
    };

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };
    const LogoutApps = () => {
    //    console.log('masuk kesini');

        deleteCookie('monitoring-server-infolahta');
        router.push("/login");
    
    //    console.log('masuk kesini');

    };
    return (
        <React.Fragment>
            <header className="pc-header">
                <div className="header-wrapper">
                    <div className="me-auto pc-mob-drp">
                        <ul className="list-unstyled">
                            <li className="pc-h-item pc-sidebar-collapse">
                                <Link href="#" className="pc-head-link ms-0" id="sidebar-hide" onClick={toogleSidebarHide}>
                                    <i className="ph-duotone ph-list"></i>
                                </Link>
                            </li>
                            <li className="pc-h-item pc-sidebar-popup">
                                <Link href="#" className="pc-head-link ms-0" id="mobile-collapse" onClick={toogleMobileSidebarHide}>
                                    <i className="ph-duotone ph-list"></i>
                                </Link>
                            </li>
                           
                            
                        </ul>
                    </div>

                    <div className="ms-auto">
                        <ul className="list-unstyled">
                            <Dropdown as="li" className="pc-h-item">
                                <Dropdown.Toggle as="a" className="pc-head-link arrow-none me-0" data-bs-toggle="dropdown" href="#" role="button"
                                    aria-haspopup="false" aria-expanded="false">
                                    <i className="ph-duotone ph-sun-dim"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-end pc-h-dropdown">
                                    <Dropdown.Item onClick={() => handleThemeChange(THEME_MODE.DARK)}>
                                        <i className="ph-duotone ph-moon"></i>
                                        <span>Dark</span>
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleThemeChange(THEME_MODE.LIGHT)}>
                                        <i className="ph-duotone ph-sun-dim"></i>
                                        <span>Light</span>
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleThemeChange(THEME_MODE.DEFAULT)}>
                                        <i className="ph-duotone ph-cpu"></i>
                                        <span>Default</span>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                       
                        
                            <Dropdown as="li" className="pc-h-item header-user-profile">
                                <Dropdown.Toggle className="pc-head-link arrow-none me-0" data-bs-toggle="dropdown" href="#"
                                    aria-haspopup="false" data-bs-auto-close="outside" aria-expanded="false" style={{ border: "none" }}>
                                    <Image src={avatar2} alt="user-image" width={40} className="user-avtar" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-user-profile dropdown-menu-end pc-h-dropdown">
                                    <div className="dropdown-header d-flex align-items-center justify-content-between">
                                        <h4 className="m-0">Profile</h4>
                                    </div>
                                    <div className="dropdown-body">
                                        <SimpleBar className="profile-notification-scroll position-relative" style={{ maxHeight: "calc(100vh - 225px)" }}>
                                            <ul className="list-group list-group-flush w-100">
                                                <li className="list-group-item">
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0">
                                                            <Image src={avatar2} alt="user-image" width={50} className="wid-50 rounded-circle" />
                                                        </div>
                                                        <div className="flex-grow-1 mx-3">
                                                            <h5 className="mb-0">Adminstrator</h5>
                                                            {/* <a className="link-primary" href="mailto:carson.darrin@company.io">carson.darrin@company.io</a> */}
                                                        </div>
                                                        <span className="badge bg-primary">Admin</span>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <Dropdown.Item>
                                                        <span className="d-flex align-items-center">
                                                            <i className="ph-duotone ph-key"></i>
                                                            <span>Change password</span>
                                                        </span>
                                                    </Dropdown.Item>
                                                   </li>
                                                <li className="list-group-item">
                                                    
                                                    <Dropdown.Item>
                                                        <span className="d-flex align-items-center">
                                                            <i className="ph-duotone ph-power"></i>
                                                            <span onClick={()=>{
                                                                LogoutApps();
                                                            }} >Logout</span>
                                                        </span>
                                                    </Dropdown.Item>
                                                </li>
                                            </ul>
                                        </SimpleBar>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </ul>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
};

export default TopBar;