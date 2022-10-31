import React,{Component}from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import NewsItem from './components/NewsItem';
import NewsList from './components/NewsList';
import Category from './components/Category';
// import Sports from './components/Sports';

function App() {
  return (
  <>
  <Navbar/>
{/* <Category/> */}
  <News/>
  <NewsList />
{/* <Sports/> */}
  </>
  );
}

export default App;


