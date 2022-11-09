import React from 'react'
import './index.css'
import loginPortalImg from '../../assets/images/bugtracker_loginportal.png'
import dashboardImg from '../../assets/images/bugtracker_dashboard.png'
import newUserImg from '../../assets/images/bugtracker-newuser.png'
import { BurgerMenu } from '../../components';

export default function BugTrackerPage({ menuOpen, setMenuOpen }) {
    return (
        <>
            <BurgerMenu
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
            />
            <div className='bugpage-container'>
                <h1 className='bugpage-title'>Bug Tracker</h1>
                <div className="bugcontent-container">
                    <div className="bugleft-container">
                        <div className="bugcontent">
                            <h2>Overview</h2>
                        </div>
                        <div className="bugcontent">
                            <p>This application is a simple bug tracking system. It allows admins to create bugs, assign them to developers, and allos all users to track their progress. It also allows developers to view bugs assigned to them and mark them as resolved.</p>
                        </div>
                        <div className="bugcontent bugfeatures_bugs">
                            <div>
                                <h2>Features</h2>
                                <ul className='features-list'>
                                    <li>Admins can create bugs and assign them to developers</li>
                                    <li>Developers can view bugs mark them as completed</li>
                                    <li>Admins can register new users with temporary passwords that can be given to new users and changed in the settings page</li>
                                </ul>
                            </div>
                        </div>
                        <div className="bugcontent bugfeatures_bugs">
                            <div className='technologies-container'>
                                <h2>Technologies Used</h2>
                                <ul className='technolgies-list'>
                                    <li>React</li>
                                    <li>Redux</li>
                                    <li>Node</li>
                                    <li>Express</li>
                                    <li>MongoDB</li>
                                    <li>Mongoose</li>
                                    <li>Tailwind CSS</li>
                                </ul>
                            </div>
                            <div className='links-container'>
                                <h2>Links</h2>
                                <ul className='links-list'>
                                    <li><a href='https://github.com/sigltech/developerBugTracker_client' target='_blank' rel="noreferrer">Client Repo</a></li>
                                    <li><a href='https://github.com/sigltech/-developerBugTracker_Server' target='_blank' rel="noreferrer">Server Repo</a></li>
                                    <li><a href='https://siglbug-tracker.netlify.app' target='_blank' rel="noreferrer">Live App</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="bugright-container">
                        <div className="bugcontent project-imgs">
                            <img
                                src={loginPortalImg}
                                alt="bug tracker login portal"
                                className='bugtracker-img loginportal-img'
                            />
                            <img
                                src={dashboardImg}
                                alt="bug tracker dashboard"
                                className='bugtracker-img dashboard-img'
                            />
                            <img
                                src={newUserImg}
                                alt="bug tracker new user page"
                                className='bugtracker-img newuser-img'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
