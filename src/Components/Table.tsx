import React from "react"
import Axios from "axios";
import { pokemonProps, changeImagePokemon } from "../types";
import { useNavigate } from "react-router";
import Pokeball from './../Images/pokeball.png'
import { ITableProps } from "../types";
import { StyledTable } from "./Styles";
import { Image } from "../Styles";

const Table = ({pokemonData, onChangeImage}:ITableProps) => {
    
    const navigate = useNavigate()

    async function changeImagePokemon({event, url}:changeImagePokemon){
      console.log(event)
        switch(event.detail){
          case 1:{
            const pokemonImage = await Axios.get(url)
            onChangeImage(pokemonImage.data.sprites.front_default)
            break;
          }
          case 2:{
            navigate('/detail', {state:{url}})
            break;
          }
        }
    
      }
    return(
        <StyledTable>
        <tbody>
            {pokemonData.map(({name, url}: pokemonProps)=>(
              <tr key={url} onClick={(event)=>changeImagePokemon({event, url})}>
                <td >{name}</td>
                <td>
                  <Image src={Pokeball} height={20}/>
                </td>
              </tr>
            ))} 
        </tbody>
      </StyledTable>
    )
}


export default Table;