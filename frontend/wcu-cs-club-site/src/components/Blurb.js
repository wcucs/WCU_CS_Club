import React from 'react'
import './Blurb.css'

function Blurb(props) {
    return (
        <div className="Blurb">
            <div className="Blurb-inner">
                <button className="Close-btn" onClick={() => props.onClose()}>X</button>
                { props.children }
                <h3>{props.name}</h3>
                <img src={props.cardImage} alt={props.name}/>
                <p>Bio: {props.bio} </p>
            </div>
        </div>
    );
}

export default Blurb