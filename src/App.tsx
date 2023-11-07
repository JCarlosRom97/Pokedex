import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "./redux/reducers/index.reducer";
import PokemonImage from './Images/pokeapi_256.png'
import sampleImage from './Images/bulbasur.png'
import Table from "./Components/Table/Table";
import { Column, Container, ContainerImages, Image } from "./Styles";
import { state } from "./types";
import { usePaginationUrlGenerator } from "./Hooks/paginationUrlGenerator";
import { IPokemonDataIndex } from "./types";

const App = () => {
  const state = useSelector((state: state) => state.PokemonDataList.data );
  const dispatch = useDispatch();  
  const paginationHandler = usePaginationUrlGenerator();
  const [imagePokemon, setImagePokemon] = useState(sampleImage);
  const [indexPagination, setIndexPagination] = useState(paginationHandler.value());
  const [isFirstPage, setIsFirstPage] = useState(paginationHandler.isFirstIndex())


  useEffect(()=>{
    async function getData() {
      const data = await fetch(indexPagination)
      const pokemonData : IPokemonDataIndex = await data.json();
      dispatch(add(pokemonData.results))
    }
    getData().catch((error)=> console.error(error))

  },[indexPagination])

  const incrementPaginationFunc = () => {
    paginationHandler.incrementPagination()
    setIndexPagination(paginationHandler.value())
    setIsFirstPage(paginationHandler.isFirstIndex())
  }

  const decrementPaginationFunc = () => {
    paginationHandler.decrementPagination()
    setIndexPagination(paginationHandler.value())
    setIsFirstPage(paginationHandler.isFirstIndex())
  }

  return (
    <Container>
      <Column columns={5}>
        <ContainerImages>
          <Image alt="PokeApi" src={PokemonImage} width={300}/>
          <Image alt="Pokemon Image" src={imagePokemon} height={300} paddingtop={100}/>
        </ContainerImages>
      </Column>
      <Column columns={7}>
        <Table pokemonData={state} onChangeImage={(imgUrl)=> setImagePokemon(imgUrl)}/>
        {!isFirstPage && (<button onClick={decrementPaginationFunc}>Previous</button>)}
        <button onClick={incrementPaginationFunc}>Next</button>
      </Column>
     
    </Container>
  );
}

export default App;
