import React from 'react';
import { Dropdown, MenuItem } from 'react-bootstrap';

class Header extends React.Component {

	render() {
		return (
			<header className="navbar navbar-default navbar-fixed-top navbar-transparent navbar-highlight-black" onScroll={ this.onScroll }>
				<div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="sidepanel" data-target="#navbar-nav">
				          <span className="sr-only">Toggle navigation</span>
				          <span className="icon-bar"></span>
				          <span className="icon-bar"></span>
				          <span className="icon-bar"></span>
				        </button>
				        <a className="navbar-brand" href="">
							<span className="navbar-logo">Spotify</span>
						</a>
					</div>
					<div className="collapse navbar-collapse" role="navigation" id="navbar-nav">
						<ul className="nav navbar-nav navbar-right nav-main">
							<li className="principal">
								<a href="">Premium</a>
							</li>
							<li className="principal">
								<a href="">Ayuda</a>
							</li>
							<li className="principal">
								<a href="">Descargar</a>
							</li>
							<li role="separator" className="divider"></li>
							<li  className="principal">
								<Dropdown id="dropdownUser">
									<Dropdown.Toggle>
										<img src="https://ruclip.com/chimg/84/UC3biv9gIP2KiaBmBy8Phe0Q.jpg" style={{width:'40px',height:'40px'}} className="img-circle" alt="Logo" /> 
										<span className="profileText">Perfil</span>
										<span className="caret-bottom">
											<svg id="chevron-down" viewBox="0 0 1024 1024" width="100%" height="100%">
											  <path className="path1" d="M476.455 806.696l-381.164-381.164q-14.621-14.621-14.621-35.293t14.621-34.789 35.293-14.117 34.789 14.117l342.846 343.35 349.4-349.4q14.621-14.117 35.293-14.117t34.789 14.117 14.117 34.789-14.117 34.789l-381.164 381.164q-19.159 19.159-38.318 19.159t-31.764-12.605z"></path>
											</svg>
										</span>
									</Dropdown.Toggle>
									<Dropdown.Menu>
										<MenuItem>Cuenta</MenuItem>
										<MenuItem className="logout-link">Cerrar Sesión</MenuItem>
									</Dropdown.Menu>
								</Dropdown>
							</li>
						</ul>
					</div>
				</div>
			</header>
		)
	}

	onScroll(r, s) {
        console.log('s', s);
    }

}

export default Header;