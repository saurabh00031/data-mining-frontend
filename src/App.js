// src/App.js
import React from 'react';
import './App.css';
import HomePage from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Assignment1 from './Components/Assignment1';
import FileUpload from './Components/FileUpload';
import CSVUploader from './Components/CSVUploader';
import Assignment2 from './Components/Assignment2';
import Assignment3 from './Components/Assignment3';
import Assignment4 from './Components/Assignment4';
import Assignment5 from './Components/Assignment5';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Assignment1_que2 from './Components/Assignment1_que2';
import Ast1 from './Components/Ast1';
import Assignmnet6 from './Components/Assignmnet6';
import Assignment7 from './Components/Assignment7';
import Assignment8 from './Components/Assignment8';
import Assignment8_1 from './Components/Assignment8_1';
import Assignment7_a from './Components/Assignment7_a';
import Assignment8_2 from './Components/Assignment8_2';
import Assignment7_b from './Components/Assignment7_b';
import Assignment6_a from './Components/Assignment6_a';


function App() {
  return (
    <Router>
      <div className="d-flex flex-row">


       <Nav/>
       <div className="row">
      <Routes>
        <Route path="/" exact element={<Ast1/>} />
        <Route path="/file_upload" exact element={<FileUpload/>} />
        <Route path="/csv_upload" exact element={<CSVUploader/>} />
        <Route path="/assignment_1" exact element={<Assignment1/>} />
        <Route path="/assignment_1_que2" exact element={<Assignment1_que2/>} />
        <Route path="/assignment_2" exact element={<Assignment2/>} />
        <Route path="/assignment_3" exact element={<Assignment3/>} />
        <Route path="/assignment_4" exact element={<Assignment4/>} />
        <Route path="/assignment_5" exact element={<Assignment5/>} />
        <Route path="/assignment_6" exact element={<Assignmnet6/>} />
        <Route path="/assignment_6_a" exact element={<Assignment6_a/>} />
        <Route path="/assignment_7" exact element={<Assignment7/>} />
        <Route path="/assignment_7_a" exact element={<Assignment7_a/>} />
        <Route path="/assignment_7_b" exact element={<Assignment7_b/>} />
        <Route path="/assignment_8" exact element={<Assignment8/>} />
        <Route path="/assignment_8_a" exact element={<Assignment8_1/>} />
        <Route path="/assignment_8_b" exact element={<Assignment8_2/>} />






      
      </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;