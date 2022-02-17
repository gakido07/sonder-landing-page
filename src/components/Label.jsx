import React from "react";
import styled from "styled-components";

const Label = ({ name }) => {

    return (
        <StyledLabel>
            <p>{ name }</p>
            <button>Read story</button>
        </StyledLabel>
    );
}

export default Label;


const StyledLabel = styled.div`
    position: absolute;
    bottom: 0;
    height: 4.5em;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;

    p{
        opacity: 1;
        color: white;
        margin-bottom: 0.3em;
        margin-top: 0.5em;
        font-family: 'Lora';
    }

    button{
        opacity: 1;
        font-family: 'IBM Plex Sans';
        background: transparent;
        color: white;
        border-radius: 8px;
        border: 1px solid white;
        height: 2em;

        :hover{
            cursor: pointer;
        }
    }
`