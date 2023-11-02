import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PokemonDetail from './Detail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path:"/detail",
    element: <PokemonDetail/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
   <Provider store={store}>
    <RouterProvider router={router}/>
   </Provider>
  </React.StrictMode>
);

