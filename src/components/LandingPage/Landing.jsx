import React from 'react'
import { Link } from 'react-router-dom';
import Countdown from './Countdown'
import { useOurContext } from '../../Context/Context'

import './landing.css'
export default function Landing() {
    const { landing } = useOurContext();
    const { title } = landing;
    return (
        <div className="landing">
            <div className="content">
                <h1>{title}</h1>
                <Countdown />
                <ul className="nav">
                    <li><Link style={{ textDecoration: 'none', color: 'var(--dark)' }} to="/home/bmi">BMI section</Link></li>
                    <li><Link style={{ textDecoration: 'none', color: 'var(--dark)' }} className="link" to="/home/cal_calc">calorie section</Link></li>
                    <li><Link style={{ textDecoration: 'none', color: 'var(--dark)' }} className="link" to="/home/diet">nutrition section</Link></li>
                    <li><Link style={{ textDecoration: 'none', color: 'var(--dark)' }} className="link" to="/home/fitness">Fitness section</Link></li>
                </ul>
                <ul className="notes">
                    <li className="main">Note : </li>
                    <li><a href="https://mui.com/">Material UI</a></li>
                    <li><a href="https://mui.com/components/modal/#main-content">for "Modal"</a></li>
                </ul>
            </div>
        </div>
    )
}
