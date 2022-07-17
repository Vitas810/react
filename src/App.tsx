import React from 'react';
import {Route, Routes} from "react-router-dom";
import {HomePages} from "./pages/HomePages";
import {FavoritesPage} from "./pages/FavoritesPage";
import {Navigation} from "./components/Navigation";

function App() {
  return (
      <>
        <Navigation />
          <Routes>
            <Route path="/" element={ <HomePages /> } />
            <Route path="/favorites" element={ <FavoritesPage /> } />
          </Routes>
      </>
  );
}

export default App;
