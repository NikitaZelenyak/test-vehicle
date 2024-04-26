import { Route, Routes, Navigate } from 'react-router-dom';
import { HeaderNav } from './Header/HeaderNav';
import { Hero } from '../pages/home/Hero';
import { Catalog } from '../pages/catalog/Catalog';
import { Favorites } from '../pages/favorites/Favorites';
import '../App.css';
export const App = () => {
  return (
    <div>
      <HeaderNav />
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
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};
