import React, { useState } from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import { FaToggleOn, FaToggleOff, FaBuffer } from 'react-icons/fa'
import { useContext } from 'react';
import { AuthContext } from '../../ContextProvider/ContextProvider';
import { Image, Tooltip } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import toast from 'react-hot-toast';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)

    const [darkTheme, setDarkTheme] = useState(false);


    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Successsfully Sign Out')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg background text-white ">
                <div className="container">
                    <Link className="navbar-brand fs-2 fw-bold text-yellow font-ubuntu" to="/">
                        <FaBuffer></FaBuffer>
                        <span className="logo-color "> Better </span>
                        Learning</Link>
                    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbar-menu" aria-controls="navbar-menu" aria-expanded="false"
                        aria-label="Toggle navigation">
                    </button>
                    <div className="collapse navbar-collapse menu-font fs-6" id="navbar-menu">
                        <div className="navbar-nav ms-auto text-white">
                            <NavLink className="nav-link nav-hover" aria-current="page" to="/courses">Courses</NavLink>
                            <NavLink className="nav-link nav-hover" aria-current="page" to="/FAQ">FAQ</NavLink>
                            <NavLink className="nav-link nav-hover" to="/blog">Blog</NavLink>

                            {
                                user && user?.uid ?
                                    <p className='ms-2 d-flex'>
                                        <OverlayTrigger placement="bottom"
                                            overlay={<Tooltip id="button-tooltip-2">{user?.displayName}</Tooltip>}>
                                            <Image src={user?.photoURL} style={{ width: '35px', height: '35px' }} roundedCircle></Image>
                                        </OverlayTrigger>

                                        <span className='d-inline'>
                                            <NavLink className="nav-link nav-hover log-in"><span onClick={handleLogOut}>Sign Out</span></NavLink>

                                        </span>
                                    </p>
                                    :
                                    <>
                                        <NavLink to="/login" className="nav-link nav-hover log-in">
                                            Login
                                        </NavLink>
                                    </>
                            }

                            <NavLink className="nav-link">
                                {
                                    darkTheme ? <FaToggleOn onClick={() => setDarkTheme(!darkTheme)}></FaToggleOn> : <FaToggleOff onClick={() => setDarkTheme(!darkTheme)}></FaToggleOff>
                                }
                            </NavLink>

                        </div>
                    </div>
                </div>
            </nav>
        </div >
    );
};

export default Header;