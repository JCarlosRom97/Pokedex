
type pokemonStructure = {name:string, url:string}[]

//App.tsx props

export interface changeImagePokemon {
    event: {detail:number}, 
    url:string
}

export interface pokemonProps {
    name: string,
    url: string
}

export type state = {
    example:{
        data:{name:string, url:string}[]
    }
}

// TableComponent

export interface ITableProps 
{   
    pokemonData: pokemonStructure,
    onChangeImage: (imgUrl:string) => void 
}

