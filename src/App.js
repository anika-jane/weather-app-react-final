import React from "react";
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
     <footer>
      This porject was coded by{" "} Anika Jane and it is{" "}   
     <a  href="https://github.com/anika-jane/weather-app-react-final" tragert="_blank">open-sourced on Github</a>
     </footer>
     </div>
    </div>
  );
}

