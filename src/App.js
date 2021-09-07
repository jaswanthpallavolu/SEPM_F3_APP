
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Landing from './components/LandingPage/Landing'
import Bmi from './components/BMI_section/Bmi'
import CalorieCalc from './components/Cal_calc_Section/CalorieCalc';
import DietAndNutri from './components/Diet_Section/DietAndNutri';
import Fitness from './components/Fitness_Section/Fitness';

function App() {
  return (
    <Router >
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landing} />

          <Route path='/home/bmi' component={Bmi} />
          <Route path='/home/cal_calc' component={CalorieCalc} />
          <Route path='/home/diet' component={DietAndNutri} />
          <Route path='/home/fitness' component={Fitness} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
