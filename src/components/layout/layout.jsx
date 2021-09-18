import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Landing from '../LandingPage/Landing'
import Bmi from '../BMI_section/Bmi'
import CalorieCalc from '../Cal_calc_Section/CalorieCalc'
import Nutrition from '../Nutrition_section/Nutrition'
import Fitness from '../Fitness_Section/Fitness'

export default function Layout() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route path='/bmi' component={Bmi} />
                    <Route path='/cal_calc' component={CalorieCalc} />
                    <Route path='/diet' component={Nutrition} />
                    <Route path='/fitness' component={Fitness} />
                </Switch>
            </div>
        </>
    )
}
