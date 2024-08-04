import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Dashboard from './Dashboard';
import User from './User';
import NotFound from './notFound';


export function RouteApp() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/user/1">User 1</Link>
                        </li>
                        <li>
                            <Link to="/user/2">User 2</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/dashboard"element={<Dashboard/>} />
                     
                    <Route path="/user/:userId" element={<User />} />
                    <Route path="/user/:userId" element={<User />} />
                    <Route path="*" element={<NotFound />} /> 
                </Routes>
            </div>
        </Router>
    );
}

