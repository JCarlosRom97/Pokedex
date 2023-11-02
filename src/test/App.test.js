import renderer from "react-test-renderer"
import App from "../App"
import { Provider } from "react-redux"
import store from "../redux/store"
import { BrowserRouter } from "react-router-dom"
import { render, screen, waitFor } from '@testing-library/react'
import * as axios from "axios";

jest.mock('axios');

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));


describe('App', () => {
    
    beforeEach(() => {
        jest.resetAllMocks()
    })

    
    test('snapshot should be the same', () =>{
        const component = renderer.create(
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        )
    
        let tree = component.toJSON();
    
        expect(tree).toMatchSnapshot()
    })

    test('renders users when API call succeeds', async () => {
        
        const fakePokemons = [
            { name: 'bulbasaur', url:'https://pokeapi.co/api/v2/pokemon/1/' },
            { name: 'ivysaur',  url:'https://pokeapi.co/api/v2/pokemon/2/'},
        ]

        axios.get.mockResolvedValue({
            data: {
                results: fakePokemons
            }
        });

        const {container, asFragment} = render(
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        )

        const listNode = await waitFor(() => container.querySelector('tbody'));
        expect(listNode.children).toHaveLength(2);
        expect(asFragment()).toMatchSnapshot();
    
    })

    test('renders error when API call fails', async () => {})

})