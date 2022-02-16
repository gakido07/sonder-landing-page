import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <StyledHeader>
            <div className='logo'>
                <h2>Sonder</h2>
            </div>
            <div className='nav'>
                <span>
                    <a href='#'>
                        The Science 
                    </a>
                </span>
                <span>
                    <a href='#'>
                        Product  
                    </a>
                </span>
                <span>
                    <a href='#'>
                        Download
                    </a>
                </span>
            </div>
            <div>
                <a href='#'>

                </a>
            </div>
        </StyledHeader>
    )
}

export default Header;

const StyledHeader = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    height: 4em;
    padding-left: 5%;
    padding-top: 0.7em;
    padding-right: 1%;
    background-color: white;
    font-family: 'IBM Plex Sans';
    z-index: 1;


    .logo{
        margin-right: 10%;
        color: #EA183A;
        font-family: 'Poppins';
    }

    .nav{
        padding-top: 0.5em;
        width: 20%;

        a{
            text-decoration: none;
            color: #534F4F;
        }

        >span {
            margin-right: 5%;
        }
    }

    h2{
        margin: 0;
    }
`