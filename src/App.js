import React, { Component } from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

class App extends Component {
  render() {
    return (
      <section className="spotifyController">
        <Header />
        <section className="spotifyContainer">
          <div className="bgColor"></div>
          <div className="bgBlack"></div>
          <section className="spotifyContent container">
            <Footer />
          </section>
        </section>
      </section>
    );
  }
}

export default App;