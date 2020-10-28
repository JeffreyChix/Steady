import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadCry } from '@fortawesome/free-solid-svg-icons';

const emptyItems = () => {
    const emptyStyle = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }
    return (
        <div className="text-center">
            <h5 className="bold" style={emptyStyle}><FontAwesomeIcon size="2x" color="#6c757d" icon={faSadCry} className="mr-2" /> Nothing yet! </h5>
        </div>
    );
}

export default emptyItems;