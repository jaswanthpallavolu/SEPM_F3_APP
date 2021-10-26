import React, { useState } from 'react';
import { CircularProgress } from '@mui/material/'


import './Bmi.css';





import Main from './Main'

export default function Bmi() {

    const [bmi, setBmi] = useState({
        bmi: "",
        health: "",
    })

    const [idl, setIdl] = useState({
        hamwi: "",
        devine: "",
        robinson: "",
        miller: ""
    })

    const [loading1, setLoading1] = useState()
    const [loading2, setLoading2] = useState()

    return (

        <div className="bmi">

            <div className="hdng">
                <span></span>
                <h3>BMI</h3>
            </div>

            <Main setBmi={setBmi} setIdl={setIdl} setLoading1={setLoading1} setLoading2={setLoading2} />

            <div className="section1">
                <div className="L">



                    <div className="Lcon">
                        {loading1 ? <CircularProgress color='primary' /> : <>
                            <h3>You Are At <span> {bmi.health}</span></h3>
                            <h4>With BMI Value <span> {bmi.bmi}</span></h4>
                            <h5>by maintaining a healthy weight you lower your risk of serious healthy problems</h5>
                            <button>Get BMR</button>
                        </>
                        }

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

            </div>




        </div>






    )
}
