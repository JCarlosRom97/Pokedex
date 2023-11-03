import React, { useEffect } from "react";
import { useLocation } from "react-router";
import pokemonImage from "./../Images/pokeapi_256.png"
import Axios from "axios";
import { Column, Container } from "../Styles";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/reducers/detail.reducer";
import { Image } from "../Styles";
import PokemonDetailColumn from "../Components/PokemonDetail";
import { IDetailPokemon, IDetailPokemonFetch } from "../types";


const PokemonDetail = () =>{
    const {state} = useLocation()
    const detail = useSelector((state: IDetailPokemon)=> state.detail.data)
    const dispatch = useDispatch();

    useEffect(()=>{
        async function getPokemonData(){
            const pokemonData: IDetailPokemonFetch = await Axios.get(state.url);
            dispatch(add({
                types: pokemonData.data.types,
                order: pokemonData.data.order,
                name: pokemonData.data.name,
                height: pokemonData.data.height,
                weight: pokemonData.data.weight,
                stats: pokemonData.data.stats,
                abilities: pokemonData.data.abilities,
                sprites: {front_default:pokemonData.data.sprites.front_default}
            }))
        }
        getPokemonData()
    },[dispatch, state])

    
    return(
        <Container>
            <Column columns={4} >
                <Image src={pokemonImage}/>
                <Image src={detail?.sprites?.front_default} height={300} paddingtop={100}/>
            </Column>
            <PokemonDetailColumn data={detail} />
        </Container>
    )
}

export default PokemonDetail;