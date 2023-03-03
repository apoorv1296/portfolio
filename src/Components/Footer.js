import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="Main_Footer">
        <div className="first_footer_block">
          <span className="block_top"> Phone : </span>
          <span className="block_bottom">+917509591293</span>
        </div>

        <div className="footer_block">
          <span className="block_top"> Email: </span>
          <span className="block_bottom">apoorv1296@gmail.com</span>
        </div>

        <div className="footer_block">
          <span className="block_top"> Follow Me: </span>
          <span className="block_bottom">in</span>
        </div>

        <div className="last_footer_block">
          <span className="block_top"> &copy; Prepared by Apoorv...</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
