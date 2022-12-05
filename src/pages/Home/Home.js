import React, { useEffect, useState } from "react";

import { HomeStyle } from "./Home.style";

export default function Home(props) {
  const { variantId, guestName } = props;

  const [guestDetails, setGuestDetails] = useState("");

  // const formatGuestName = String(guestName).replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())

  useEffect(() => {
    switch (variantId) {
      case "1":
        setGuestDetails(`Mr. & Mrs. ${String(guestName).replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())} with Family`);
        break;

      case "2":
        setGuestDetails(`Mr. & Mrs. ${String(guestName).replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}`);
        break;

        case "3":
          setGuestDetails(`Mr. ${String(guestName).replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}`);
          break;
        
        case "4":
          setGuestDetails(`Miss ${String(guestName).replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}`);
          break;

        default:
          setGuestDetails(`Mr. & Mrs. ${String(guestName).replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())} with Family`);
          break;
    }
  }, [variantId, guestName]);

  return (
    <HomeStyle>
      <div className="front-card-wrapper">
        <span className="guest-name">{guestDetails}</span>
        <img className="front-card" src="/images/front-page.png" alt="front-page" />
      </div>
    </HomeStyle>
  );
}
