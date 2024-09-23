import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    
    render() { 
        return (
            <>
                <header className="my-5 text-center container bg-dark text-light rounded border shadow w-50 mx-auto p-5">
                    <h1>Welome Back !</h1>
                    
                    <Link to='/egypt' className='btn btn-light mx-1 mt-2'>Egypet News</Link>
                    <Link to='/us' className='btn btn-info mx-1 mt-2'>US News</Link>
                </header>
            </>
        );
    }
}
 
export default Home;