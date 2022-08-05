import {MostrarFraccionSimplificada} from '../../logic/interactive';
import LocationBar from '../LocationBar';

const CardSimplificador = () => {
	return (
		<main id='Panel' className='Panel'>
			<LocationBar site='/src/view/Simplificacion' siteName='Simplificacion' />

			<div className='Tarjeta'>
				<span className='Tarjeta-title'>FRACCION</span>
				<div className='PanelOperacion'>
					<div className='PartesFraccion'>
						<span>NUMERADOR</span>
						<span>DENOMINADOR</span>
					</div>
					<div className='Fraccion'>
						<div className="DivInput"><input id="Numerador" type="number" pattern="[\d]"/></div>
						<div className='FraccionLine'></div>
						<div className="DivInput"><input id="Denominador" type="number" pattern="[\d]"/></div>
					</div>
					<span className='SignoIqual'>=</span>
					<div className='FraccionResult'>
						<div className='NumeradorResult'></div>
						<div className='FraccionLine'></div>
						<div className='DenominadorResult'></div>
					</div>
				</div>

				<div className='DivAlert'>
					<span className='Alert'>
						<i className='fas fa-exclamation-triangle'></i>
					</span>
				</div>

				<div className='DetallesOperacion'>
					<div className='PartesFraccionDetalles'>
						<span>NUMERADOR</span>
						<span>DENOMINADOR</span>
						<span>NUMERO PRIMO</span>
					</div>
					<div className='DetallesFraccionResult'>
						<div className='Fracciones'></div>
					</div>
				</div>

				<button onClick={MostrarFraccionSimplificada} className='BtnResolver' id='Resolver'>
					RESOLVER
				</button>
			</div>
		</main>
	);
}

export default CardSimplificador;