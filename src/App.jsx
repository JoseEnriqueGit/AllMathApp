// Imports React
import { Route, Routes} from 'react-router-dom';
// Css
import '../public/Css/index.css';
// Components
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import CardSimplificador from './components/cards/CardSimplificador';
import CardMMM from './components/cards/CardMMM';


function Home() {
	return (
		<Menu />
	);
}

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route index element={<Home />} />
				<Route path='/Simplificador' element={<CardSimplificador />} />
				<Route path='/Media,MedianaYmoda' element={<CardMMM />} />
			</Routes>
		</>
	);
}

export default App;
