import styled from "styled-components";

export const StyledTable = styled.table `
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    width: 100%;
    margin-top: 20px;
`

export const DataCells = styled.td `
    border: 1px solid #ddd;
    padding: 5px;
    cursor: pointer;
    background: rgba(252, 252, 252, 0.7);
    &:hover{
        background-color: rgba(39, 73, 245, 0.6);
        color: white;
    }

    &nth-child(even){background-color: #f2f2f2;}
`