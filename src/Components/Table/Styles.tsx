import styled from "styled-components";

export const StyledUnorderedList = styled.ul `
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    margin-top: 20px;
`

export const StyledList = styled.li `
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #ddd;
    padding: 5px;
    cursor: pointer;
    background: rgba(252, 252, 252, 0.7);
    &:hover{
        background-color: rgba(39, 73, 245, 0.6);
        color: white;
    }
`
