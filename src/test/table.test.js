import Table from "../Components/Table";
import { createEvent, fireEvent, render, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe('Table', () => {
    
    const fakePokemons = [
        { name: 'bulbasaur', url:'https://pokeapi.co/api/v2/pokemon/1/' },
        { name: 'ivysaur',  url:'https://pokeapi.co/api/v2/pokemon/2/'},
    ]
    test('Snapshot should be the same', () =>{
        const component = render(
            <BrowserRouter>
                <Table pokemonData={fakePokemons} onChangeImage={() => jest.fn()}/>
            </BrowserRouter>
        )
        expect(component).toMatchSnapshot();
    })

    test('Should click button', async () =>{
        const {container} = render(
            <BrowserRouter>
                <Table pokemonData={fakePokemons} onChangeImage={() => jest.fn()}/>
            </BrowserRouter>
        )
        
        const buttons = container.getElementsByTagName('tr')

        expect(buttons.length).toBe(2)
        
        const clickEvent = createEvent(
            'Click on pokemon record',
            buttons[0],{
                detail:1
            },
            { EventType: 'CustomEvent' }

        )
        
    })

})