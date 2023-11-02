import styled from "styled-components";
//Global Styled Components
export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
`

export const ContainerImages = styled.div`
    flex-direction: column;
    display: flex;
`

export const Column = styled.div<{columns: number}>`
    flex: ${props => props.columns}
`

export const Image = styled.img<{width?: number, height?: number}>`
    width: ${props => props.width};
    height: ${props => props.height};
`