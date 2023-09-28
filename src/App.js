import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';
import "antd/dist/antd.css";
import "./index.css";
// import {Table,Select,Input,Button} from "antd"
import BookContainer from "./Book/books.container";
import { Route, Routes } from "react-router-dom";
import SignupForm from "./pages/SignupForm";
import LoginForm from "./pages/LoginForm";
// const Search = Input.Search;
// const InputGroup = Input.Group;
// const Option = Select.Option;

class App extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/books" element={<BookContainer />} />
      </Routes>
    );
  }
}

export default App;
