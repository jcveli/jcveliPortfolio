import './App.scss';
import Home from './routes/home/home.component'
import About from './routes/about/about.component';
import Project from './routes/projects/projects.component';
import Navbar from './components/navbar/navbar.component';
import Contact from './routes/contact/contact.component';
import {Routes, Route, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import '@coreui/coreui/dist/css/coreui.min.css'

function App() {
	const location = useLocation();
	return (
		<div className='App'>
			<Navbar />
	
	
			
			<AnimatePresence initial={true} mode='wait'>
				<Routes location={location} key={location.pathname}>
					<Route path='/' element={<Home />} /> 
				</Routes>
			</AnimatePresence>
			
			
		
		</div>
	  );
 
}

export default App;
