import React from "react";
import styled from "styled-components";
import { AltStyledButton, StyledButton } from "../../styling/StyledButton";
import StyledSection from "../../styling/StyledSection";

const Friend = () => {

    return (
    <StyledFriend>
        <div>
                <div className='content'>
                    <h1>
                    Soul mates come in the form of friendship too.   
                    </h1>
                </div>
                <div className='content'>
                <p>
                We're not just about dating, we want to help you make meaningful connections as well. Whether you've just moved to a new city or looking to expand your social circle, with Sonder your next friend date is just 5 minutes away, and with any luck your next BFF!
                </p>
                </div>
                <div className='btn-container'>
                    <StyledButton alt={true}>
                        Match me!
                    </StyledButton>
                </div>
            </div>
            <div>
            </div>
    </StyledFriend>
    )
}

export default Friend;

const StyledFriend = styled(StyledSection)`
    background-color: rgba(211, 180, 78, 1);
    padding-top: 0em;

    >div:last-of-type{
        background-color:rgba(255, 255, 199, 1)
    }
`