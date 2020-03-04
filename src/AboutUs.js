import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './AboutUs.css';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default class AboutUs extends Component {
    render() {
        return (
            <div id="about-us-container">
                <div className="aboutus">
                    <h1>The Groupies</h1>
                    <ul className="groupies-card">
                        <li className='groupies-au-li'>
                            <img className="member-photo" src="https://media-exp1.licdn.com/dms/image/C4E03AQFDbslqaS_lag/profile-displayphoto-shrink_200_200/0?e=1588809600&v=beta&t=LXKYIGGuym-k5aSQ7nu9GRNhaOgjHck31YLvQ3mhnaM" alt=""></img>
                            <h2>James Eserjose</h2>
                            <div className='our-links'>
                            <a href="https://www.linkedin.com/in/jamesreserjose/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
                            <a href="https://github.com/ezjim" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
                            </div>
                        </li>
                        <li className='groupies-au-li'>
                            <img className="member-photo"  src="https://media-exp1.licdn.com/dms/image/C5603AQHcT7B0DKuFSw/profile-displayphoto-shrink_200_200/0?e=1588809600&v=beta&t=1W4a_TKG8xcr7wFIcFelSYo4bVZzQ4VyclVHNq_d4po" alt=""></img>
                            <h2>Hannah Riley</h2>
                            <a href="https://www.linkedin.com/in/hannah-m-riley/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
            <a href="https://github.com/hannahriley33" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
                        </li>
                        <li className='groupies-au-li'>
                            <img className="member-photo" src="https://media-exp1.licdn.com/dms/image/C5603AQE47KMl_B6AWA/profile-displayphoto-shrink_200_200/0?e=1588809600&v=beta&t=VniIr7T6sgVA3i2zFLuJ8snQulwfRVf4YTzoeRFJrVs" alt=""></img>
                            <h2>Logan Scott</h2>
                            <a href="https://www.linkedin.com/in/logantscott/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
            <a href="https://github.com/logantscott" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
                        </li>
                        <li className='groupies-au-li'>
                            <img className="member-photo" src="https://media-exp1.licdn.com/dms/image/C5603AQGuTnFZSlQTDg/profile-displayphoto-shrink_200_200/0?e=1588809600&v=beta&t=wVw2waRURUwVMkWgV8GIph1_tOW8m23Fsoh7wOhgK8s" alt=""></img>
                            <h2>Fiona Ochs</h2>
                            <a href="https://www.linkedin.com/in/fionaochs/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
            <a href="https://github.com/fionaochs" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
                        </li>
                        <li className='groupies-au-li'>
                            <img className="member-photo" src="https://media-exp1.licdn.com/dms/image/C5603AQFvsrhqG1QcOw/profile-displayphoto-shrink_200_200/0?e=1588809600&v=beta&t=H3FhlHeke0mS-7Qcr2ldCbKwatOBHdqbWi7-xXOb-p8" alt=""></img>
                            <h2>Owen Prendergast</h2>
                            <a href="https://www.linkedin.com/in/owen-prendergast-a9a216159/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
            <a href="https://github.com/prendergasto" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
                        </li>
                    </ul>
                    <Link to="/concerts">Back to concerts</Link>

                </div>
            </div>
        )
    }
}
