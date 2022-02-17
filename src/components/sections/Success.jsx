import React from "react";
import styled from "styled-components";

import Label from "../Label";
import useTransition from "../../hooks/useTransition";
import { motion } from "framer-motion";
import { ReactComponent as SvgQuote } from '../../assets/Vector.svg'
import { ReactComponent as SvgQuote1 } from '../../assets/Vector (1).svg'

const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 30 } 
}

const Success = () => {

    const { ref, controls } = useTransition();
    

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
                    <StyledImageContainer
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={variants}
                    transition = {{ duration: 0.5, delay: 0 }}
                    >
                        <img src={require("../../assets/pexels-vera-arsic-984935.png")} alt="lol" />
                        <Label  name={"Jane & Zain"}/>
                    </StyledImageContainer>
                    <StyledImageContainer
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={variants}
                    transition = {{ duration: 0.5, delay: 0.4 }}
                    >
                        <img src={require("../../assets/pexels-edward-eyer-4394970.png")} alt="lol" />
                        <Label  name={"Fez & Kat"}/>
                    </StyledImageContainer>
                </div>
                <div>
                    <StyledImageContainer
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={variants}
                    transition = {{ duration: 0.5, delay: 0.1 }}
                    >
                    <img src={require("../../assets/pexels-darina-belonogova-8374667.png")} alt="lol" />
                        <Label  name={"Cher & Madonna"}/>
                    </StyledImageContainer>
                    <StyledImageContainer
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={variants}
                    transition = {{ duration: 0.5, delay: 0.5 }}
                    >
                        <img src={require("../../assets/pexels-wendy-wei-2719500 1.png")} alt="lol" />
                        <Label  name={"Kourt & Cory"}/>
                    </StyledImageContainer>
                </div>
                <div>
                    <StyledImageContainer
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={variants}
                    transition = {{ duration: 0.5, delay: 0.2 }}
                    >
                        <img src={require("../../assets/pexels-diego-rezende-2574672.png")} alt="lol" />
                        <Label name={"Austin & Ally"}/>
                    </StyledImageContainer>
                    <StyledImageContainer
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={variants}
                    transition = {{ duration: 0.5, delay: 0.6 }}
                    >
                    <img src={require("../../assets/pexels-picha-6210525.png")} alt="lol" />
                        <Label name={"Sadie & Vanessa"}/>
                    </StyledImageContainer>
                </div>
                <div>
                    <StyledImageContainer
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={variants}
                    transition = {{ duration: 0.5, delay: 0.3 }}
                    >
                        <img src={require("../../assets/pexels-savannah-dematteo-2346781.png")} alt="lol" />
                        <Label name={"Elly & Frances"}/>
                    </StyledImageContainer>
                    <StyledImageContainer
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={variants}
                    transition = {{ duration: 0.5, delay: 0.7 }}
                    >
                        <img src={require("../../assets/pexels-ralph-rabago-3214738.png")} alt="lol" />
                        <Label name={"Perez & Victoria"}/>
                    </StyledImageContainer>
                </div>
            </div>
            <div className="quote">
                <div>
                    <div>
            <SvgQuote />
                    <p>Whatever souls are made of, his and I are the same</p>
                    <SvgQuote1 />
                    </div>  
                    <p> —   Jules, 23</p>
                </div>
            </div>
        </StyledSuccess>
    )
}

export default Success;

const StyledSuccess = styled.div`
    padding-top: 3em;
    width: 100%;
    height: 79em;
    background-color:rgba(255, 239, 242, 1);

    >div{
        width: 60%;
        margin: auto;
        margin-bottom: 2em;
    }

    >div:first-of-type{
        color: rgba(117, 116, 116, 1);
        p{
        font-weight: 600;
        }
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
        height: 38em;
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

    .quote{
        width: 80%;
        display: flex;
        justify-content: flex-end;

        div{
            display: block;
            text-align: right;

            >p{
                color: rgba(117, 116, 116, 1);
            }

            >div{
                display: flex;
                width: 100%;

                svg{
                    margin-top: 1.1em;
                    margin-left: 1em;
                    margin-right: 1em;
                }

                p{
                    white-space: nowrap;
                    color: rgba(221, 45, 74, 1);
                    font-weight: 600;
                    font-size: 20px;
                    font-family: 'Lora';

                }
            }
        }
    }

    @media only screen and (max-width: 480px) {
        height: 88em;

        >div{
            width: 80%;
        }

        .stats{
            flex-wrap: wrap;
        } 

        .couples{
            width: 95%;
            height: 25em;
        }

        .quote{
            width: 100%;
            margin-top: 3em;
        }


        .quote div >div p{
            white-space: normal;
        }
    }
`;

const StyledImageContainer = styled(motion.div)`
    height: 14em;
    background-color: gray;
    margin-bottom: 1em;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    transition: all 0.2s ease-in;


    img{
        width: 100%;
        height: 100%;
    }

    :hover{


        >div{
            height: 9em;
            transition: all 0.2s ease-in;

            >p{
                margin-bottom: 2em;
            }
        }
    }

    @media only screen and (max-width: 480px) {
        height: 10em;
    }
    
`