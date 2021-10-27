import React, { useState, useEffect } from 'react';
import { Modal, Fade, Box, Backdrop } from '@mui/material'

import Form from './Form'
import axios from 'axios';

const Main = ({ setBmi, setIdl, setLoading1, setLoading2 }) => {


    const [values, setValues] = useState({
        height: 180,
        weight: 60,
        age: 24,
        gender: 'male',
        al: 5,
        goal: 'Weight Loss'

    })

    const [open, setOpen] = useState(false);
    const handleModal = () => setOpen(!open);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'maxContent',
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 20,
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
    };


    function request1() {
        var options = {
            method: 'GET',
            url: 'https://fitness-calculator.p.rapidapi.com/bmi',
            params: { age: values.age, weight: values.weight, height: values.height },
            headers: {
                'x-rapidapi-host': 'fitness-calculator.p.rapidapi.com',
                'x-rapidapi-key': '310250d845msh85722434421dd94p1632fcjsn0582c000cbf0'
            }
        };

        axios.request(options).then(function (response) {




            setBmi({
                bmi: Number(response.data.data.bmi).toFixed(2),
                health: response.data.data.health,
            })

            setLoading1(false)







        }).catch(function (error) {
            console.error(error);
        });

    }

    function request2() {
        var axios = require("axios").default;

        var options = {
            method: 'GET',
            url: 'https://fitness-calculator.p.rapidapi.com/idealweight',
            params: { gender: values.gender, weight: values.weight, height: values.height },
            headers: {
                'x-rapidapi-host': 'fitness-calculator.p.rapidapi.com',
                'x-rapidapi-key': '310250d845msh85722434421dd94p1632fcjsn0582c000cbf0'
            }
        };

        axios.request(options).then(function (response) {











            setIdl({
                hamwi: Number(response.data.data.Hamwi).toFixed(),
                devine: Number(response.data.data.Devine).toFixed(),
                robinson: Number(response.data.data.Robinson).toFixed(),
                miller: Number(response.data.data.Miller).toFixed()
            })

            setLoading2(false)


        }).catch(function (error) {
            console.error(error);
        });
    }



    useEffect(() => {
        setLoading1(true)
        setLoading2(true)
        request1()
        request2()




    }, [values])//eslint-disable-line react-hooks/exhaustive-deps 




    return (
        <>

            <div className="section">

                <div className="itemt1">
                    <h3>Height</h3>
                    <h4>{values.height} <span>cm</span></h4>
                </div>

                <div className="itemt1">
                    <h3>Weight</h3>
                    <h4>{values.weight}<span>kg</span></h4>
                </div>

                <div className="itemt1">
                    <h3>Age</h3>
                    <h4>{values.age}</h4>
                </div>

                <div className="itemt1">
                    <h3>Gender</h3>
                    <h4>{values.gender}</h4>
                </div>

                <div className="itemt2">
                    <div className="item1">
                        <h3>Activty level</h3>
                        <div className="v">{values.al}</div>
                    </div>

                    <div className="item2">
                        <div className="h">Goal</div>
                        <div className="v">{values.goal}</div>
                    </div>

                </div>

                <div className="itemt3">
                    <div onClick={() => setOpen(true)}><i className="fas fa-pen"></i></div>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open}
                        onClose={handleModal}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                            <Box sx={style}>
                                <Form handleModal={handleModal} values={values} setValues={setValues} />

                            </Box>
                        </Fade>
                    </Modal>


                </div>

            </div>



        </>




    )
}

export default Main
