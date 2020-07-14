import React, {Component} from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar'
import TopScreen from './components/TopScreen/TopScreen'
import Login from './components/Login/Login'
import MakeReservations from './components/MakeReservations/MakeReservations'
import Reservations from './components/Reservations/Reservations'
import NoMatch from './components/NoMatch'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <NavigationBar />
            <div>
              <Switch>
                <Route exact path="/" component={TopScreen} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/makereservations" component={MakeReservations} />
                <Route exact path="/reservations" component={Reservations} />
                {/* <Route exact path="/reservationDetail" component={ReservationDetail} /> */}
                <Route component={NoMatch} />
              </Switch>
              {/* <Footer /> */}
            </div>
          </Router>
      </div>
    );
  }
}
export default App;
