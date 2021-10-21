import './cal_cal.css';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function CalorieCalc() {
    const [query, setquery] = useState("");
    const [info, setInfo] = useState("");
    const [err, setErr] = useState(false);

    const fetchData = async (e) => {
        e.preventDefault()
        var options = {
            method: 'GET',
            url: 'https://api.edamam.com/api/food-database/v2/parser',
            params: {
                app_id: 'f31fef05',
                app_key: ' a4574338171629cdd3068e3d5be69484',
                ingr: query
            },
        }

        await axios.request(options)
            .then(result => { setErr(false); setInfo(result.data.parsed[0].food) })
            .catch(err => { setErr(true); setInfo(''); })

    }

    return (
        <div className="calc_main">
            <div className="Heading">

                <p>
                    <span id="bar">|</span>
                    Calorie Calculator</p>
            </div>

            <div className="calc">
                <input
                    type="text"
                    className="calc_input"
                    placeholder="search for food, fruit, vegetable.."
                    value={query}
                    onChange={(e) => setquery(e.target.value)}
                />
                <button className="calc_submit" onClick={fetchData}><span className='fa fa-lg fa-search'></span></button>
            </div>
            <div>
                {info ?
                    <div className="infoTile">

                        <img className="img" src={info.image} alt="" /><br />

                        <div className="values">
                            <h3 id="x">100g</h3>
                            <h2>{info.label}</h2>

                            <div className="calories">
                                <p> Calories  {info.nutrients.ENERC_KCAL} KCal</p>

                            </div>

                            <div className="item">
                                <p id="a">carbs   </p>
                                <p id="a">fats   </p>
                                <p id="a">fiber  </p>
                                <p id="a">Protein  </p>
                            </div>

                            <div className="item_value">
                                <p id="b">  {info.nutrients.CHOCDF}g </p>
                                <p id="b">  {info.nutrients.FAT}g </p>
                                <p id="b">  {info.nutrients.FIBTG}g </p>
                                <p id="b"> {info.nutrients.PROCNT}g </p>
                            </div>

                        </div>
                    </div>
                    : <p></p>}


                {err ?
                    <div className="error">
                        <h2>invalid Word!</h2>
                        <h2>Please check your spelling</h2>
                    </div>
                    : ''}
            </div>


        </div >



    );
}
export default CalorieCalc;
