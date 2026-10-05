import './index.css';
import { IoMenu } from "react-icons/io5";
import {Component} from 'react';
import { IoMdClose } from "react-icons/io";

class Header extends Component{
    state = {isMenuOpen: false}
    onClickMenu = () => {
        this.setState(prevState => ({isMenuOpen: !prevState.isMenuOpen}))
    }
    render(){
        const {isMenuOpen} = this.state;
        return (
        <header className = 'nav-container'>

            <div className = "navbar">
               <div className = 'logo-container'>
                    <img src = "https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png" alt = "TIS School Logo" className = "logo" />

                </div>
                <nav className = "nav-links">

                    <div className = "nav-item dropdown">ABOUT TIS
                        <div className= "dropdown-menu">
                            <p className = "list-item">Our History</p>
                            <p className = "list-item">Why Choose Us?</p>
                            <p className = "list-item">Vision & Mission</p>
                            <p className = "list-item">Awards & Achievements</p>
                            <p className = "list-item">Headmaster's Profile</p>
                            <p className = "list-item">Our Management</p>
                            <p className = "list-item">Virtual Tour</p>
                        </div>
                    </div>
                    <div className = "nav-item  dropdown" >ACADEMICS
                         <div className= "dropdown-menu">
                            <p className = "list-item">Pedagogy</p>
                            <p className = "list-item">Curriculum</p>
                            <p className = "list-item">Streams Offered</p>
                            <p className = "list-item">Publications</p>
                            <p className = "list-item">Digital Workstations</p>
                            <p className = "list-item">Internation Tie-Ups</p>
                            <p className = "list-item">Awadh Tinkering Lab</p>
                        </div>
                    </div>
                    <div className = "nav-item  dropdown" >BOARDING LIFE
                        <div className= "dropdown-menu">
                            <p className = "list-item">Dormitories</p>
                            <p className = "list-item">Meal Plans</p>
                            <p className = "list-item">Activities</p>
                        </div>
                    </div>
                    <div className = "nav-item  dropdown" >BEYOND ACADEMICS
                        <div className= "dropdown-menu">
                            <p className = "list-item">Clubs & Societies</p>
                            <p className = "list-item">Sports</p>
                            <p className = "list-item">Beyond Curriculum</p>
                            <p className = "list-item">Mentor & Mentee System</p>
                            <p className = "list-item">Career Counselling</p>
                            <p className = "list-item">Raasta Students Counselling</p>
                        </div>
                    </div>
                    <div className = "nav-item  dropdown" >EVENTS
                        <div className= "dropdown-menu">
                            <p className = "list-item">Sports Day</p>
                            <p className = "list-item">38 National Games</p>
                            <p className = "list-item">Founders Day</p>
                            <p className = "list-item">Confluence</p>
                            <p className = "list-item">Prominent Personalities</p>
                            <p className = "list-item">Sports Achievements</p> 

                        </div>
                    </div>
                    <div className = "nav-item  dropdown" >ADMISSIONS
                        <div className= "dropdown-menu">
                            <p className = "list-item">Admission Procedure</p>
                            <p className = "list-item">Pay Fee Online</p>
                            <p className = "list-item">Fee Structure</p>
                            <p className = "list-item">Scholarship Program</p>
                            <p className = "list-item">Withdrawal Policy</p>
                        </div>
                    </div>
                   
                   
                    <div className = "nav-item dropdown">MANDATORY DISCLOSURE
                        <div className= "dropdown-menu">
                            <p className = "list-item">Mandatory Disclosure</p>
                           
                        </div>
                    </div>
                    <div className = "nav-item dropdown">ALUMNI NETWORK
                        <div className= "dropdown-menu">
                            <p className = "list-item">Alumni Network</p>
                           
                        </div>
                    </div>
                    <div className = "nav-item dropdown">QUICK LINKS
                        <div className= "dropdown-menu">
                            <p className = "list-item">Blogs</p>
                            <p className = "list-item">Contact Us</p>
                            <p className = "list-item">Newsletter</p>
                            <p className = "list-item">Careers</p>
                            <p className = "list-item">Transfer Certificate</p>
                            <p className = "list-item">Parent Testimonials</p>
                        </div>
                    </div>
                   
                </nav>
                
                    <button className = 'menu-button' onClick = {this.onClickMenu}>
                        <span className = "top-menu">{isMenuOpen ? 'Close' : 'Menu'}</span>
                        {isMenuOpen ? <IoMdClose className = "menu-icon" /> : <IoMenu className = "menu-icon" />}
                        <span className = "bottom-menu">{isMenuOpen ? 'Close' : 'Menu'}</span>
                    </button>
        

               
            </div>

        </header>
    )

    }
  
}

export default Header 