import { Link } from 'react-router-dom';

const LocationBar = props => {
	return (
		<div className='LocationBar'>
			<Link to='/' className='linkOff'>
				Home
			</Link>
			<i className='fas fa-angle-right'></i>
			{/* <Link to="/src/view/Simplificacion.html" className="linkOn">SIMPLIFICACION</Link> */}
			<Link to={props.site} className='linkOn'>
				{props.siteName}
			</Link>
		</div>
	);
};

export default LocationBar;
