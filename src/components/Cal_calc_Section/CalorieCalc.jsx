import React from 'react';
import axios from 'axios';
import './cal_cal.css';
import { useState } from 'react';

function CalorieCalc() {
    const [query, setquery] = useState("");
    const [info, setInfo] = useState([]); //eslint-disable-line
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
            .then(result => setInfo(result.data.parsed))
            .catch(err => console.log(err))

    }



    return (
        <div className="calc_main">
            <div className="calc">
                <h1 onClick={fetchData}>Calorie Calculator 🧮</h1>

                <div className="calc_searchform">
                    <input
                        type="text"
                        className="calc_input"
                        placeholder="Enter Ingredient"
                        value={query}
                        onChange={(e) => setquery(e.target.value)}
                    />
                    <button className="calc_submit" onClick={fetchData}>Search</button>
                </div>
            </div>

            <div>
            </div>
        </div>
    );
}
export default CalorieCalc;
