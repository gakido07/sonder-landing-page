import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { StyledButton } from "../../styling/StyledButton";
import StyledSection from "../../styling/StyledSection";
import Background from '../../assets/pexels-yan.png'
import useTransition from "../../hooks/useTransition";

const variants = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, x: 30 }
}

const Friend = () => {

    const { ref, controls } = useTransition();

    return (
    <StyledFriend>
        <div>
                <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={variants}
                className='content'>
                    <h1>
                    Soul mates come in the form of friendship too.   
                    </h1>
                </motion.div>
                <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={variants}
                className='content'>
                <p>
                We're not just about dating, we want to help you make meaningful connections as well. Whether you've just moved to a new city or looking to expand your social circle, with Sonder your next friend date is just 5 minutes away, and with any luck your next BFF!
                </p>
                </motion.div>
                <div className='btn-container'>
                    <StyledButton alt={true}>
                        Match me!
                    </StyledButton>
                </div>
            </div>
            <div>
                <StyledImageContainer>
                    <div>
                        <div></div>
                    </div> 
                    <div className="second">
                        <div></div>
                        <div></div>
                    </div>    
                    <div className="third">
                        <div></div>
                        <div></div>    
                    </div>    
                    <div className="fourth">
                        <div></div>
                    </div>    
                </StyledImageContainer>
            </div>
    </StyledFriend>
    )
}

export default Friend;

const StyledFriend = styled(StyledSection)`
    background-color: rgba(211, 180, 78, 1);
    padding-top: 0em;

    button{
        width: 35%;
    }

    >div:last-of-type{
        background-color:rgba(255, 255, 199, 1);
        padding-top: 10em;
    }

    @media only screen and (max-width: 480px) {
        display: block;
        height: 80em;

        >div:first-of-type{
            height: 40em;
        }

        >div:last-of-type{
            padding-top: 6em;
            height: 40em;
        }
    }


`


const StyledImageContainer = styled.div`
    height: 25em;
    display: flex;
    width: 50%;
    margin: auto;
    position: relative;

    >div{
        width: 25%;
        display: block;
        overflow: hidden;
        background-image: url(${Background});
        background-size: 400px;
        background-repeat: repeat-x;
        background-attachment: fixed;
        border-radius: 8px;
        margin-right: 1.5%;


        >div{
            height: 10em;
            width: 100%;
            border-bottom: 0.5em rgba(255, 255, 199, 1) solid;
        }
    }

    .second{
        >div:nth-child(1){
            height: 15em;
        }
    }

    .third{
        >div:nth-child(1){
            height: 5em;
        }

        >div:nth-child(2){
            height: 13em;
        }
    }

    .fourth{
        >div{
            height: 8em;
        }
    }

    @media only screen and (max-width: 480px) {
        width: 90%;
    }

`;
