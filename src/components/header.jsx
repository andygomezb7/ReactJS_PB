import React from 'react';
import { Dropdown, MenuItem } from 'react-bootstrap';

class Header extends React.Component {

	render() {
		return (
			<header className="navbar navbar-default navbar-fixed-top navbar-transparent navbar-highlight-black">
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
							<li>
								<a href="">Premium</a>
							</li>
							<li>
								<a href="">Ayuda</a>
							</li>
							<li>
								<a href="">Descargar</a>
							</li>
							<li role="separator" className="divider"></li>
							<li>
								<Dropdown id="dropdownUser">
									<Dropdown.Toggle>
										<img src="https://ruclip.com/chimg/84/UC3biv9gIP2KiaBmBy8Phe0Q.jpg" style={{width:'40px',height:'40px'}} className="img-circle" alt="Logo" /> 
										<span>Perfil</span>
										<span></span>
									</Dropdown.Toggle>
									<Dropdown.Menu>
										<MenuItem>Premium</MenuItem>
										<MenuItem>Ayuda</MenuItem>
										<MenuItem>Descargar</MenuItem>
									</Dropdown.Menu>
								</Dropdown>
							</li>
						</ul>
					</div>
				</div>
			</header>
		)
	}

}

export default Header;