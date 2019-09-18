import React from "react";
import { IconArrow, ShareArrow } from "./common";

const NavLinks = () => {
  return (
    <div className="navlink">
      <div className="chip">
        <a href={"https://shop.hodinkee.com"}>
          <IconArrow /> H SHOP
        </a>
      </div>
      <div className="chip">
        <a className="share-icon" href={"https://www.instagram.com/HODINKEE"}>
          SHARE <ShareArrow />
        </a>
      </div>
    </div>
  );
};

export default NavLinks;
