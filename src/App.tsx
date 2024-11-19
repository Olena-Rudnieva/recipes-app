import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from './components';

const Home = lazy(() => import('./pages/home'));
const Recipes = lazy(() => import('./pages/recipes'));
const SelectedRecipes = lazy(() => import('./pages/selectedRecipes'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/selectedRecipes" element={<SelectedRecipes />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
