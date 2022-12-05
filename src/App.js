import React from 'react'
import './App.css';
import './scss/app.scss'
import Header from "./components/Header";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/404/NotFound";
import Cart from "./pages/cart/Cart";


function App() {

  const [searchValue, setSearchValue] = React.useState('')

  const Layout = () => {
    return (
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
        <div className="content">
          <Outlet/>
        </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      errorElement: <NotFound/>,

      children: [
        {
          path: '/',
          element: <Home/>
        },

        {
          path: '/cart',
          element: <Cart/>
        }


      ]
    },

    {}
  ]);


  return (
    <RouterProvider router={router}/>
  );

}

export default App;
