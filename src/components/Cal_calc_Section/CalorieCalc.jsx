import React from 'react'

import axios from 'axios'

export default function CalorieCalc() {
    const fetchData = async () => {
        var options = {
            method: 'GET',
            url: 'https://api.edamam.com/api/food-database/v2/parser',
            params: {
                app_id: 'f31fef05',
                app_key: ' a4574338171629cdd3068e3d5be69484',
                ingr: 'apple'
            },
        }
        await axios.request(options)
            .then(data => console.log(data.data))
            .catch(err => console.log(err))
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <h1>this is cal-calc section</h1>
            <button onClick={fetchData}>Fetch API</button>
        </div>
    )
}
