import React from "react";

//create your first component
import Nav from "./navbar.jsx"
import Header from "./header.jsx"
import Cards from "./cards.jsx"
import Footer from "./footer.jsx"

const Home = () => {
	return (
		<div>
			< Nav />
			< Header /> //"Jumbotron"
			< Cards />
			< Footer />
		</div>
	);
};

export default Home;