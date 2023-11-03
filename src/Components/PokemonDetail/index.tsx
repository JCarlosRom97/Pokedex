import React from "react";
import { IDetailPokemonFetch } from "../../types";
import { PokemonDataContainer, Text, DataCointainer, Row, BackButton } from "./Styles";
import ProgressBar from "../ProgressBar";



const PokemonDetailColumn = ({data} : IDetailPokemonFetch) => {
    
    return(
        <PokemonDataContainer >
            <BackButton to={"/"}>Back</BackButton>
            <Text align="center">Type</Text>
            {data?.types?.map((type)=>(
                <Text key={type.type.name} align="center">{type.type.name}</Text>
            ))}

            <DataCointainer>
                <Row rows={3}>
                    <Text align="center">Number: {data.order}</Text>
                </Row>
                <Row rows={3}>
                    <Text align="center">Name: {data.name}</Text>
                </Row>
                <Row rows={3}>
                    <Text align="center">Height: {data.height}</Text>
                </Row>
                <Row rows={3}>
                    <Text align="center">Weigth: {data.weight}</Text>
                </Row>
            </DataCointainer>
            <Text align="left">Stats</Text>
            <DataCointainer>
                <Row rows={6}>
                    {data?.stats?.map((stats:{base_stat:number, stat:{name:string}})=>
                    (
                        <DataCointainer key={stats?.stat?.name}>
                            <Row rows={4}>
                                <Text align="left">{stats?.stat?.name}</Text>
                            </Row>
                            <Row rows={8}>
                                <ProgressBar bgcolor="red" completed={stats?.base_stat}/>
                            </Row>
                        </DataCointainer>
                    ))}
                </Row>
                <Row rows={4}>
                   <Text align="center">Abilities</Text>
                   {data?.abilities?.map((ability:{ability:{name:string}}) =>(
                        <Text key={ability?.ability?.name} align="center">{ability?.ability?.name}</Text>
                   ))}
                </Row>
            </DataCointainer>
        </PokemonDataContainer>
    )
}

export default PokemonDetailColumn;