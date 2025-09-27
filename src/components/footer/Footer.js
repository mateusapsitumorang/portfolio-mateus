import React from 'react'
import { Link} from 'react-scroll'
import Logo from '../../images/logo.png'
import CtaSection from '../ctaSection/ctaSection'


const SubmitHandler = (e) => {
    e.preventDefault()
}

const Footer = (props) => {
    return (
        <footer className="wpo-site-footer">
            <CtaSection/>
            <div className="upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Link className="site-logo" to="/"><img
                                        src={Logo} alt=""/></Link>
                                </div>
                                <p>Welcome to my portfolio website. Thank you for visiting! For more information, please feel free to contact me.</p>
                                <div className="social-icons">
                                    <ul>
                                        <li><a href="https://github.com/mateusapsitumorang" target="_blank" rel="noopener noreferrer"><i className="ti-github"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/mateus-appuwan-situmorang/" target="_blank" rel="noopener noreferrer"><i className="ti-linkedin"></i></a></li>
                                        <li><a href="https://www.instagram.com/mateussitumorang?igsh=MXV3aDNlZWs5b2U5Zg==" target="_blank" rel="noopener noreferrer"><i className="ti-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-2 col-md-6 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Navigation</h3>
                                </div>
                                <ul>
                                    <li><Link to="about" spy={true} smooth={true}  duration={500}>About me</Link></li>
                                    <li><Link to="contact" spy={true} smooth={true}  duration={500}>Contact me</Link></li>
                                    <li><Link to="portfolio" spy={true} smooth={true}  duration={500}>Projects</Link></li>
                                    <li><Link to="blog" spy={true} smooth={true}  duration={500}>Certificate</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shadow-shape">
                    <svg width="1319" height="1567" viewBox="0 0 1319 1567" fill="none">
                        <g filter="url(#filter0_f_39_3833)">
                            <circle cx="803" cy="803" r="303" fill="#59C378" fillOpacity="0.5" />
                        </g>
                        <defs>
                            <filter id="filter0_f_39_3833" x="0" y="0" width="1606" height="1606"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_3832" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className="lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="separator"></div>
                        <p className="copyright">Copyright &copy; 2025. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;