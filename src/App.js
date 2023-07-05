import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';

const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSingle1 = lazy(() => import('./pages/Project1.jsx'));
const ProjectSingle2 = lazy(() => import('./pages/Project2.jsx'));
const ProjectSingle3 = lazy(() => import('./pages/Project3.jsx'));
const ProjectSingle4 = lazy(() => import('./pages/Project4.jsx'));

function App() {
	return (
		<AnimatePresence>
			<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
				<Router>
					<ScrollToTop />
					<AppHeader />
					<Suspense fallback={""}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="projects" element={<Projects />} />
							
							<Route
								path="projects/project1"
								element={<ProjectSingle1 />}
							/>
							<Route
								path="projects/project2"
								element={<ProjectSingle2 />}
							/>
							<Route
								path="projects/project3"
								element={<ProjectSingle3 />}
							/>
							<Route
								path="projects/project4"
								element={<ProjectSingle4 />}
							/>

							<Route path="about" element={<About />} />
							<Route path="contact" element={<Contact />} />
						</Routes>
					</Suspense>
					<AppFooter />
				</Router>
				<UseScrollToTop />
			</div>
		</AnimatePresence>
	);
}

export default App;
