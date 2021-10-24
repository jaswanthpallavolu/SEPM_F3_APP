import React, { useState } from 'react';


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

    return (

        <div className="bmi">

            <div className="hdng">
                <span></span>
                <h3>BMI</h3>
            </div>

            <Main setBmi={setBmi} setIdl={setIdl} />

            <div className="section1">
                <div className="L">



                    <div className="Lcon">
                        <h3>You Are At <span> {bmi.health} </span></h3>
                        <h4>With BMI Value <span> {bmi.bmi} </span></h4>
                        <h5>by maintaining a healthy weight you lower your risk of serious healthy problems</h5>
                        <button>Get BMR</button>

                    </div>
                </div>

                <div className="R">

                    <div className="Rcon">
                        <h4>ideal weights (kg)</h4>
                        <div className="idl">
                            <div className="round">
                                <span>{idl.hamwi}</span>
                            </div>
                            <div className="wgts">
                                <span>Hamwi</span>
                            </div>

                        </div>

                        <div className="idl">
                            <div className="round">
                                <span>{idl.devine}</span>
                            </div>
                            <div className="wgts">
                                <span>Devine</span>
                            </div>

                        </div>

                        <div className="idl">
                            <div className="round">
                                <span>{idl.robinson}</span>
                            </div>
                            <div className="wgts">
                                <span>Robinson</span>
                            </div>

                        </div>

                        <div className="idl">
                            <div className="round">
                                <span>{idl.miller}</span>
                            </div>
                            <div className="wgts">
                                <span >Miller</span>
                            </div>

                        </div>




                    </div>
                </div>

            </div>




        </div>






    )
}
