import React from "react";
import './App.css';
import Header from "./components/Header";
import Section2 from "./components/Carousel";
import Floating from "./components/Floating";
import { BrowserRouter , Route } from 'react-router-dom';
import Complaint from './components/complaint';
import Feedback from "./components/Feedback";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/com' component={Complaint} />
        <Route path='/fed' component={Feedback} />
        <Route path="/" exact component={() => <div>

           <Header/>
      <Section2/>
      <Floating />
        </div>
        }/>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
