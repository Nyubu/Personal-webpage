import React, { Component } from 'react';
import Menu from './components/menu/Menu';
import Introduction from './components/introduction/Introduction';
import Footer from './components/footer/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
    
        {/* Navigation Bar */}
        {/*<Header />*/}

        {/* Introduction */}
        <Introduction />

        {/* Menu */}
        <Menu />

        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
