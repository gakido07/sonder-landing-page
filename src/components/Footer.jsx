import React from "react";
import styled from "styled-components";

const Footer = () => {

    return (
        <StyledFooter>
            <div>
                <h1>Sonder</h1>
            </div>
            <div>
                <div className="options">
                    <a href="/#">
                        <span>Index</span>
                    </a>
                    <a href="/#">
                        <span>Mission</span>
                    </a>
                    <a href="/#">
                        <span>The Science</span>
                    </a>
                    <a href="/#">
                        <span>Products</span>
                    </a>
                    <a href="/#">
                        <span>Download</span>
                    </a>
                </div>
                <div className="options">
                    <a href="/#">
                        <span>Resources</span>
                    </a>
                    <a href="/#">
                        <span>Safe dating tips</span>
                    </a>
                    <a href="/#">
                        <span>FAQs</span>
                    </a>
                    <a href="/#">
                        <span>Products</span>
                    </a>
                </div>
                <div className="options">
                    <a href="/#">
                        <span>Legal</span>
                    </a>
                    <a href="/#">
                        <span>Privacy</span>
                    </a>
                    <a href="/#">
                        <span>Terms</span>
                    </a>
                </div>
            </div>
        </StyledFooter>
    );
}

export default Footer;


const StyledFooter = styled.footer`
    height: 20em;
    background-color: rgba(221, 45, 74, 1);
    display: flex;
    color: white;

    a{
        text-decoration: none;
        color: white;
    }

    h1{
        font-family: 'Lora';
    }

    .options{
        margin-right: 5%;
        font-family: 'IBM Plex Sans';
        font-size: 16px;
    }

    >div:first-of-type{
        flex: 0.25;
        display: flex;
        align-items: center;
        padding-left: 10%;
    }

    >div:last-of-type{
        flex: 0.75;
        display: flex;
        justify-content: space-evenly;
        padding-top: 5em;

        span{
            display: block;
            margin-bottom: 1em;
        }
    }

    @media only screen and (max-width: 480px) {
        >div:first-of-type{
            margin-right: 5%;
        }
    }
`