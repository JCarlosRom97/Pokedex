import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import pokemonImage from "./../Images/pokeapi_256.png"
import Axios from "axios";
import { Column, Container } from "../Styles";
const PokemonDetail = () =>{
    const {state} = useLocation()
    const [, setData] = useState({})

    useEffect(()=>{
        async function getPokemonData(){
            const pokemonData = await Axios.get(state.url);
            setData(pokemonData.data)
            console.log(pokemonData.data)
        }

        getPokemonData()
    },[])

    
    return(
        <Container>
            <Column columns={4} >
                <img src={pokemonImage}/>
            </Column>
            <Column columns={8}>
            </Column>
        </Container>
    )
}

export default PokemonDetail;