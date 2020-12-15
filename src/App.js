import React, {Component} from 'react';
import Todolist from './components/Todolist';
import Home from './components/Home';
import News from './components/News.js'
import './assets/css/App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


function App() {
    //这边放的是模版
    return (
        <Router>
            <div className="App">
                <header className="nav_box">
                    <Link to = "/">Home</Link>
                    <Link to = "/news">News</Link>
                    <Link to = "/todolist">ToDoList</Link>
                </header>
                <Route exact path="/" component={Home}/>
                <Route path="/news" component={News}/>
                <Route path="/todolist" component={Todolist}/>
            </div>
        </Router>
    );
}

export default App;
