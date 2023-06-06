import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
 


function App() {
  return (
    <div className="App" >
      <Header/>
      <header className="App-header">

        <p>
          <img src="https://scontent.fosl4-2.fna.fbcdn.net/v/t1.15752-9/297049970_948898449841581_3182713427378061223_n.jpg?_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=uXwXhUGOUAcAX8mkH6J&_nc_ht=scontent.fosl4-2.fna&oh=03_AdSeJvO1eROiSIPVsyG0RYpyWH228f8pA-gtVxL6Djg1fw&oe=64A42D3C"
          height="500px"/>
        </p>

        <p style={{color: "black"}}>
          Dato: TBA
        </p>
        <p style={{color: "black"}}>
          Turneringsformat: Scramble
        </p>
        <p style={{color: "black"}}>
        
          Stad: Overvoll Golfbane
        </p>
      </header>
    </div>
  );
}

export default App;
