import React from 'react'
import './Nutrition.css'



export default function Nutrition() {

    // const fetch = async () => {
    //     const url = 'https://f3-health-api.herokuapp.com/nutrition/category/6146c540d65b61b05a4e3378'
    //     await axios.get(url)
    //         .then(data => console.log(data))
    //         .catch(err => console.log(err))
    // }
    return (

        <div className="Nutrition" >

            <div className="content">
                <div className="sec_head" >Nutrition</div>
                <div className="row">
                    <section className="left">

                        <div className="Bar">
                            <ul>
                                <li>Complex Carbs</li>
                                <li>High protien</li>
                                <li>Low fat</li>
                                <li className="list"> Vitamins <i className="arrow down"></i>

                                </li>
                            </ul>

                        </div>

                    </section>
                    <section className="right">
                        <div className="heading2">High Protien</div>
                        <div className="card">
                            <img src="https://www.ourochreway.com/wp-content/uploads/2018/04/6FED8232-758A-4AE4-AD51-5090D4B8D91B.jpeg" alt="no" style={{ width: "100%" }}></img>
                            <div className="container">
                                <p>Egg<button >get info</button></p>

                            </div>
                        </div>
                        {/* <button onClick={fetch}>click</button> */}
                    </section>
                </div>
            </div>
        </div>

    )
}
