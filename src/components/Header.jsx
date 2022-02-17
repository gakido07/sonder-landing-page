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
                    <a href="/#">
                        The Science 
                    </a>
                </span>
                <span>
                    <a href="/#">
                        Product  
                    </a>
                </span>
                <span>
                    <a href="/#">
                        Download
                    </a>
                </span>
                <span>
                    <a href="/#">
                        Articles
                    </a>
                </span>
            </div>
            <div>
                <span>
                    <a href="/#">
                        Have an account?
                    
                    <p>Log in</p>
                    </a>
                </span>
            </div>
        </StyledHeader>
    )
}

export default Header;

const StyledHeader = styled.div`
    display: flex;
    position: fixed;
    align-items: center;
    top: 0;
    width: 100%;
    height: 3.5em;
    padding-left: 5%;
    padding-right: 1%;
    background-color: white;
    font-family: 'IBM Plex Sans';
    z-index: 1;
    white-space: nowrap;

    a{
        text-decoration: none;
        color: #534F4F;
        background-image: linear-gradient(
            to right,
            #EA183A,
            #54b3d6 50%,
        #534F4F 50%
        );
        background-size: 200% 100%;
        background-position: -100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all 0.3s ease-in-out;
    }

    a:before {
        content: '';
        background: #54b3d6;
        display: block;
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 0;
        height: 3px;
    }

    a:hover {
        background-position: 0;
    }

    .logo{
        color: #EA183A;
        font-family: 'Poppins';
    }

    .nav{
        width: 50%;
        margin-right: 20%;

        a{
            text-decoration: none;
        }

        >span {
            margin-right: 5%;
            width: fit-content;
        }
    }

    >div:last-of-type{
        p{
            display: inline;
            color:#EA183A;
            margin-left: 10%;
        }
    }

    h2{
        margin: 0;
    }

    @media only screen and (max-width: 480px) {
        justify-content: space-between;

        .nav{
            display: none;

            span{
                display: block;
            }
        }
    }
    
`