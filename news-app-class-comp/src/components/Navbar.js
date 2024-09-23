import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {} 
    render() { 
        return (
            <nav className="navbar navbar-expand-lg py-3  
                bg-body-tertiary">
                <div className="container">
                    <Link className="navbar-brand fs-3" to="/">
                         <strong><i className='fa-brands fa-react'></i> React Project</strong>   
                    </Link>
                    <button className="navbar-toggler" 
                    type="button" data-bs-toggle="collapse"
                     data-bs-target="#navbarNavAltMarkup"
                      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link fs-5 mx-1" to="/">Home</Link>
                            <Link className="nav-link fs-5 mx-1" to="/egypt">EgyptNews</Link>
                            <Link className="nav-link fs-5 mx-1" to="/us">UsNews</Link>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;