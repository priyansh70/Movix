import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import { Link } from "react-router-dom";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Step into the enchanting world of movies on our website! Stay updated with the latest films, insightful reviews, and thrilling trailers from diverse genres. Join our passionate community for exclusive content and behind-the-scenes peeks. Let's share the joy of cinema together. Happy viewing!
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <Link to={`https://www.facebook.com/priyansh.patel.94651/`} target="_blank">
                            <FaFacebookF />
                        </Link>
                    </span>
                    <span className="icon">
                        <Link to={`https://www.instagram.com/_p_r_i_y_a_n_s_h/`} target="_blank">
                            <FaInstagram />
                        </Link>
                    </span>
                    <span className="icon">
                        <Link to={`https://twitter.com/Priyansh79`} target="_blank">
                            <FaTwitter />
                        </Link>
                    </span>
                    <span className="icon">
                        <Link to={`https://www.linkedin.com/in/-priyanshpatel/`} target="_blank">
                            <FaLinkedin />
                        </Link>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
