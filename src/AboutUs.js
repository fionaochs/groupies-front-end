import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './AboutUs.css';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
// import Footer from './Footer';

export default class AboutUs extends Component {
    render() {
        return (
            <div id="about-us-container">
                <div>
                    <div className="aboutus">
                    <h1>The Groupies</h1>
                    <ul className="groupies-card">
                        <li className='groupies-au-li'>
                                <img src="/burningman.jpg" alt="card background"  className="card-img"></img>
                                <img className="member-photo" src="https://media-exp1.licdn.com/dms/image/C5603AQGuTnFZSlQTDg/profile-displayphoto-shrink_200_200/0?e=1588809600&v=beta&t=wVw2waRURUwVMkWgV8GIph1_tOW8m23Fsoh7wOhgK8s" alt=""></img>
                            <h2 className='our-names'>Fiona Ochs</h2>
                                <div className='our-links'>
                                    <a href="https://www.linkedin.com/in/fionaochs/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
                                    <a href="https://github.com/fionaochs" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
                                </div>
                        </li>
                        <li className='groupies-au-li'>
                                <img src="https://images.assetsdelivery.com/compings_v2/Hbak/Hbak1403/Hbak140300001.jpg" alt="card background" className="card-img"></img>
                                <img className="member-photo"  src="https://media-exp1.licdn.com/dms/image/C5603AQHcT7B0DKuFSw/profile-displayphoto-shrink_200_200/0?e=1588809600&v=beta&t=1W4a_TKG8xcr7wFIcFelSYo4bVZzQ4VyclVHNq_d4po" alt=""></img>
                            <h2 className='our-names'>Hannah Riley</h2>
                                <div className='our-links'>
                                    <a href="https://www.linkedin.com/in/hannah-m-riley/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
                                    <a href="https://github.com/hannahriley33" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
                                </div>
                        </li>
                        <li className='groupies-au-li'>
                                <img src="https://i.imgur.com/dSvrhlP.jpg" alt="card background" className="card-img"></img>
                                <img className="member-photo" src="https://media-exp1.licdn.com/dms/image/C5603AQE47KMl_B6AWA/profile-displayphoto-shrink_200_200/0?e=1588809600&v=beta&t=VniIr7T6sgVA3i2zFLuJ8snQulwfRVf4YTzoeRFJrVs" alt=""></img>
                            <h2 className='our-names'>Logan Scott</h2>
                                <div className='our-links'>
                                    <a href="https://www.linkedin.com/in/logantscott/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
                                    <a href="https://github.com/logantscott" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
                                </div>
                        </li>
                        <li className='groupies-au-li'>
                                <img src="https://ca-times.brightspotcdn.com/dims4/default/1f43886/2147483647/strip/true/crop/2048x1365+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fee%2Fd5%2Fcf587889aaefd9783a3a55b61904%2Fla-la-et-led-02-jpg-20140613" alt="card background" className="card-img"></img>
                                <img className="owen-member-photo" src="https://media-exp1.licdn.com/dms/image/C5603AQFvsrhqG1QcOw/profile-displayphoto-shrink_200_200/0?e=1588809600&v=beta&t=H3FhlHeke0mS-7Qcr2ldCbKwatOBHdqbWi7-xXOb-p8" alt=""></img>
                            <h2 className='our-names'>Owen Prendergast</h2>
                                <div className='our-links'>
                                    <a href="https://www.linkedin.com/in/owen-prendergast-a9a216159/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
                                    <a href="https://github.com/prendergasto" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
                                </div>
                        </li>
                        <li className='groupies-au-li'>
                                <img src="http://images.gofreedownload.net/3/music-party-backgrounds-with-people-silhouettes-vectors-80659.jpg" alt="card background" className="card-img"></img>
                                <img className="member-photo" src="https://media-exp1.licdn.com/dms/image/C4E03AQFDbslqaS_lag/profile-displayphoto-shrink_200_200/0?e=1588809600&v=beta&t=LXKYIGGuym-k5aSQ7nu9GRNhaOgjHck31YLvQ3mhnaM" alt=""></img>
                            <h2 className='our-names'>James Eserjose</h2>
                                <div className='our-links'>
                                    <a href="https://www.linkedin.com/in/jamesreserjose/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
                                    <a href="https://github.com/ezjim" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
                                </div>
                        </li>
                    </ul>
                    <Link id='concert-link' to="/concerts">Back to concerts</Link>
                    {/* <Footer /> */}
                    </div>
                </div>
            </div>
        )
    }
}


