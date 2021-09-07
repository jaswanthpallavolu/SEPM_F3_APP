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
                <li><Link to="/home/bmi">BMI section</Link></li>
                <li><Link to="/home/cal_calc">calorie section</Link></li>
                <li><Link to="/home/diet">Diet and nutrition section</Link></li>
                <li><Link to="/home/fitness">Fitness section</Link></li>
            </ul>
        </div>
    )
}
