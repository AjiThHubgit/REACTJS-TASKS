import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/App.css';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import NoPage from './components/NoPage';
import About from './pages/About';
import Details from './components/Details';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/details/:id' element={<Details />} />
				<Route path='/about' element={<About />} />
				<Route path='*' element={<NoPage />} />
			</Routes>
		</Router>
	);
}

export default App;





// BrowserRouter:

// Acts as the root component that enables routing in your React application.
// Uses the HTML5 history API to keep your UI in sync with the URL.
// Wrap your entire app or the part of your app where you want to enable routing.
// jsx
// Copy code
// <BrowserRouter>
//   {/* Your routes go here */}
// </BrowserRouter>
// Routes:

// A container for all your Route components.
// Replaces the older Switch component from React Router v5.
// Ensures that only the first route that matches the current location gets rendered.
// jsx
// Copy code
// <Routes>
//   {/* Individual Route components go here */}
// </Routes>
// Route:

// Defines a single route.
// Specifies the path and the component to render when the path matches the current URL.
// Can also use the element prop to directly pass the component to render.
// jsx
// Copy code
// <Route path="/home" element={<Home />} />