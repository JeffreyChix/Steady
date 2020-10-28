import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const newItem = props => {
    const newItemStyle = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }
    return (
        <form onSubmit={props.addItem}>
            <div className="new-item-box" style={newItemStyle}>
                <input type="text" onChange={props.changed} value={props.inputValue} className="form-control mr-2" placeholder="Enter new item" disabled={props.inputDisabled} />
                <button disabled={props.btnDisabled} className="btn btn-sm btn-success" onClick={props.addItem}><FontAwesomeIcon icon={faPlusCircle} /></button>
            </div>
        </form>
    );
}

export default newItem;