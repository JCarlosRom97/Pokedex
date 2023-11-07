import styled from "styled-components";
import BackgroundImage from "./../Images/background.jpg"
//Global Styled Components

export const Background = styled.div`
    height: 100vw;
    width:100vw;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center; 
    background-image: linear-gradient(rgba(255,255,255,0.15), rgba(255,255,255,0.15)), url(${BackgroundImage});
    background-size: cover;
    @media (max-width: 1600px){
        height: 180vw;
    }
`

export const Container = styled.div`
    padding: 20px;
    display: flex;
    flex: 1;
    flex-direction: row;
    @media (max-width: 1000px){
        flex-direction: column;
    }
`

export const ContainerImages = styled.div`
    flex-direction: column;
    display: flex;
`

export const Column = styled.div<{columns: number}>`
    flex: ${props => props.columns}
`

export const Image = styled.img<{width?: number, height?: number, paddingtop?: number}>`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    padding-top: ${props => props.paddingtop}px;
    display: block;
    margin-left: auto;
    margin-right: auto;
`


