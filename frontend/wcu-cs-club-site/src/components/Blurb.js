import React from 'react'
import './Blurb.css'

function Blurb(props) {
    return (props.trigger) ? (
        <div className="Blurb">
            <div className="Blurb-inner">
                <button className="Close-btn" onClick={() => props.setTrigger(false)}>X</button>
                { props.children }
                <h3>{props.name}</h3>
            </div>
        </div>
    ) : "";
}

export default Blurb