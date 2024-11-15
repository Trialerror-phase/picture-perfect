import React from 'react';
import { Link }
	from 'react-router-dom';
// Import the external CSS file for Navbar styles
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className="navbar-container">
			<div className="logo">
				<img src="/bdfc31906a0cbd76e0e0b4c738edcebf.jpg" alt="Logo" /> 
			</div>
			
			<ul className="nav-links">
				<li><Link to="/">
					Home
				</Link></li>
				<li>
					<Link to="/gallery">
						Gallery
					</Link>
				</li>
				<li>
					<Link to="/gallery">
						Blog
					</Link>
				</li>
				<li>
					<Link to="/gallery">
						Contact Us
					</Link>
				</li>
				<li>
					<Link to="/gallery">
						Gallery
					</Link>
				</li>


			</ul>
		</nav>
	);
};

export default Navbar;