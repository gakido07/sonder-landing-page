import React from 'react';
import styled from 'styled-components'
import { AltStyledButton, StyledButton } from '../../styling/StyledButton';
import StyledSection from '../../styling/StyledSection';

const Landing = ({header, text, buttons}) => {
    return (
        <StyledLanding>
            <div>
                <div className='content'>
                    <h1>
                        Get Matched in under five minutes    
                    </h1>
                </div>
                <div className='content'>
                <p>
                At Sonder we believe everyone looking for love deserves to find it. No more God when-ing under couple posts. With our advanced algorithm, we match you with people best suited to you. Meet them today!
                </p>
                </div>
                <div className='btn-container'>
                    <StyledButton>
                        Get Started
                    </StyledButton>
                    <AltStyledButton>
                        Learn more
                    </AltStyledButton>
                </div>
            </div>
            <div>
            </div>
        </StyledLanding>
    );
}

export default Landing;

const StyledLanding = styled(StyledSection)`
`