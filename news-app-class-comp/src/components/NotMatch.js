import React, { Component } from 'react';

class NotMatch extends Component {
     
    render() { 
        return (
            <>
                <div className="alert alert-danger container w-50 mx-auto text-center my-5">
                    Error 404 ! Page Not Found
                </div>
            </>
        );
    }
}
 
export default NotMatch;