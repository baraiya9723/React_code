import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  const [color,setColor] = useState('black')
  const chnagecolor = ()=>{
    const colorlist = ['red','yellow','green','black']
    setColor(colorlist[Math.floor(Math.random()*colorlist.length)])
    console.log(colorlist[Math.floor(Math.random()*colorlist.length)])
  }
  return (
    <div className="App" style={{backgroundColor:color}}>
      <Navbar />
      <header className="App-header">
        <h1>Welcome to My Website</h1>
        <p>This is a simple React website for learning purposes.</p>
        <button onClick={chnagecolor} className='button'>click for color changes </button>
      </header>
      <Footer />
    </div>
  );
}

export default App;
