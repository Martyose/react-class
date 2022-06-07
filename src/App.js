import './App.css';
import React from 'react';
import Header from './component/header/Header';
import Body from './body/Body.jsx';
import Footer from './component/footer/Footer.jsx';
// import About from './About/About.jsx';


function App(props) {



 const myDate = () =>{
   return Date();
 }

    function ho() {
      const subject = 'English';
      return subject;
    }

      
const change = () =>{
  return Math.floor(Math.random()*5) + 1
}



  return(
    <div className="App">  

      <Body name = "Marty" mycourse = {ho()} getrandom ={change()}  />

        <Header />      
      {/* <About /> */}
      <Footer TheDate = {myDate()}/>

      </div>
  )
}

export default App;