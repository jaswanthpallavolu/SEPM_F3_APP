import React from 'react';
import './fitness_a.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; //eslint-disable-line
import { useHistory } from 'react-router';
import { useQuery } from 'react-query'
import axios from 'axios'

export default function Fitness() {

    const getCategories = () => {
        const url = 'https://f3-health-api.herokuapp.com/fitness/categories/'

        return axios.get(url)
    }
    const { data } = useQuery("query", getCategories)

    let history = useHistory();

    console.log(data?.data)

    return (

        <div className="fitness_main" >
            <div className="container">
                <div className="cc">
                    <div className="heading"><h1> Fitness</h1>
                    </div>
                </div>
                <div className="info">
                    {data?.data.map(item => (
                        <div className="info_1" key={item.id}>
                            <div className="heading_2">
                                <h1>{item.name}</h1>
                            </div>
                            <div className="p1">
                                <p>{item.description}</p>
                            </div>
                            <div className="button">
                                {item.sections.map(i => (
                                    <button className="b1" key={i.id} onClick={() => history.push("/home/fitness/" + i.id)}>{i.name}</button>

                                ))}

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}