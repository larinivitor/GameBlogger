import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import Login from '../src/components/Scenes/Login/Login'
import LoginService from './components/Services/Login'
import Home from './components/Scenes/MainPage/Dashboard/Movies/Postagens'
import Menu from './components/Generic/Menu/Menu'
import NotFound from './components/Scenes/404/404'
import Add from './components/Scenes/MainPage/Dashboard/MovieForm/MovieForm'
import PostDetalhes from './components/Scenes/PostDetalhes/PostDetalhes'
import EditPost from './components/Scenes/EditPost/EditPost'

class App extends Component {

  logOut(){
    LoginService.logout()
        .then({

        }).catch({
          //warning
    })
  }

  render() {
    return (
      <div className="App">

        <Switch>
          <Route path="/404" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/add" exact component={Add} />
          <Route path="/editpost/:id?" exact component={EditPost} />
          <Route path="/PostDetalhes/:id?" exact component={PostDetalhes} />
          <Redirect to="/404" />
        </Switch>
      </div>
    );
  }
}
export default App;
