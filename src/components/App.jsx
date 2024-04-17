import { Route, Routes } from "react-router-dom";
import { Header } from "./header/Header";
import { Hero } from "../pages/home/Hero";
import { Catalog } from "../pages/catalog/Catalog";
import { Favorites } from "../pages/favorites/Favorites";
import "../App.css";
export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Hero />
            </div>
          }
        ></Route>
        <Route path="/catalog" element={<Catalog />}></Route>
        <Route path="/favorites" element={<Favorites/>}></Route>
      </Routes>
    </div>
  );
};
