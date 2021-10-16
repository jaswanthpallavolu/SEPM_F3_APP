import React from 'react'
import Countdown from './Countdown'
import { useHistory } from 'react-router-dom'

import './landing.css'
// images
import bmi_img from '../../assets/bmi.jpg'
import calc_img from '../../assets/calc.jpg'
import nut_img from '../../assets/nutrition.jpg'
import fit_img from '../../assets/fitness.jpg'

export default function Landing() {


    return (
        <div className="landing">
            <div className="content">
                <h1>Care yourself</h1>
                <Sections />
                <Countdown />
                <ul className="notes">
                    <li className="main">Note : </li>
                    <li><a href="https://mui.com/" target='_blank' rel="noreferrer">Material UI</a></li>
                    <li><a href="https://mui.com/components/modal/#main-content" target='_blank' rel="noreferrer">for "Modal"</a></li>
                </ul>

            </div>
        </div>
    )
}

export function Sections() {
    const history = useHistory()
    return (

        <div className="m_sections">
            <div className="card" onClick={() => { history.push('/home/bmi') }}>
                <img src={bmi_img} alt='a1' className="image" />
                <div className="title" data-title="BMI"
                    data-des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus deserunt distinctio dicta libero voluptatum veroLorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus deserunt distinctio dicta libero voluptatum vero">
                </div>
            </div>
            <div className="card" onClick={() => { history.push('/home/cal_calc') }} >
                <img src={calc_img} alt='a2' className="image" />
                <div className="title" data-title="calorie calculator"
                    data-des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus deserunt distinctio dicta libero voluptatum veroLorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus deserunt distinctio dicta libero voluptatum vero"> </div>
            </div>
            <div className="card" onClick={() => { history.push('/home/nutrition') }} >
                <img src={nut_img} alt='a3' className="image" />
                <div className="title" data-title="Nutrition"
                    data-des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus deserunt distinctio dicta libero voluptatum veroLorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus deserunt distinctio dicta libero voluptatum vero"> </div>
            </div>
            <div className="card" onClick={() => { history.push('/home/fitness') }} >
                <img src={fit_img} alt='a4' className="image" />
                <div className="title" data-title="Fitness" data-des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus deserunt distinctio dicta libero voluptatum veroLorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus deserunt distinctio dicta libero voluptatum vero"> </div>
            </div>

        </div>
    )
}