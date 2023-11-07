import React from "react"
import Axios from "axios";
import { pokemonProps, changeImagePokemon } from "../../types";
import { useNavigate } from "react-router";
import Pokeball from './../../Images/pokeball.png'
import { ITableProps } from "../../types";
import { StyledUnorderedList, StyledList } from "./Styles";
import { Image } from "../../Styles";

const Table = ({pokemonData, onChangeImage}:ITableProps) => {
    
    const navigate = useNavigate()

    async function changeImagePokemon({event, name, url}:changeImagePokemon){
  
        switch(event.detail){
          case 1:{
            const pokemonImage = await Axios.get(url)
            onChangeImage(pokemonImage.data.sprites.front_default)
            break;
          }
          case 2:{
            navigate(`/detail/${name}`)
            break;
          }
        }
    
      }
    return(
        <StyledUnorderedList>

            {pokemonData.map(({name, url}: pokemonProps)=>(
              <StyledList key={url} onClick={(event)=>changeImagePokemon({event, name, url})} >
                <div style={{flex:10}} >{name}</div>
                <div style={{flex:2}} > <Image alt="Pokeball" src={Pokeball} height={30}/></div>
              </StyledList>
            ))} 
  
      </StyledUnorderedList>
    )
}


export default Table;