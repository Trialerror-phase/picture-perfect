import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/Navbar';
import Introduction from "../src/Introduction"
import PhotoGallery from "../src/PhotoGallery"
import '../src/App.css';

function App() {
return (
	<Router>
	<div>
		<Navbar />
		<Routes>
		<Route path="/" element={<Introduction />} />
		<Route path="/gallery" element={<PhotoGallery />} />

		</Routes>
	</div>
	</Router>
);
}

export default App;