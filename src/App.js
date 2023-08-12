import React,{Component}from 'react';
// import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import {Link} from "react-router-dom"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import NewsItem from './components/NewsItem';
import NewsList from './components/NewsList';
import Entertainment from './components/Entertainment';
import World from './components/World'
import Health from './components/Health'
import Arts from './components/Arts'
import Footer from './components/Footer';
import Sports from './components/Sports';
import Science from './components/Science';

function App() {
  return (
  <>
  <Router>
  <Navbar/>

    <Routes>
      <Route exact path="/World" element={<World/>}></Route>
      <Route exact path="/Health" element={<Health/>}></Route>
      <Route exact path="/Arts" element={<Arts/>}></Route>
      <Route exact path="/Sports" element={<Sports/>}></Route>
      <Route exact path="/Science" element={<Science/>}></Route>
      <Route exact path="/World" element={<World/>}></Route>
      <Route exact path="/Entertainment" element={<Entertainment/>}></Route>


    </Routes>
  </Router>
  {/* <Navbar/> */}
{/* <Category/> */}
  <News/>
  <NewsList Category="sports"/>
  {/* <Subscribe/> */}
{/* <Sports/> */}
  </>
  );
}

export default App;


