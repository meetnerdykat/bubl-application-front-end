import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import SchoolsList from './components/SchoolsList';
import PrivateRoute from './components/PrivateRoute';
import BublPage from './components/BublPage';
import Bubl from './components/Bubl';
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import { NavBar } from './StyledComponents';
import './App.scss';
import './scss/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper/dist/popper.min.js';
import brand from './assets/PNG/INDIVIDUAL/brand.png';

function App() {
  return (
    <div className="App">
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
          <div className="container">
            <NavLink className="navLogo" to="/home">
              <img height="90" src={brand} alt="Brand" />
            </NavLink>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" />
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav ml-auto">
                <NavLink to="/about" activeClassName="activeNav">
                  About Bubl
                </NavLink>
                <NavLink to="/team" activeClassName="activeNav">
                  The Team
                </NavLink>
                <NavLink to="/schools" activeClassName="activeNav">
                  Schools
                </NavLink>
                <NavLink to="/login" activeClassName="activeNav">
                  Login
                </NavLink>
                <NavLink to="/register" activeClassName="activeNav">
                  Signup
                </NavLink>
              </div>
            </div>
          </div>
        </nav>

        {/* <NavBar>
          <NavLink to="/login" activeClassName="activeNav">
            Login
          </NavLink>
          <NavLink to="/register" activeClassName="activeNav">
            Register
          </NavLink>
          <NavLink to="/schools" activeClassName="activeNav">
            Schools
          </NavLink>
        </NavBar> */}
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/team" component={Team} />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/schools" component={SchoolsList} />
        {/* <Route exact path="/schools" component={SchoolsList} /> */}
        <Route path="/register" component={Register} />
        <Route path="/schools/:id" component={BublPage} />
        <Route exact path="/bubl/:id" component={Bubl} />

        {/* <Home /> */}
      </div>
    </div>
  );
}

export default App;
