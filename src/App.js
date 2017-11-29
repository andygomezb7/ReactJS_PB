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
                <small>Escuchado recientemente</small>
                <h1 class="display-2 premium-display-2">Retoma el ritmo</h1>
                <h3>Sigue disfrutando de la música que estabas escuchando justo donde la dejaste.</h3>
                <a class="btn btn-lg btn-player" role="button">Abrir reproductor web</a>
              </div>
              <div className="col-xs-12 col-md-8">
                <div class="row">
                  <div class="spotifyAlbumList">
                    <ul>
                      <li className="col-xs-12 col-sm-4">
                        <a href="javascript:void(0)">
                          <div className="box">
                            <div className="content">
                              <img className="img-responsive" src="https://i.scdn.co/image/70bb8c570903c381426b8a2c55fa01f4b5608008" />
                            </div>
                          </div>
                          <div className="overlay"></div>
                          <div className="description">
                            <svg id="album-play" viewBox="0 0 25.4 25.4" width="100%" height="100%">
                              <path fill="#ffffff" d="M12.7,25.4A12.7,12.7,0,1,1,25.4,12.7,12.71,12.71,0,0,1,12.7,25.4Zm0-24A11.3,11.3,0,1,0,24,12.7,11.31,11.31,0,0,0,12.7,1.4Z"></path>
                              <path fill="#ffffff" d="M11,16.47,17,13a.34.34,0,0,0,0-.59L11,8.93a.34.34,0,0,0-.51.29v7A.34.34,0,0,0,11,16.47Z"></path>
                              <path fill="#ffffff" d="M12.7,25.4A12.7,12.7,0,1,1,25.4,12.7,12.71,12.71,0,0,1,12.7,25.4Zm0-24A11.3,11.3,0,1,0,24,12.7,11.31,11.31,0,0,0,12.7,1.4Z"></path>
                              <path fill="#ffffff" d="M11,16.47,17,13a.34.34,0,0,0,0-.59L11,8.93a.34.34,0,0,0-.51.29v7A.34.34,0,0,0,11,16.47Z"></path>
                            </svg>
                            <h2>Havana</h2>
                            <h4>Camila cabello</h4>
                          </div>
                        </a>
                      </li>
                      <li className="col-xs-12 col-sm-4">
                        <a href="javascript:void(0)">
                          <div className="box">
                            <div className="content">
                              <img className="img-responsive" src="https://i.scdn.co/image/400c2aacb056cd051afedee8a4896a97c079e68d" />
                            </div>
                          </div>
                          <div className="overlay"></div>
                          <div className="description">
                            <svg id="album-play" viewBox="0 0 25.4 25.4" width="100%" height="100%">
                              <path fill="#ffffff" d="M12.7,25.4A12.7,12.7,0,1,1,25.4,12.7,12.71,12.71,0,0,1,12.7,25.4Zm0-24A11.3,11.3,0,1,0,24,12.7,11.31,11.31,0,0,0,12.7,1.4Z"></path>
                              <path fill="#ffffff" d="M11,16.47,17,13a.34.34,0,0,0,0-.59L11,8.93a.34.34,0,0,0-.51.29v7A.34.34,0,0,0,11,16.47Z"></path>
                              <path fill="#ffffff" d="M12.7,25.4A12.7,12.7,0,1,1,25.4,12.7,12.71,12.71,0,0,1,12.7,25.4Zm0-24A11.3,11.3,0,1,0,24,12.7,11.31,11.31,0,0,0,12.7,1.4Z"></path>
                              <path fill="#ffffff" d="M11,16.47,17,13a.34.34,0,0,0,0-.59L11,8.93a.34.34,0,0,0-.51.29v7A.34.34,0,0,0,11,16.47Z"></path>
                            </svg>
                            <h2>Havana</h2>
                            <h4>Camila cabello</h4>
                          </div>
                        </a>
                      </li>
                      <li className="col-xs-12 col-sm-4">
                        <a href="javascript:void(0)">
                          <div className="box">
                            <div className="content">
                              <img className="img-responsive" src="https://i.scdn.co/image/456dde19279df52276d2f1e1b7cb4a737c0c82b7" />
                            </div>
                          </div>
                          <div className="overlay"></div>
                          <div className="description">
                            <svg id="album-play" viewBox="0 0 25.4 25.4" width="100%" height="100%">
                              <path fill="#ffffff" d="M12.7,25.4A12.7,12.7,0,1,1,25.4,12.7,12.71,12.71,0,0,1,12.7,25.4Zm0-24A11.3,11.3,0,1,0,24,12.7,11.31,11.31,0,0,0,12.7,1.4Z"></path>
                              <path fill="#ffffff" d="M11,16.47,17,13a.34.34,0,0,0,0-.59L11,8.93a.34.34,0,0,0-.51.29v7A.34.34,0,0,0,11,16.47Z"></path>
                              <path fill="#ffffff" d="M12.7,25.4A12.7,12.7,0,1,1,25.4,12.7,12.71,12.71,0,0,1,12.7,25.4Zm0-24A11.3,11.3,0,1,0,24,12.7,11.31,11.31,0,0,0,12.7,1.4Z"></path>
                              <path fill="#ffffff" d="M11,16.47,17,13a.34.34,0,0,0,0-.59L11,8.93a.34.34,0,0,0-.51.29v7A.34.34,0,0,0,11,16.47Z"></path>
                            </svg>
                            <h2>Havana</h2>
                            <h4>Camila cabello</h4>
                          </div>
                        </a>
                      </li>

                      <li className="col-xs-12 col-sm-4">
                        <a href="javascript:void(0)">
                          <div className="box">
                            <div className="content">
                              <img className="img-responsive" src="https://i.scdn.co/image/400c2aacb056cd051afedee8a4896a97c079e68d" />
                            </div>
                          </div>
                          <div className="overlay"></div>
                          <div className="description">
                            <svg id="album-play" viewBox="0 0 25.4 25.4" width="100%" height="100%">
                              <path fill="#ffffff" d="M12.7,25.4A12.7,12.7,0,1,1,25.4,12.7,12.71,12.71,0,0,1,12.7,25.4Zm0-24A11.3,11.3,0,1,0,24,12.7,11.31,11.31,0,0,0,12.7,1.4Z"></path>
                              <path fill="#ffffff" d="M11,16.47,17,13a.34.34,0,0,0,0-.59L11,8.93a.34.34,0,0,0-.51.29v7A.34.34,0,0,0,11,16.47Z"></path>
                              <path fill="#ffffff" d="M12.7,25.4A12.7,12.7,0,1,1,25.4,12.7,12.71,12.71,0,0,1,12.7,25.4Zm0-24A11.3,11.3,0,1,0,24,12.7,11.31,11.31,0,0,0,12.7,1.4Z"></path>
                              <path fill="#ffffff" d="M11,16.47,17,13a.34.34,0,0,0,0-.59L11,8.93a.34.34,0,0,0-.51.29v7A.34.34,0,0,0,11,16.47Z"></path>
                            </svg>
                            <h2>Havana</h2>
                            <h4>Camila cabello</h4>
                          </div>
                        </a>
                      </li>
                      <li className="col-xs-12 col-sm-4">
                        <a href="javascript:void(0)">
                          <div className="box">
                            <div className="content">
                              <img className="img-responsive" src="https://i.scdn.co/image/400c2aacb056cd051afedee8a4896a97c079e68d" />
                            </div>
                          </div>
                          <div className="overlay"></div>
                          <div className="description">
                            <svg id="album-play" viewBox="0 0 25.4 25.4" width="100%" height="100%">
                              <path fill="#ffffff" d="M12.7,25.4A12.7,12.7,0,1,1,25.4,12.7,12.71,12.71,0,0,1,12.7,25.4Zm0-24A11.3,11.3,0,1,0,24,12.7,11.31,11.31,0,0,0,12.7,1.4Z"></path>
                              <path fill="#ffffff" d="M11,16.47,17,13a.34.34,0,0,0,0-.59L11,8.93a.34.34,0,0,0-.51.29v7A.34.34,0,0,0,11,16.47Z"></path>
                              <path fill="#ffffff" d="M12.7,25.4A12.7,12.7,0,1,1,25.4,12.7,12.71,12.71,0,0,1,12.7,25.4Zm0-24A11.3,11.3,0,1,0,24,12.7,11.31,11.31,0,0,0,12.7,1.4Z"></path>
                              <path fill="#ffffff" d="M11,16.47,17,13a.34.34,0,0,0,0-.59L11,8.93a.34.34,0,0,0-.51.29v7A.34.34,0,0,0,11,16.47Z"></path>
                            </svg>
                            <h2>Havana</h2>
                            <h4>Camila cabello</h4>
                          </div>
                        </a>
                      </li>
                      <li className="col-xs-12 col-sm-4">
                        <a href="javascript:void(0)">
                          <div className="box">
                            <div className="content">
                              <img className="img-responsive" src="https://i.scdn.co/image/400c2aacb056cd051afedee8a4896a97c079e68d" />
                            </div>
                          </div>
                          <div className="overlay"></div>
                          <div className="description">
                            <svg id="album-play" viewBox="0 0 25.4 25.4" width="100%" height="100%">
                              <path fill="#ffffff" d="M12.7,25.4A12.7,12.7,0,1,1,25.4,12.7,12.71,12.71,0,0,1,12.7,25.4Zm0-24A11.3,11.3,0,1,0,24,12.7,11.31,11.31,0,0,0,12.7,1.4Z"></path>
                              <path fill="#ffffff" d="M11,16.47,17,13a.34.34,0,0,0,0-.59L11,8.93a.34.34,0,0,0-.51.29v7A.34.34,0,0,0,11,16.47Z"></path>
                              <path fill="#ffffff" d="M12.7,25.4A12.7,12.7,0,1,1,25.4,12.7,12.71,12.71,0,0,1,12.7,25.4Zm0-24A11.3,11.3,0,1,0,24,12.7,11.31,11.31,0,0,0,12.7,1.4Z"></path>
                              <path fill="#ffffff" d="M11,16.47,17,13a.34.34,0,0,0,0-.59L11,8.93a.34.34,0,0,0-.51.29v7A.34.34,0,0,0,11,16.47Z"></path>
                            </svg>
                            <h2>Havana</h2>
                            <h4>Camila cabello</h4>
                          </div>
                        </a>
                      </li>
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