import React from 'react';
import './Footer.scss';
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className='lille-footer'>
    <footer>
    <footer>
        <div className="main-footer">
          <div className="C&R">
            <p>&copy; 2021 Hotel Overlook. Alle rettigheder forbeholdt.</p>
          </div>
          <div className="Medias">
            <FaFacebookSquare size={"2em"} />
            <FaTwitterSquare size={"2em"} />
          </div>
          <div className="footerNav">
            <ul>
              <li>
                {" "}
                <Link to="/">Forside</Link>{" "}
              </li>
              <li>
                <a href="/destinationer">Hoteller & Destinationer</a>
              </li>
              <li>
                <a href="/vaerelser">Værelser</a>
              </li>
              <li>
                <a href="/reservation">Reservation</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </footer>
    </div>
  );
}

export default Footer;