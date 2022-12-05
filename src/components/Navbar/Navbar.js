import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { NavbarStyle } from "./Navbar.style";

export default function Navbar(props) {
  const [tabsList, setTabsList] = useState([]);
  const pathname = useLocation().pathname.replace("/", "").split("/");

  const variantid = pathname[0];
  const functionType = pathname[1];
  const guestName = pathname[2];

  const homeUrl = `/${variantid}/${functionType}/${guestName}`;
  const mehendiUrl = `/${variantid}/${functionType}/${guestName}/mehendi`;
  const baratUrl = `/${variantid}/${functionType}/${guestName}/barat`;
  const walimaUrl = `/${variantid}/${functionType}/${guestName}/walima`;

  useEffect(() => {
    switch (functionType) {
      case "walima":
        setTabsList([
          {
            name: "Walima",
            url: walimaUrl,
          },
        ]);
        break;

      case "mehendi_walima":
        setTabsList([
          {
            name: "Mehendi",
            url: mehendiUrl,
          },
          {
            name: "Walima",
            url: walimaUrl,
          },
        ]);
        break;

      case "mehendi_barat_walima":
        setTabsList([
          {
            name: "Mehendi",
            url: mehendiUrl,
          },
          {
            name: "Barat",
            url: baratUrl,
          },
          {
            name: "Walima",
            url: walimaUrl,
          },
        ]);
        break;

        default:
          setTabsList([
            {
              name: "Mehendi",
              url: mehendiUrl,
            },
            {
              name: "Barat",
              url: baratUrl,
            },
            {
              name: "Walima",
              url: walimaUrl,
            },
          ]);
          break;
    }
  }, [homeUrl, mehendiUrl, baratUrl, walimaUrl, functionType]);

  const handleNavClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <NavbarStyle>
      <div className="tabs-wrapper">
        <NavLink onClick={handleNavClick} exact to={homeUrl} className="tab">
          Home
        </NavLink>

        {tabsList.map((data, index) => {
          const { name, url } = data;

          return (
            <NavLink
              key={index}
              onClick={handleNavClick}
              to={url}
              className="tab"
            >
              {name}
            </NavLink>
          );
        })}

        {/* <NavLink onClick={handleNavClick} to={baratUrl} className="tab">
          Barat
        </NavLink>
        <NavLink onClick={handleNavClick} to={walimaUrl} className="tab">
          Walima
        </NavLink> */}
      </div>
    </NavbarStyle>
  );
}
