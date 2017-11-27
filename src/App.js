import React, { Component } from 'react';
import Sidebar from './components/sidebar.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
class App extends Component {
  render() {
    return (
      <section className="spotifyController">
        <Header />
        <section className="spotifyContainer">
          <Sidebar />
          <section className="spotifyContent">
            Content

            <Footer />
          </section>
        </section>
      </section>
    );
  }
}

export default App;
