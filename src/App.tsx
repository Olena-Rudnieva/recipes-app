import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from './components';

const Recipes = lazy(() => import('./pages/recipes'));
const RecipeDetail = lazy(() => import('./pages/recipeDetail'));
const SelectedRecipes = lazy(() => import('./pages/selectedRecipes'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Recipes />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/selectedRecipes" element={<SelectedRecipes />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
