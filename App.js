// App.js
import Navbar from "../src/components/Navbar";
import About from "../src/components/About";
import Skills from "../src/components/Skills";
import Projects from "../src/components/Project";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import Hero from "../src/components/Hero";

export default function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}
