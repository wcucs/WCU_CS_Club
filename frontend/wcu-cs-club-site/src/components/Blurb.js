import React from 'react'
import './Blurb.css'

/* lines below are for testing with animation in the future
import styled, {keyframes} from 'styled-components';
import {bounce} from 'react-animations';
const bounceAnimation = keyframes`${bounce}`;
const Bounce = styled.div`
  animation: 2s ${bounceAnimation} infinite;
`;
*/

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