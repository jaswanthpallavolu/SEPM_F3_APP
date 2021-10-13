import React from 'react'
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

                <ul className="notes">
                    <li className="main">Note : </li>
                    <li><a href="https://mui.com/">Material UI</a></li>
                    <li><a href="https://mui.com/components/modal/#main-content">for "Modal"</a></li>
                </ul>
            </div>
        </div>
    )
}
