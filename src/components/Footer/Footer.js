import React from 'react';

import './footer.css';

const Footer = () => {
    return (
        <div className="footer" >
            <div className="content" >
                <div className="socials" id="content-item">
                    <h2>Follow us</h2>
                    <p><a href="face.com">Facebook</a></p>
                    <p><a href="face.com">Instagram</a></p>
                    <p><a href="face.com">Youtube</a></p>
                </div>
                <div className="general" id="content-item">
                    <h2>General</h2>

                    <p><a href="face.com">Blog</a></p>
                    <p><a href="face.com">Careers</a></p>
                    <p><a href="face.com">Contact</a></p>

                </div>
                <div className="general" id="content-item">
                    <h2>General</h2>
                    <p><a href="face.com">Blog</a></p>
                    <p><a href="face.com">Careers</a></p>
                    <p><a href="face.com">Invest</a></p>

                </div>
            </div>
            <div className="copyright">
                <p>&copy; Istechlal. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;
