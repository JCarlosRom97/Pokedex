import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PokemonDetail from './Detail';
import { Background } from './Styles';
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path:"/detail/:name",
    element: <PokemonDetail/>
  },
  {
    path: "*",
    element: <ErrorPage/>
  }

])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
   <Provider store={store}>
    <Background>
      <RouterProvider router={router}/>
    </Background>
   </Provider>
  </React.StrictMode>
);

