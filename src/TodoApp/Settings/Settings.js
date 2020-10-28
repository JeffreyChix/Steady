import React from 'react';
import './Settings.css';

const settings = props => {

    let dataLeft = <p className="badge badge-light">You have 0 items</p>;
    if ( props.dataLeft === 1 ) {
        dataLeft =  <p className="badge badge-light">You have 1 item </p>
    } else if ( props.dataLeft > 1 ) {
        dataLeft = <p className="badge badge-light">You have { props.dataLeft } items</p>
    }

    return (
        <div className="settings">
            <div>
                <code>App version: 1.1.0</code>
                <div className="st-box mb-2">
                    <label>Username: </label>
                    <input type="text" name="username" placeholder="Enter your name" className="form-control-sm input-block" onChange={props.changed} value={props.value} />
                </div>
                <div className="st-box mb-2">
                    <label>Email: </label>
                    <input type="email" name="email" placeholder="Enter your email" className="form-control-sm input-block" onChange={props.emailHandler} value={props.email} />
                </div>
                <div className="st-box overflow-hidden mb-2">
                    <label>Custom header background: </label>
                    <input type="file" name="bg" className="input-block" onChange={props.changeBg} />
                </div>
                <div className="st-box mb-2">
                    <label>Clear data: </label>
                    <div>
                        {dataLeft} <br />    
                        <button className="btn btn-sm btn-danger block" onClick={props.clearData}>Clear all data</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default settings;