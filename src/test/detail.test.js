import renderer from "react-test-renderer"
import PokemonDetail from '../Detail/index';
import { Provider } from "react-redux";
import store from "../redux/store";
import * as axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { render, waitFor } from "@testing-library/react";


jest.mock('axios');
jest.mock("react-router", () => ({
    ...jest.requireActual("react-router"),
    useLocation: () => ({
      state:{
        url: ''
      }
    })
  }));
describe('detail', () =>{
    test('snapshot should be the same', () =>{
        const component = renderer.create(
            <Provider store={store}>
                <BrowserRouter>
                    <PokemonDetail/>
                </BrowserRouter>
            </Provider>
        )
    
        let tree = component.toJSON();
    
        expect(tree).toMatchSnapshot()
    })

    test('renders users when API call succeeds', async () => {
        
     

        axios.get.mockResolvedValue({
            data: {   
                "types": [
                    {
                    "slot": 1,
                    "type": {
                        "name": "grass",
                        "url": "https://pokeapi.co/api/v2/type/12/"
                    }
                    },
                    {
                    "slot": 2,
                    "type": {
                        "name": "poison",
                        "url": "https://pokeapi.co/api/v2/type/4/"
                    }
                    }
                ],
                "order": 1,
                "name": "bulbasaur",
                "height": 7,
                "weight": 69,
                "stats": [
                    {
                    "base_stat": 45,
                    "effort": 0,
                    "stat": {
                        "name": "hp",
                        "url": "https://pokeapi.co/api/v2/stat/1/"
                    }
                    },
                    {
                    "base_stat": 49,
                    "effort": 0,
                    "stat": {
                        "name": "attack",
                        "url": "https://pokeapi.co/api/v2/stat/2/"
                    }
                    },
                    {
                    "base_stat": 49,
                    "effort": 0,
                    "stat": {
                        "name": "defense",
                        "url": "https://pokeapi.co/api/v2/stat/3/"
                    }
                    },
                    {
                    "base_stat": 65,
                    "effort": 1,
                    "stat": {
                        "name": "special-attack",
                        "url": "https://pokeapi.co/api/v2/stat/4/"
                    }
                    },
                    {
                    "base_stat": 65,
                    "effort": 0,
                    "stat": {
                        "name": "special-defense",
                        "url": "https://pokeapi.co/api/v2/stat/5/"
                    }
                    },
                    {
                    "base_stat": 45,
                    "effort": 0,
                    "stat": {
                        "name": "speed",
                        "url": "https://pokeapi.co/api/v2/stat/6/"
                    }
                    }
                ],
                "abilities": [
                    {
                    "ability": {
                        "name": "overgrow",
                        "url": "https://pokeapi.co/api/v2/ability/65/"
                    },
                    "is_hidden": false,
                    "slot": 1
                    },
                    {
                    "ability": {
                        "name": "chlorophyll",
                        "url": "https://pokeapi.co/api/v2/ability/34/"
                    },
                    "is_hidden": true,
                    "slot": 3
                    }
                ],
                "sprites": {
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                }
                
            }
        });
        

        const {container, asFragment} = render(
            <Provider store={store}>
                <BrowserRouter>
                    <PokemonDetail/>
                </BrowserRouter>
            </Provider>
        )

        const listNode = container.querySelector('div');
        expect(listNode.children).toHaveLength(2); 
    
    })

})