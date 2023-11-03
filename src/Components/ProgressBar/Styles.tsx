import styled from "styled-components";

export const ProgressBarContainer = styled.div`
    height: 20px;
    width: 100%;
    background-color: rgba(200, 248, 240, 0.8);
    border-radius: 50px;
    margin-top: 15px;
   
`

export const ProgressBarStyled = styled.div<{completed:number, backgroundcolor:string}>`
    height: 100%;
    width: ${(props) => props.completed}%;
    background-color: ${(props) => props.backgroundcolor};
    border-radius: inherit;
    text-align: right;
    transition: width 1s ease-in-out;
`

export const TextProgressBar = styled.span`
    margin: 5px;
    color: white;
    font-weight: bold;

`