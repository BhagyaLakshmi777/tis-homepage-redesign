import {Component} from 'react';
import './index.css'
import { IoCall } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TbDeviceLandlinePhone } from "react-icons/tb";

class Hero extends Component{
    render(){
        return(
            <div className = "main-container">
             <section className = "hero-container">
                  <h1 className = "main-heading">LET'S DO it <br/> With Tulas</h1>
                 
                  <div className = "img-container">
                        <img src = "https://tis.edu.in/_next/static/media/Image%202.0c5295c9.webp" alt = "volley ball" className = "volley-img"/>
                        <img src = "https://tis.edu.in/_next/static/media/polo.973ddbae.webp" alt = "dance" className = "volley-img1"/>
                    </div>
                  <div className = "img-container">
                     <img src = "https://tis.edu.in/_next/static/media/Image%203.21dc9e69.webp" alt = "cricket-img" className = "volley-img" />
                     <img src = "https://tis.edu.in/_next/static/media/karate.4020fba5.webp" alt ="karate-img" className = "volley-img1" />
                  </div>
                  <div className = "img-container">
                    <img src = "https://tis.edu.in/_next/static/media/swimming.6fc81e65.webp" alt = "tailor-img" className = "volley-img"/> 
                    <img src = "https://tis.edu.in/_next/static/media/Image%201.0a814859.webp" alt = "gun-shoot" className = "volley-img1"/>
                  </div>
                  <div className = "img-container">
                    <img src = "https://tis.edu.in/_next/static/media/pot.6f7c2ee3.webp" alt = "pottery-img" className = "volley-img"/>
                    <img src = "https://tis.edu.in/_next/static/media/dance.88843edb.webp" alt = "drawing-img" className = "volley-img1" />
                  </div>
                   <p className = "description">Tulas International School was established in 2012 under the aegis of Risabh Educational Trust to impart Education through seamless opportunities.</p>


             </section>
             <section className = "contact-container">
                
                   <div className ="student-info">
                       <div className = "admin-info">
                          <h1 className = "contact">Contact Us</h1>
                           <div className = "address">
                             <div className = "each-section">
                                <IoCall className ="icon"/>
                                <p className ="text">Admission Helpline No. +91-9837983791</p>
                             </div>
                              <div className = "each-section">
                                <FaEnvelope className= "icon" />
                                <p className ="text">info@tis.edu.in</p>
                                
                             </div>
                             <div className = "each-section">
                                <FaMapMarkerAlt className = "icon" />
                                <p className ="text">Tulas International School Dhoolkot, P.O-Selaqui, <br/> Chakrata Road, Dehradun-248011(Uttarkhand)</p>
                                
                             </div>
                              <div className = "each-section">
                                <TbDeviceLandlinePhone className = "icon" />
                                <p className ="text">Landline No. 0135-2699444, 0135-2699666</p> 
                                
                             </div>
                           </div>
                        </div>
                       <div className = "details">
                           <h1 className = "enquire">Enquire Now!</h1>
                           <div className = "input-container">
                                    <input type = "text" placeholder = "Enter your FullName..." className = "name-input"/>
                                    <input type = "email" placeholder = "Enter Email Id (Optional)" className = "name-input"/>
                                    <br/>
                                    <input type = "text" value = "+91" className = "name-input code"/>
                                    <input type = "text" placeholder = "Enter your Mobile No..." className = "name-input name-input2"/>
                                    <button type = "button" className = "otp-btn">Send OTP</button>
                                    <br/>
                                    <input type = "text" className = "name-input otp" placeholder = "Enter OTP" />
                                    <button type = "button" className = "otp-btn">Verify OTP</button>
                                    <br/>
                                    <select className = "name-input">
                                       <option value = "Class 4">Class 4</option>
                                       <option value = "Class 5">Class 5</option>
                                       <option value = "Class 6">Class 6</option>
                                       <option value = "Class 7">Class 7</option>
                                       <option value = "Class 8">Class 8</option>
                                       <option value = "Class 9">Class 9</option>
                                       <option value = "Class 10">Class 10</option>
                                    </select>
                                    <select className = "name-input">
                                       <option value = "Andhra Pradesh">Andhra Pradesh</option> 
                                       <option value = "Telangana">Telangana</option>
                                       <option value = "Bihar">Bihar</option>
                                       <option value = "Chandigarh">Chandigarh</option>
                                       <option value = "Delhi">Delhi</option> 

                                    </select>
                                    <div className = "checkbox-container">
                                       <input type = "checkbox" className = "checkbox"/>
                                       <p className = "checkbox-text">I Agree to receive information regarding my submitted application by signing up on Tulas Intern</p>
                                    </div>
                                    
                           </div>
                           <div className = "enquire-button-container">
                             <button type = "button" className = "enquire-btn">Enquire Now</button>
                           </div>
                       </div>
                   </div>
             </section>
             <section className = "reviews-container">
                   <h1 className = "review-heading">Google Reviews</h1>
                   <ul className = "review-list-container">
                      <li className = "review-list-item">
                           <img src= "https://tis.edu.in/_next/static/media/suresh.80d60e49.png" alt = "review person 1" className = "review-img"/>
                           
                           <h1 className = "person-name">Suresh Kumar</h1>
                           <p className = "relation">F/O Aditya Kumar</p>
                           <p className = "review-text">Tulas International School is doing excellent in all the fields especially 
                                                         giving a lot of exposure to children. Very nicely planned and orgaanized academic programme.
                                                         Good efforts by all children.
                           </p>
                      </li>
                       <li className = "review-list-item">
                           <img src= "https://tis.edu.in/_next/static/media/urja.03e3c3f3.png" alt = "review person 2" className = "review-img"/>
                           <h1 className = "person-name">Mrs Urja Bhayani</h1>
                           <p className = "relation">M/O Shikha & Samarth Bhayani</p>
                           <p className = "review-text">Right from the beginning, we have been in touch with Robin Sir, Swetha Ma'am. Both are very helpful and cooperative. Teachers are passionate and helpful towards academics.
                           </p>
                      </li>
                       <li className = "review-list-item">
                           <img src= "https://tis.edu.in/_next/static/media/amit.c7b6247e.png" alt = "review person 3" className = "review-img"/>
                           <h1 className = "person-name">Amit Agrawal</h1>
                           <p className = "relation">F/O Samruddhi Agrawal</p>
                           <p className = "review-text">Being a parent it's a big challenge to find a Boarding school that qualifies your Parameters of Security, Health, 
                                                         Hygiene, Academics, Non-Academics and self discipline being key features
                           </p>
                      </li>
                      <li className = "review-list-item">
                           <img src= "https://tis.edu.in/_next/static/media/ashu.9d447126.png" alt = "review person 4" className = "review-img"/>
                           <h1 className = "person-name">Ashu Arora</h1>
                           <p className = "relation">M/O Manisha Changrani</p>
                           <p className = "review-text">It has been a fantastic journey for my daughter in Tulas International School so far.
                                                        The boarding and infrastructure facility are excellent. We have seen significant impact in Manisha.
                           </p>
                      </li>
                       <li className = "review-list-item">
                           <img src= "https://tis.edu.in/_next/static/media/gulabdas.63ce81d8.png" alt = "review person 5" className = "review-img"/>
                           <h1 className = "person-name">Gulabdas Gupta</h1>
                           <p className = "relation">F/O Annika Gulabdas Gupta</p>
                           <p className = "review-text">we admitted our daughter, Annika Gulabdas Gupta in class VIII in Tulas.
                                                        She is very much satisfied with the facilities offered at tulas related to educatiion,
                                                        extra-curricular activities, recreation & hygiene.
                                                         
                           </p>
                      </li>
                        <li className = "review-list-item">
                           <img src= "https://tis.edu.in/_next/static/media/salendra.42b32ea1.png" alt = "review person 6" className = "review-img"/>
                           <h1 className = "person-name">Selendra K.Ajmera</h1>
                           <p className = "relation">F/O Aman Ajmera</p>
                           <p className = "review-text">Hi Tulas! In the beginning it was very tough for me to send my son to a boarding school
                                                        but the day i visited the campus the first thing which came to my mind was that this is the right place and right environment.
                                                         
                           </p>
                      </li>
                   </ul>
             </section>
             </div>
        )
    }
}

export default Hero;