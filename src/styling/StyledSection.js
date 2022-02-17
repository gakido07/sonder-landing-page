import styled from "styled-components";

const StyledSection = styled.div`
    height: 44em;
    width: 100%;
    padding-top: 2em;
    display: flex;
    color: white;
    font-family: 'Lora';
    background-color:#DD2D4A;

    button{
        width: 22%;
    }

    button:first-of-type{
        margin-right: 10%;
    }

    p{
        font-family: 'IBM Plex Sans';
        font-weight: 600;
    }


    >div:first-of-type{
        padding-top: 5em;
        flex: 0.4;
        padding-left: 5%;
        padding-right: 5%;
        text-align: left;

        h1{
            font-size: 56px;
            font-weight: 700;
        }
    }

    >div:last-of-type{
        flex: 0.6;
        background-color: rgba(232, 180, 188, 1);
    }

    .content{
        margin-bottom: 3em;
    }


    @media only screen and (max-width: 480px) {
        display: block;
        height: 65em;

        >div:first-of-type{
            height: 35em;
        }
    }
`

export default StyledSection;