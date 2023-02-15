import React, { useEffect } from 'react';
import {
    AiFillFacebook,
    AiFillTwitterCircle,
    AiFillInstagram,
    AiFillApple,
} from 'react-icons/ai';
import { FaGooglePlay } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const DefaultFooter = () => {
    const current_path = useLocation();
    useEffect(() => {
        console.log(current_path.pathname.split('/'));
    }, [current_path]);
    return (
        <div
            className={`footer ${
                ['/login', '/register'].includes(current_path.pathname)
                    ? 'relative-footer'
                    : ''
            } ${
                current_path.pathname.split('/').includes('my-shopping-cart')
                    ? 'fixed-footer'
                    : ''
            }`}
        >
            <div>
                <div className="footer-content">
                    <h3
                        style={{
                            fontFamily: 'Trebuchet MS',
                            fontSize: '2em',
                        }}
                    >
                        <em>Sneaker ecommerce</em>
                    </h3>
                    <p>© 2023 Công ty TNHH adidas Việt Nam</p>
                    <div className="sub">
                        <div>
                            <b>Company</b>
                            <p>About</p>
                            <p>Blog</p>
                        </div>
                        <div>
                            <b>For Sneakers</b>
                            <p>Code of conduct</p>
                            <p>Community</p>
                        </div>
                        <div>
                            <b>For Brands</b>
                            <p>Brands</p>
                            <p>Business</p>
                        </div>
                        <div>
                            <b>For You</b>
                            <p>Privacy</p>
                            <p>Security</p>
                            <p>Terms</p>
                        </div>
                        <div>
                            <b>Social links</b>
                            <div>
                                <AiFillFacebook />
                                <AiFillTwitterCircle />
                                <AiFillInstagram />
                            </div>
                            <div>
                                <AiFillApple />
                                <FaGooglePlay />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DefaultFooter;
