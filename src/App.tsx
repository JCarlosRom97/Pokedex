import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "./redux/reducers";
import Axios  from "axios";
import PokemonImage from './Images/pokeapi_256.png'
import sampleImage from './Images/bulbasur.png'
import Table from "./Components/Table";
import { Column, Container, ContainerImages, Image } from "./Styles";
import { state } from "./types";

const App = () => {
  const state = useSelector((state: state) => state.example.data );
  const dispatch = useDispatch();  
  const [imagePokemon, setImagePokemon] = useState(sampleImage);

  useEffect(()=>{
    async function getData() {
      const pokemonData = await Axios.get('https://pokeapi.co/api/v2/pokemon/')
      dispatch(add(pokemonData.data.results))
    }
    getData()
  },[])

  return (
    <Container>
      <Column columns={5}>
        <ContainerImages>
          <Image src={PokemonImage}/>
          <Image src={imagePokemon} style={{width:250}}/>
        </ContainerImages>
      </Column>
      <Column columns={7}>
        <Table pokemonData={state} onChangeImage={(imgUrl)=> setImagePokemon(imgUrl)}/>
      </Column>
    </Container>
  );
}

export default App;
