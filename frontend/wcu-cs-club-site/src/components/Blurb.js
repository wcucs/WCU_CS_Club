import React from 'react'
import './Blurb.css'

function Blurb(props) {
    return (
        <div className="Blurb">
            <div className="Blurb-inner">
                <button className="Close-btn" onClick={() => props.onClose()}>X</button>
                <img src={props.image} alt={props.name}/>
                <p>{props.bio}</p>
            </div>
        </div>
    );
}

export default Blurb