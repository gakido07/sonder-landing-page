import styled from "styled-components";

export const StyledButton = styled.button`
    height: 4.5em;
    border-radius: 8px;
    border: none;
    background-color: white;
    box-shadow: ${props => props.alt? `5px 2px rgba(255, 255, 199, 1)`: '5px 2px #E8B4BC'};
    color: rgba(221, 45, 74, 1);
    transition: all 0.1s ease-in;
    

    :active{
        box-shadow: none;
        transition: all 0.1s ease-in;
        transform: ${props => props.alt? `none`: 'translateY(2px)'};
        transform:  ${props => props.alt? `none`: 'translateX(2px)'};
    }
`

export const AltStyledButton = styled(StyledButton)`
    box-shadow: none;
    background-color: #DD2D4A;
    transition: all 0.3s ease-in;
    color: white;

    :hover{
        background-color: white;
        transition: all 0.1s ease-in;
        color: rgba(221, 45, 74, 1);
    }
`