import { Routes, Route } from 'react-router-dom';
import { dataProperties } from './dataProperties';
import Header from './components/header/Header';
import Home from './components/home/Home';
import AboutUs from './components/about-us/About';
import Properties from './components/properties/Properties';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
	const firstThreeProps = dataProperties.slice(0, 3);

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
							<Properties properties={firstThreeProps} root={'root'} />
							<Contact />
						</>
					}
				/>
				<Route
					path="/properties"
					element={<Properties properties={dataProperties} />}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
