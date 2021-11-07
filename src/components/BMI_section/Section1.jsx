import React from 'react';
import './section1.css'
import { CircularProgress } from '@mui/material/'

export default function Section1({ setToggleSection, bmi, loading1, loading2, idl }) {
    return (
        <div className="section1">
            <div className="L">
                <div className="Lcon">
                    {loading1 ? <CircularProgress color='primary' /> : <>
                        <h3>You Are At {bmi.health} </h3>
                        <h4>with BMI Value <span> {bmi.bmi}</span></h4>
                        <h5>by maintaining a healthy weight you lower your risk of serious healthy problems. Healthy BMI range [18.5 - 24.9]</h5>
                        <button onClick={() => { setToggleSection(true) }} >Get BMR</button>
                    </>}

                </div>
            </div>

            <div className="R">

                <div className="Rcon">

                    {loading2 ? <CircularProgress color='primary' /> : <>
                        <h4>ideal weights (kg)</h4>
                        <div className="idl">
                            <div className="round">
                                <span> {loading2 ? <CircularProgress color='primary' /> : idl.hamwi}</span>
                            </div>
                            <div className="wgts">
                                <span>Hamwi</span>
                            </div>

                        </div>

                        <div className="idl">
                            <div className="round">
                                <span>{loading2 ? <CircularProgress color='primary' /> : idl.devine}</span>
                            </div>
                            <div className="wgts">
                                <span>Devine</span>
                            </div>

                        </div>

                        <div className="idl">
                            <div className="round">
                                <span>{loading2 ? <CircularProgress color='primary' /> : idl.robinson}</span>
                            </div>
                            <div className="wgts">
                                <span>Robinson</span>
                            </div>

                        </div>

                        <div className="idl">
                            <div className="round">
                                <span>{loading2 ? <CircularProgress color='primary' /> : idl.miller}</span>
                            </div>
                            <div className="wgts">
                                <span >Miller</span>
                            </div>

                        </div>




                    </>}


                </div>
            </div>

        </div >
    )
}
