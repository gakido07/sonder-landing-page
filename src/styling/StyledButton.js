import styled from "styled-components";

export const StyledButton = styled.button`
    height: 3em;
    border-radius: 8px;
    border: none;
    background-color: white;
    box-shadow: ${props => props.alt? `5px 2px rgba(255, 255, 199, 1)`: '5px 2px #E8B4BC'};
`

export const AltStyledButton = styled(StyledButton)`
    box-shadow: none;
    background-color: #DD2D4A;
    transition: all 0.3s ease-in;

    :hover{
        background-color: white;
        transition: all 0.1s ease-in;
    }
`