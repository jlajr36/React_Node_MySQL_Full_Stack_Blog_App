import React from "react";
import {Link} from 'react-router-dom';
import Logo from "../img/linux_PNG42.png";

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='logo'>
                    <img src={Logo} alt="linux" />
                </div>
                <div className='links'>
                    <Link className='link' to="/?cat=filesystem">
                        <h6>File System</h6>
                    </Link>
                    <Link className='link' to="/?cat=hardware">
                        <h6>Hardware</h6>
                    </Link>
                    <Link className='link' to="/?cat=cmds">
                        <h6>Commands</h6>
                    </Link>
                    <Link className='link' to="/?cat=software">
                        <h6>Software</h6>
                    </Link>
                    <Link className='link' to="/?cat=server">
                        <h6>Server</h6>
                    </Link>
                    <Link className='link' to="/?cat=security">
                        <h6>Security</h6>
                    </Link>
                    <span>John</span>
                    <span>Logout</span>
                    <span className="write">
                        <Link className="link" to="/write">
                            Write
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;