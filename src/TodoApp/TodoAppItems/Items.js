import React from 'react';
import ReactTimeAgo from 'react-time-ago';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import './Items.css';

const items = props => {

    let checked = false, done = "";
    if (props.done) {
        checked = true;
        done = "done";
    }
    return (
        <li className={done}>             
            <div  className="icheck-primary d-inline ml-2">
                <input onChange={props.checkBox} type="checkbox" checked={checked} name={"todo_" + props.id} id={"todo_" + props.id} />
            </div>
            
           
            <span className="text">{props.text}</span>
            
            <small className="badge badge-danger" id="time-box"><FontAwesomeIcon icon={faClock} /> <ReactTimeAgo date={props.time} /> </small>
            
            <div className="tools">
                <FontAwesomeIcon icon={faEdit} color="#17a2b8" className="mr-2" onClick={props.edit} />
                <FontAwesomeIcon icon={faTrashAlt} onClick={props.delete} />
            </div>
        </li>
    );
}

export default items;