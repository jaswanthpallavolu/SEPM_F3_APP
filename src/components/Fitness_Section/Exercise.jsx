import React from "react";
import './exercise_a.css';
import { useParams } from "react-router-dom"; //eslint-disable-line
import { useHistory } from 'react-router';
import { useQuery } from 'react-query'
import axios from 'axios'
import Carousel from "../../utils/carousel/Carousel";

export default function Exercise() {

    const getworkouts = () => {
        const url = "https://f3-health-api.herokuapp.com/fitness/categories/" + fid
        return axios.get(url)
    }

    const history_1 = useHistory();

    const { data } = useQuery("a_1", getworkouts)

    const { fid } = useParams();

    console.log(data?.data)

    return (
        <div className="exercise_main">
            <div className="container">

                <div className="heading">
                    <h1> Fitness</h1>
                </div>

                {data?.data.map(i => (
                    <div>
                        <div className="heading_1">
                            <button className="back" onClick={() => history_1.goBack()}></button>
                            <div className="heading_2">
                                <h1>{i.name}</h1>
                            </div>
                        </div>
                        <div className="vedios">
                            <Carousel list={i.items} />
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}
