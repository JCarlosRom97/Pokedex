import styled from "styled-components";
import { Link } from "react-router-dom";

export const PokemonDataContainer = styled.div`
    flex: 8;
    height: 100%;
    width: 100%;
    background: rgba(252, 252, 252, 0.7);
    padding: 30px;
`

export const BackButton = styled(Link)`
    text-decoration: none;
`

export const Text = styled.p<{align:string}>`
    text-align: ${(props) => props.align};
    font-weight: bold;
`

export const DataCointainer = styled.div`
    flex:1;
    flex-direction: row;
    display: flex;
`

export const Row = styled.div<{rows:number}>`
    flex:${(props) => props.rows}
`