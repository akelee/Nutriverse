import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/home/Home";
import Recipe from "./pages/recipe/Recipe";
import Popular from "./pages/popular/Popular";
import SignUp from "./pages/signUp/SignUp";
import SignIn from "./pages/signIn/SignIn";
import UserInput from "./pages/userInput/UserInput";
import Meal from "./pages/meal/Meal";
import Plan from "./pages/plan/Plan";
import About from "./pages/about/About";
import Values from "./pages/values/Values";
import Goals from "./pages/goals/Goals";
import SignUpValidate from "./pages/signUpValidate/SignUpValidate";
import ByNutrients from "./pages/byNutrients/ByNutrients";
import ByIngredients from "./pages/byIngredients/ByIngredients";
import AnalyseRecipes from "./pages/analyseRecipes/AnalyseRecipes";
import ByNutrientsList from "./pages/ByNutrientsList";
import Navbar from "./components/navbar/Navbar";
import RecipeList from "./pages/RecipeList";
import SignUpSuccessful from "./pages/signUpSuccessful/SignUpSuccessful";
import Account from "./pages/account/Account";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userinput" element={<UserInput />} />
        <Route path="/meal" element={<Meal />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/values" element={<Values />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/byNutrients" element={<ByNutrients />} />
        <Route path="/byIngredients" element={<ByIngredients />} />
        <Route path="/analyseRecipes" element={<AnalyseRecipes />} />
        <Route path="/byNutrientsList" element={<ByNutrientsList />} />
        <Route path="/signupvalidate" element={<SignUpValidate />} />
        <Route path="/recipelist" element={<RecipeList />} />
        <Route path="/success" element={<SignUpSuccessful />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
