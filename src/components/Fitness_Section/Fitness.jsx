import React from 'react';
import './fitness_a.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; //eslint-disable-line
import { useHistory } from 'react-router';

export default function Fitness() {

    let history = useHistory();

    return (

        <div className="fitness_main" >

            <div>
                <div className="container">
                    <div className="cc">
                        <div className="line"><h1><b>|</b></h1></div>
                        <div className="heading"><h1> Fitness</h1>
                        </div>
                    </div>

                    <div className="info_1">
                        <div className="heading_2">
                            <h1>Endurance</h1>
                        </div>
                        <div className="p1">
                            <p>Endurance, or aerobic exercise, increase your breathing and heart rate. By doing endurance exercises, you are working to keep your heart, lungs, and circulatory system healthy while improving your total fitness.</p>
                        </div>
                        <div className="button">
                            <p>
                                <button className="b1" onClick={() => { history.push("/home/exercise") }}>Cardio</button>
                                <button className="b2" onClick={() => { history.push("/home/exercise") }}>HIIT</button>
                                <button className="b3" onClick={() => { history.push("/home/exercise") }}>Body Weight</button>
                            </p>
                        </div>
                    </div>
                    <div className="info_2">
                        <div className="heading_3">
                            <h1>Flexibility</h1>
                        </div>
                        <div className="p2">
                            <p>
                                The purpose of flexibiity exercises is to stretch your muscles and help your body stay limber. This allows for more freedom of movement for other exercises and for everyday activities. Flexibility excercises also have the ability to improve your range of <b>more..</b>
                            </p>
                        </div>
                        <div className="button">
                            <p>
                                <button className="b4" onClick={() => { history.push("/home/exercise") }}>Yoga</button>
                                <button className="b5" onClick={() => { history.push("/home/exercise") }}>Streching exercises</button>
                                <button className="b6" onClick={() => { history.push("/home/exercise") }}>Meditation</button>
                            </p>
                        </div>
                    </div>
                    <div className="info_3">
                        <div className="heading_4">
                            <h1>Strength</h1>
                        </div>
                        <div className="p3">
                            <p>
                                If you want to build up your muscles, then strength exercises are right for you! Strength exercises are also called "strength training" or "resistance training". Even the slightest increase in strength make a hugr difference in your ability to carry out everyday <b>more..</b>
                            </p>
                        </div>
                        <div className="button">
                            <p>
                                <button className="b7" onClick={() => { history.push("/home/exercise") }}>Upper Body</button>
                                <button className="b8" onClick={() => { history.push("/home/exercise") }}>Lower Body</button>
                                <button className="b9" onClick={() => { history.push("/home/exercise") }}>Abdominal</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
