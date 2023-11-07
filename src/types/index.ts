
type pokemonStructure = {name:string, url:string}[]

//App.tsx props

export interface IPokemonDataIndex {
    results:{name:string, url: string}[]
}

export interface changeImagePokemon {
    event: {detail:number}, 
    name: string,
    url:string
}

export interface pokemonProps {
    name: string,
    url: string
}

export type state = {
    PokemonDataList:{
        data:{name:string, url:string}[]
    }
}

// TableComponent

export interface ITableProps 
{   
    pokemonData: pokemonStructure,
    onChangeImage: (imgUrl:string) => void 
}


// Detail Component

export type DetailPokemon = {
    types: {
        type:{
            name:string
        }
    }[],
    order: number,
    name: string,
    height: number, 
    weight: number, 
    stats: [],
    abilities: []
    sprites: {front_default:string}
}


export interface IDetailPokemonRedux {
    detail:{
        data: DetailPokemon
    }
}
