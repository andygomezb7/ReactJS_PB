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
            <div className="row flex-row">
              <div className="col-xs-12 col-md-4 hero-intro">
                <small>Eschado recientemente</small>
                <h1 class="display-2 premium-display-2">Retoma el ritmo</h1>
                <h3>Sigue disfrutando de la música que estabas escuchando justo donde la dejaste.</h3>
              </div>
              <div className="col-xs-12 col-md-8">
                <div class="row">
                  <div class="spotifyAlbumList">
                    <ul>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </section>
        </section>
      </section>
    );
  }
}

export default App;