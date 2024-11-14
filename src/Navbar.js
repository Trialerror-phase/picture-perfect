import React from 'react';
import { Link } 
	from 'react-router-dom';
// Import the external CSS file for Navbar styles
import './Navbar.css'; 

const Navbar = () => {
	return (
		<nav className="navbar-container">
			<div className="logo">
				<img src=
"/home/otuya/react/a-picture-perfect-world/src/logo.svg"
					alt="Logo" />
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
				{/* Add more navigation items as needed */}
			</ul>
		</nav>
	);
};

export default Navbar;