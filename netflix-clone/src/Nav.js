import React, { useState, useEffect } from 'react';
import './Nav.css';


function Nav() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100 ) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img 
                className="nav__logo" src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" alt="netflix logo"/>
                <img 
                className="nav__avatar" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70b1333850498.56ba69ac32ae3.png" alt="" />
            </div>
        </div>
    )
}

export default Nav