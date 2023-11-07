import React, { useEffect } from "react";
import { useParams } from "react-router";
import pokemonImage from "./../Images/pokeapi_256.png"
import { Column, Container } from "../Styles";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/reducers/detail.reducer";
import { Image } from "../Styles";
import PokemonDetailColumn from "../Components/PokemonDetail";
import { IDetailPokemonRedux, DetailPokemon } from "../types";
import {URL} from "./../Hooks/paginationUrlGenerator";

const PokemonDetail = () =>{
    const {name} = useParams();
    const detail = useSelector((state: IDetailPokemonRedux)=> state.detail.data)
    const dispatch = useDispatch();

    useEffect(()=>{
        async function getPokemonData(){
            const data = await fetch(`${URL+name}`);
            const pokemonData: DetailPokemon = await data.json();
            dispatch(add({
                types: pokemonData.types,
                order: pokemonData.order,
                name: pokemonData.name,
                height: pokemonData.height,
                weight: pokemonData.weight,
                stats: pokemonData.stats,
                abilities: pokemonData.abilities,
                sprites: {front_default:pokemonData.sprites.front_default}
            }))
        }

        getPokemonData().catch((error) => console.error(error))

      
    },[dispatch, name])

    
    return(
        <Container>
            <Column columns={4} >
                <Image alt="ImagenPokemon" src={pokemonImage}/>
                <Image alt="Pokemon Image" src={detail?.sprites?.front_default} height={300} paddingtop={100}/>
            </Column>
            <PokemonDetailColumn data={detail} />
        </Container>
    )
}

export default PokemonDetail;