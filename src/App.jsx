import './App.css';
import React from 'react';
import { Footer, Recipe, Popular, Header} from './containers'
import { Brand, Navbar } from './components';
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Popular />
      <Recipe />
      <Footer />
    </div>
  );
}

export default App;