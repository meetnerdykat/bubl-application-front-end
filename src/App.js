import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import SchoolsList from './components/SchoolsList';
import PrivateRoute from './components/PrivateRoute';
import BublPage from './components/BublPage';
import Bubl from './components/Bubl';
import Home from './components/Home';
import { NavBar } from './StyledComponents';
import './App.scss';
import './scss/styles.scss';

function App() {
  return (
    <div className="App">
      <div>
        <NavBar>
          <NavLink to="/login" activeClassName="activeNav">
            Login
          </NavLink>
          <NavLink to="/register" activeClassName="activeNav">
            Register
          </NavLink>
          <NavLink to="/schools" activeClassName="activeNav">
            Schools
          </NavLink>
        </NavBar>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/schools" component={SchoolsList} />
        {/* <Route exact path="/schools" component={SchoolsList} /> */}
        <Route path="/register" component={Register} />
        <Route path="/schools/:id" component={BublPage} />
        <Route exact path="/bubl/:id" component={Bubl} />

        <Home />
      </div>
    </div>
  );
}

export default App;
