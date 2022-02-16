import React from "react";
import styled from "styled-components";
import image from '../../assets/pexels-vera-arsic-984935.png'
import Label from "../Label";

const Success = () => {

    return (
        <StyledSuccess>
            <div>
                <h2>The Journey so far</h2>
                <p>
                Not Convinced yet? Sonder has been helping singles like you connect and form meaningful relationships. Listen to some of our users and hear how they found love or friendship on Sonder. We cant wait to hear about your success story in the coming months!
                </p>
            </div>
            <div className="stats">
                <span>
                    <h3>1000+</h3>
                    <p>Active Users</p>
                </span>
                <span>
                    <h3>700+</h3>
                    <p>Matches</p>
                </span>
                <span>
                    <h3>300+</h3>
                    <p>Reviews</p>
                </span>
                <span>
                    <h3>6+</h3>
                    <p>Years of experience</p>
                </span>
            </div>
            <div className="couples">
                <div>
                    <StyledImageContainer>
                        <img src={require("../../assets/pexels-vera-arsic-984935.png")} alt="lol" />
                        <Label  name={"Jane & Zain"}/>
                    </StyledImageContainer>
                    <StyledImageContainer>
                        <img src={require("../../assets/pexels-edward-eyer-4394970.png")} alt="lol" />
                        <Label  name={"Fez & Kat"}/>
                    </StyledImageContainer>
                </div>
                <div>
                    <StyledImageContainer>
                    <img src={require("../../assets/pexels-darina-belonogova-8374667.png")} alt="lol" />
                        <Label  name={"Cher & Madonna"}/>
                    </StyledImageContainer>
                    <StyledImageContainer>
                        <img src={require("../../assets/pexels-wendy-wei-2719500 1.png")} alt="lol" />
                        <Label  name={"Kourt & Cory"}/>
                    </StyledImageContainer>
                </div>
                <div>
                    <StyledImageContainer>
                        <img src={require("../../assets/pexels-diego-rezende-2574672.png")} alt="lol" />
                        <Label name={"Austin & Ally"}/>
                    </StyledImageContainer>
                    <StyledImageContainer>
                    <img src={require("../../assets/pexels-picha-6210525.png")} alt="lol" />
                        <Label name={"Sadie & Vanessa"}/>
                    </StyledImageContainer>
                </div>
                <div>
                    <StyledImageContainer>
                        <img src={require("../../assets/pexels-savannah-dematteo-2346781.png")} alt="lol" />
                        <Label name={"Elly & Frances"}/>
                    </StyledImageContainer>
                    <StyledImageContainer>
                        <img src={require("../../assets/pexels-ralph-rabago-3214738.png")} alt="lol" />
                        <Label name={"Perez & Victoria"}/>
                    </StyledImageContainer>
                </div>
            </div>
        </StyledSuccess>
    )
}

export default Success;

const StyledSuccess = styled.div`
    padding-top: 3em;
    width: 100%;
    height: 70em;

    >div{
        width: 60%;
        margin: auto;
        margin-bottom: 2em;
    }

    h2{
        font-weight: 800;
        font-family: 'Lora';
        font-size: 56px;
        color: rgba(221, 45, 74, 1);
    }

    h3{
        color: rgba(221, 45, 74, 1);
        font-family: 'Lora';
        font-weight: 500;
        font-size: 40px;
    }

    p{
        font-family: 'IBM Plex Sans';
    }

    .stats{
        display: flex;
        justify-content: space-between;
    }

    .couples{
        height: 20em;
        width: 45%;
        display: flex;
        justify-content: space-between;
        margin-top: 4em;

        >div{
            height: 100%;
            width: 24%;
        }

        >div:nth-of-type(even){
            padding-bottom: 5em;
        }

        >div:nth-of-type(odd){
            padding-top: 5em;
        }
    }
`;

const StyledImageContainer = styled.div`
    height: 14em;
    background-color: gray;
    margin-bottom: 1em;
    position: relative;
    overflow: hidden;
    border-radius: 8px;

    img{
        width: 100%;
        height: 100%;
    }

    >div{
        
    }
`