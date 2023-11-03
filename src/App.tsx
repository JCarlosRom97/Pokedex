import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "./redux/reducers/index.reducer";
import Axios  from "axios";
import PokemonImage from './Images/pokeapi_256.png'
import sampleImage from './Images/bulbasur.png'
import Table from "./Components/Table/Table";
import { Column, Container, ContainerImages, Image } from "./Styles";
import { state } from "./types";
import { usePaginationUrlGenerator } from "./Hooks/paginationUrlGenerator";

const App = () => {
  const state = useSelector((state: state) => state.PokemonDataList.data );
  const dispatch = useDispatch();  
  const paginationHandler = usePaginationUrlGenerator();
  const [imagePokemon, setImagePokemon] = useState(sampleImage);
  const [indexPagination, setIndexPagination] = useState(paginationHandler.value());
  const [isFirstPage, setIsFirstPage] = useState(paginationHandler.isFirstIndex())


  useEffect(()=>{
    async function getData() {
      const pokemonData = await Axios.get(indexPagination)
      dispatch(add(pokemonData.data.results))
    }
    getData()

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
          <Image src={PokemonImage} width={300}/>
          <Image src={imagePokemon} height={300} paddingtop={100}/>
        </ContainerImages>
      </Column>
      <Column columns={7}>
        {!isFirstPage && (<button onClick={decrementPaginationFunc}>Previous</button>)}
        <button onClick={incrementPaginationFunc}>Next</button>
        <Table pokemonData={state} onChangeImage={(imgUrl)=> setImagePokemon(imgUrl)}/>
      </Column>
     
    </Container>
  );
}

export default App;
