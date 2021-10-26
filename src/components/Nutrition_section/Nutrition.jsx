import React from 'react'
import './Nutrition.css'
import axios from 'axios';


export default function Nutrition() {

    const fetch = async() =>{
        const url = 'https://f3-health-api.herokuapp.com/nutrition/category/6146c540d65b61b05a4e3378'
        await axios.get(url)
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }
    return (

        <div className="Nutrition" >
        <div className="Nut" >
        <div className="foot"></div><div className="nutrition"><h1 >Nutrition</h1></div>
         </div>   
        <div className="Bar">
        <ul>
            <li>Complex Carbs</li>
            <li>High protien</li>
            <li>Low fat</li>
            <li> Vitamins&nbsp; &nbsp; <i class="arrow down"></i><ul>
                
               <li> Vitamin A</li></ul></li>
            
                    
        </ul>

        </div>
        <div className="heading2">High Protien</div>  
        <div class="card">
            <img src="https://www.ourochreway.com/wp-content/uploads/2018/04/6FED8232-758A-4AE4-AD51-5090D4B8D91B.jpeg" alt="no" style={{width:"100%"}}></img>
            <div class="container">
                <p>Egg<button >get info</button></p> 
                 
             </div>
        </div>
        <button onClick={fetch}>click</button>
        </div>
        
    )
}
