import React from 'react'
import './App.css';
import './scss/app.scss'
import Header from "./components/Header";


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/404/NotFound";
import Cart from "./pages/cart/Cart";


export const SearchContext = React.createContext();

function App() {

  const [searchValue, setSearchValue] = React.useState('')


  return (
    <div className="wrapper">
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
        <Header/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue}/>}/>
            <Route
              path="/cart"
              element={
                <Cart/>
              }
            />
            <Route
              path="*"
              element={
                <NotFound/>
              }
            />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
