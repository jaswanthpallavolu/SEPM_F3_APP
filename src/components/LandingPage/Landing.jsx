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
            <h1>{title}</h1>
            <Countdown />
            <ul className="nav">
                <li><Link style={{ textDecoration: 'none', color: 'var(--dark)' }} to="/bmi">BMI section</Link></li>
                <li><Link style={{ textDecoration: 'none', color: 'var(--dark)' }} classname="link" to="/cal_calc">calorie section</Link></li>
                <li><Link style={{ textDecoration: 'none', color: 'var(--dark)' }} classname="link" to="/diet">nutrition section</Link></li>
                <li><Link style={{ textDecoration: 'none', color: 'var(--dark)' }} classname="link" to="/fitness">Fitness section</Link></li>
            </ul>
            <ul className="notes">
                <li className="main">Note : </li>
                <li><a href="https://mui.com/">Material UI</a></li>
                <li><a href="https://mui.com/components/modal/#main-content">for "Modal"</a></li>
            </ul>
        </div>
    )
}
