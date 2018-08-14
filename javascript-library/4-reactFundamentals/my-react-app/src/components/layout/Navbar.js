import React from 'react';

import {
    Route, 
    Link
} from 'react-router-dom';

import {routes} from './_routes';

const Navbar = () => {
    return (
        <div>
        <div className="navbar">
            Navbar
            <ul className="navbar-list list-unstyled">
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/loginsignup">Login or Signup</Link></li>
                <li><Link to="/list">List</Link></li>
            </ul>
        </div>
        <div className="navbar-route">
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
            ))}
        </div>
        </div>
    );
}

export default Navbar;