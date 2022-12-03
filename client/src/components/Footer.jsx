import React from "react";
import Logo from "../img/linux-logo.png";

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt="linux" />
            <span>
                Made with <b>React.js</b>
            </span>
        </footer>
    );
};

export default Footer;