import './index.css'
import { FaMapPin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import { TbDeviceLandlinePhone } from "react-icons/tb";
import { IoCall } from "react-icons/io5";
import { TiSocialInstagram } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    return(
        <footer>
            <div className = "footer-container">
                <div className = "container1">
                    <div className = "area-container">
                    <div className = "location-container">
                        <img src = "https://tis.edu.in/_next/static/media/footer-logo-mobile.d02d83c6.png" alt = "footer logo" class = "school-img1" />
                        <img src = "https://tis.edu.in/_next/static/media/footer-logo.230b79ff.png"  alt= "footer logo" class = "school-img"/>
                    </div> 
                    <div className = "info-container">
                        <div className = "address-part">
                            <FaMapPin className = "icon1" size = {20}/> 
                            <p className = "area">Tulas International School Dhoolkot, P.O-Selaqui, Chakrata Road, Dehradun-248011(Uttarakhand)</p>
                        </div>
                        <div className = "address-part">
                            <TbDeviceLandlinePhone  className = "icon1" size = {20}/> 
                            <p className = "area">LandlineNo. 0135-2699444, 0135-2699666</p>
                        </div>
                         <div className = "address-part">
                            <IoCall  className = "icon1" size = {20}/> 
                            <p className = "area">Admission HelplineNo. (+91)9837983791,<br/>info@tis.edu.in</p>
                        </div>

                    </div>
                    </div>
                     <div className = "policy-container1">
                        <p className = "each-policy">FAQ</p>
                        <p className = "each-policy">Calendar</p>
                        <p className = "each-policy">Brochure</p>
                        <p className = "each-policy">Privacy Policy</p>
                        <p className = "each-policy">Terms & Conditions</p>
                        <p className = "each-policy">Disclaimer</p>
                        <p className = "each-policy">Mobile Phone Policy</p>
                        <p className = "each-policy">Child Welfare & Safety Policy</p>
                    </div>
                    <div className = "button-container1">
                     <button type = "button" className = "button1">Virtual Tour</button>
                     <br/>
                     <button type = "button" className = "button1">Apply Now</button>
                     <br/>
                     <button type = "button" className = "button1">Fedena Login</button>
                    </div>

                </div>
               
                <hr className = "line"/>
                <div className = "button-container">
                     <button type = "button" className = "button1">Virtual Tour</button>
                     <button type = "button" className = "button1">Apply Now</button>
                     <button type = "button" className = "button1">Fedena Login</button>
                </div>
                <div className = "policy-app-container">
                    <div className = "policy-container">
                        <p className = "each-policy">FAQ</p>
                        <p className = "each-policy">Calendar</p>
                        <p className = "each-policy">Brochure</p>
                        <p className = "each-policy">Privacy Policy</p>
                        <p className = "each-policy">Terms & Conditions</p>
                        <p className = "each-policy">Disclaimer</p>
                        <p className = "each-policy">Mobile Phone Policy</p>
                        <p className = "each-policy">Child Welfare & Safety Policy</p>
                    </div>
                    <div className = "copyright-container">

                    
                        <p className = "copy-right1">Copyright <FaRegCopyright className = "copy-icon" size ={15}/>
                                                2026 Tulas International School, Dehradun | All Rights Reserved 
                                                Designed and Managed By NetPuppys</p>
                        <div className = "app-container">
                        
                            <div className = "each-app">
                                <FaFacebook className = "app" size = {25} />
                                <p className = "app-name">
                                    Facebook
                                </p>
                            </div>
                            <div className = "each-app">
                                <TiSocialInstagram className = "app" size = {25}/>
                                <p className = "app-name">
                                    Instagram 
                                </p>
                            </div>
                            <div className = "each-app">
                                <FaXTwitter  className = "app" size = {25}/>
                                <p className = "app-name">
                                    X/Twitter
                                </p>
                            </div>
                            <div className = "each-app">
                                <FaYoutube  className = "app" size = {25}/>
                                <p className = "app-name">
                                    Youtube 
                                </p>
                            </div>
                            <div className = "each-app">
                                <FaLinkedin className = "app" size = {25}/>
                                <p className = "app-name">
                                    Linkedin 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className = "copy-right">Copyright <FaRegCopyright className = "copy-icon" size ={15}/>
                                             2026 Tulas International School, Dehradun | All Rights Reserved 
                                             Designed and Managed By NetPuppys</p>
            </div>
        </footer>
    )
}

export default Footer