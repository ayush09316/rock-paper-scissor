import React, { useState } from "react";
import Modal from "./Modal";



const Footer = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <footer className="footer">
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" className="name" target="_blank" rel="noreferrer">
            Frontend Mentor
          </a>
          . Coded by <a href="/" className="name">Ayush Sharma</a>.
        </div>
        <button className="rules" onClick={toggle}>
          Rules
        </button>
      </footer>
      {modal ? <Modal toggle={toggle} /> : null}
    </>
  );
};

export default Footer;