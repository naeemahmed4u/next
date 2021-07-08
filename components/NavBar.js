import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideBarData } from "./SideBarData";
import { IconContext } from "react-icons/lib";
import SubMenu from "./SubMenu";
import Sidebar from "./Sidebar";

export default function NavBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* <IconContext.Provider value={{color:"red"}} > */}

      <nav className="navbar navbar-expand-md navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand abs" >
            <FaIcons.FaBars onClick={showSidebar} />
          </a>
          <div className="navbar-collapse collapse" id="collapseNavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/login">
                  <a className="nav-link active">
                    Login
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/Signup">
                  <a className="nav-link active">
                    Sign Up
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" >
          <li className="navbar-toggle" >
            <Link href="#" className="menu-bars">
              <a >
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </a>
            </Link>
          </li>
          {SideBarData.map((item, index) => {
            return (
              <ul>
              <li className={item.cName}>
                <SubMenu item={item} key={index} />
              </li>
              </ul>
              //   <li key={index} className={item.cName}>
              //     <Link href={item.path}>
              //       <a href="#">
              //         {item.icon}
              //         <span>{item.title}</span>
              //       </a>
              //     </Link>

              //   </li>
            );
          })}
        </ul>
      </nav>
      {/* </IconContext.Provider> */}
    </>
  );
}
