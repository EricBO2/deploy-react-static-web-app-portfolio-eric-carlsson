import React from 'react';
import './App.css';
import Image404 from './images/Image.jpeg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-header-titel">Eric Carlsson portfolio</h1>
        
      </header>
      <div className="App-body">
        
        <div className="App-body-row">
          <div className="App-body-component">
              <img src={Image404} alt="404 not found" />
              <h1>Black jack</h1>
              <p>Det va en uppgift då jag och en arbetskamrat jobbade tillsamans för att ska en black jack app som kunde andvändas för att öva på spelet.
                 Den saknar en frontend och betting men kan andvändas för att öva regelerna.</p>
                 <a href="https://github.com/Fatseal665/TDD_Uppgifter/blob/master/src/main/java/se/demo/cardgame/blackjackmechanics/UserInterface.java">
                 github</a>
          </div>
          <div className="App-body-component">
              <img src={Image404} alt="404 not found" />
          </div>
        </div>

        <div className="App-body-row">
          <div className="App-body-component">
              <img src={Image404} alt="404 not found" />
          </div>
          <div className="App-body-component">
            <img src={Image404} alt="404 not found" />
          
          </div>
        </div>






      </div>
      <footer className="App-footer">
        <p>Eric Carlsson</p>
        <p>Mail:<a href="mailto:eric.john.carlsson@gmail.com">eric.john.carlsson@gmail.com</a></p>
        <p>Telefon<a href="tel:+0738330508">: 073 833 05 08</a></p>
      </footer>
    </div>
  );
}

export default App;
