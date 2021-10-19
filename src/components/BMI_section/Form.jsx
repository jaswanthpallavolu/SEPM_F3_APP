import React, { useRef, useState, useEffect } from 'react'
import { Button } from '@mui/material'
import './Form.css';



const Form = ({ handleModal, setValues, values }) => {



    const [age, setAge] = useState(values.age)
    const [weight, setWeight] = useState(values.weight)
    const [height, setHeight] = useState(values.height)
    const [al, setAl] = useState(values.al)
    const [goal, setGoal] = useState(values.goal)

    const Gen = useRef(values.gender)


    function handleForm() {
        setValues({
            height: height,
            weight: weight,
            age: age,
            gender: Gen.current,
            al: al,
            goal: goal

        })

        handleModal()
    }



    function forGen() {
        if (Gen.current === 'male') {

            document.getElementById('female').setAttribute("style", "background-color: white;");
            document.getElementById('male').setAttribute("style", "background-color: rgba(235, 72, 120, 0.507);");
        }

        else {
            document.getElementById('male').setAttribute("style", "background-color: white;");
            document.getElementById('female').setAttribute("style", "background-color: rgba(235, 72, 120, 0.507);");
        }

    }


    function handle(e) {



        if (e.target.id === 'Male') {
            if (Gen.current !== 'male') {
                Gen.current = 'male'
                document.getElementById('female').style['background-color'] = "white"
                document.getElementById('male').style['background-color'] = 'rgba(235, 72, 120, 0.507)'
            }

        }

        else {
            if (Gen.current !== 'female') {
                Gen.current = 'female'
                document.getElementById('male').style['background-color'] = "white"
                document.getElementById('female').style['background-color'] = 'rgba(235, 72, 120, 0.507)'

            }
        }



    }

    function decrement1() {
        if (age >= 2) {
            setAge(age - 1)
        }

    }

    function increment1() {
        setAge(parseInt(age) + 1)

    }

    function decrement2() {

        if (weight >= 2) {
            setWeight(weight - 2)
        }

    }

    function increment2() {
        setWeight(parseInt(weight) + 1)
    }

    function decrement3() {
        if (height >= 2) {
            setHeight(height - 1)
        }

    }

    function increment3() {
        setHeight(parseInt(height) + 1)
    }

    useEffect(() => {
        forGen()


    }, [])

    return (
        <>

            <div className="style2">
                <h3>First, let us know you</h3>
                <div className="close" onClick={handleModal}></div>

            </div>

            <div className="grid">
                <div className="grid11">
                    <h4>Gender</h4>
                </div>

                <div className="grid12" onClick={(e) => { handle(e) }}>
                    <div className="male" id="male" >
                        <div className="img" id="Male"></div>

                    </div>
                    <div className="female" id="female" >
                        <div className="img" id="Female" ></div>
                    </div>
                </div>
                <div className="gridm1">
                    <h4>:</h4>
                </div>

                <div className="grid21">
                    <h4>Age</h4>
                </div>
                <div className="grid22">
                    <span onClick={decrement1}>-</span>
                    <input type="number" onChange={(e) => { setAge(e.target.value) }} id="Input1" value={age} min="1"></input>
                    <span onClick={increment1} >+</span>
                </div>
                <div className="gridm2">
                    <h4>:</h4>

                </div>

                <div className="grid31">
                    <h4>Weight (Kg)</h4>
                </div>
                <div className="grid32">
                    <span onClick={decrement2} >-</span>
                    <input type="number" id="Input2" onChange={(e) => { setWeight(e.target.value) }} value={weight} min='1'></input>
                    <span onClick={increment2} >+</span>

                </div>
                <div className="gridm3">
                    <h4>:</h4>
                </div>

                <div className="grid41">
                    <h4>Height (cm)</h4>
                </div>
                <div className="grid42">
                    <span onClick={decrement3}>-</span>
                    <input type="number" id="Input3" onChange={(e) => { setHeight(e.target.value) }} value={height} min='1'></input>
                    <span onClick={increment3}>+</span>
                </div>
                <div className="gridm4">
                    <h4>:</h4>
                </div>

                <div className="grid51">
                    <h4>Activity Level</h4>
                    <select onChange={(e) => { setAl(e.target.value) }} value={al}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className="grid52">
                    <h4>Goal</h4>
                    <select onChange={(e) => { setGoal(e.target.value) }} value={goal}>
                        <option>WeightLoss</option>
                        <option>WeightGain</option>
                        <option>Other</option>

                    </select>

                </div>






            </div>

            <div className="style3">
                <Button variant="outlined" size='small' onClick={handleForm} disabled={(!(age)) || (!(height)) || (!(weight))}>save</Button>
            </div>

        </>

    )
}



export default Form