import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/home';
import Recipe from './pages/recipe/Recipe';
import Popular from './pages/popular/Popular';
import Signup from './pages/signup/Signup';
import SignIn from './pages/signIn/SignIn';
import UserInput from './pages/userInput/UserInput';
import Meal from './pages/meal/Meal';
import Plan from './pages/plan/Plan';
import About from './pages/about/About';
import Values from './pages/values/Values';
import Goals from './pages/goals/Goals';
import SignUpValidate from './pages/signUpValidate/SignUpValidate';
import { Navbar } from './components';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>  
        <Route path="/recipe" element= {<Recipe/>} />
        <Route path="/home" element= {<Home/>} />
        <Route path="/popular" element= {<Popular/>} />
        <Route path="/signup" element= {<Signup/>} />
        <Route path="/userInput" element= {<UserInput/>} />
        <Route path="/meal" element= {<Meal/>} />
        <Route path="/plan" element= {<Plan/>} />
        <Route path="/about" element= {<About/>} />
        <Route path="/values" element= {<Values/>} />
        <Route path="/goals" element= {<Goals/>} />
        <Route path="/signIn" element= {<SignIn/>} />
        <Route path="/signUpValidate" element = { <SignUpValidate/>} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

