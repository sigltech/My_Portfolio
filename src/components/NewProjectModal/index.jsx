import React, { useState } from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './style.css'

export default function NewProjectModal() {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(true);

    return (
        <div className={modalOpen ? 'newproject-modal-container' : 'hidden'}>
            <span className='close-btn' onClick={() => setModalOpen(false)}> <span className='close-btn-word'>close</span> X</span>
            <div className="right-block">
                <div className='rblock-content'>
                    <div className='bouncing-arrows'>
                        <span id='bouncingarrow-left' className='bounce-animate'>
                            <AiOutlineArrowDown
                                fontSize={50}
                            />
                        </span>
                        <span className='bounce-animate'>
                            <AiOutlineArrowDown
                                fontSize={50}
                            />
                        </span>
                        <span id='bouncingarrow-right' className='bounce-animate'>
                            <AiOutlineArrowDown
                                fontSize={50}
                            />
                        </span>
                    </div>
                    <div className='modal-text'>
                        <h2>Check out my new Bug Tracker Project!</h2>
                        <h3>use the demo account details below:</h3>
                        <h3>username: demo1</h3>
                        <h3>Password: demo1</h3>
                        <button className='newproject-btn' onClick={() => navigate('/bugtracker-project')}>Check it out here</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
