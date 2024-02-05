import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import AboutUs from './components/about-us/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
	// const firstThreeProjects = projects.slice(0, 3);

	return (
		<div className="App">
			<Header />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Home />
							<AboutUs />
							{/* <Properties projects={firstThreeProjects} root={'root'} /> */}
							<Contact />
						</>
					}
				/>
				{/* <Route path="/properities" element={<Projects projects={projects} />} /> */}
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
