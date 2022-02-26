import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { AltStyledButton, StyledButton } from '../../styling/StyledButton';
import StyledSection from '../../styling/StyledSection';

const Landing = () => {    

    return (
        <StyledLanding>
            <div>
                <motion.div 
                animate={{ x: 10, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className='content'>
                    <h1>
                        Get Matched in under 5 minutes    
                    </h1>
                </motion.div>
                <motion.div 
                animate={{ x: 10, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className='content'>
                <p>
                At Sonder we believe everyone looking for love deserves to find it. No more God when-ing under couple posts. With our advanced algorithm, we match you with people best suited to you. Meet them today!
                </p>
                </motion.div>
                <div className='btn-container'>
                    <StyledButton>
                        Get Started
                    </StyledButton>
                    <AltStyledButton alt={true}>
                        Learn more
                    </AltStyledButton>
                </div>
            </div>
            <div>
                <img src={require("../../assets/Frame 1.png")} alt="" />
            </div>
        </StyledLanding>
    );
}

export default Landing;

const StyledLanding = styled(StyledSection)`
    .content{
        opacity: 0;
    }

    >div:last-of-type{
        overflow: hidden;
    }

    p{
        color: rgba(237, 207, 207, 1);
    }

    button{
        width: 35%;
    }

    @media only screen and (max-width: 480px) {
        >div:last-of-type{
            height: 25em;

            img {
                height: 100%;
                width: 100%;
            }
        }
    }

`