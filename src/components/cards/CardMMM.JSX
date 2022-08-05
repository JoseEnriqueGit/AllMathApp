import {MMMEvent} from '../../logic/interactive';
import LocationBar from '../LocationBar';
// const CardMMM = () =>
function CardMMM() {
	return (
		<main id='Panel' className='Panel'>
			<LocationBar site='/src/view/MMM' siteName='Media, Mediana y Moda' />

			<div className='Tarjeta'>
				<span className='Tarjeta-title'>Media, Mediana y Moda</span>
				<div className='InputList'>
					<label>
						Tu lista de numeros:
						<textarea id='InputList' name='textarea' rows='5'></textarea>
					</label>
				</div>
				<div className='OutPut'>
					<div className='DivMedia'>
						<span>Media</span>
						<div id='DisplayMedia'></div>
					</div>
					<div className='DivMediana'>
						<span>Mediana</span>
						<div id='DisplayMediana'></div>
					</div>
					<div className='DivModa'>
						<span>Moda</span>
						<div id='DisplayModa'></div>
					</div>
				</div>

				<div className='DivAlert'>
					<span className='Alert'>
						<i className='fas fa-exclamation-triangle'></i>
					</span>
				</div>

				<div id='DetallesOpMMM' className='DetallesOpMMM'>
					<div className='DetallesMedia'>
						<span>Media</span>
						<div className='DivSum'>
							<span className='FontRed'></span>
						</div>
						<div className='DivisionOp'>
							<div className='Division'>
								<div id='NumeradorMedia' className='Numerador'></div>
								<div className='Line'></div>
								<div id='DenominadorMedia' className='Numerador'></div>
							</div>
							<span className='SignoIqual'>=</span>
							<div id='ResultDivisionMedia' className='ResultDivision'></div>
						</div>
					</div>

					<div className='DetallesMediana'>
						<span>Mediana</span>
						<div id='DisplayMedianaDetalles' className='DisplayMediana'></div>

						<div id='DivSumMediana' className='DivSum'>
							<div id='SumMediana' className='Sum'></div>
							<span className='SignoIqual'>=</span>
							<div id='SumResult' className='SumResult'></div>
						</div>

						<div id='DivisionOpMediana' className='DivisionOp'>
							<div className='Division'>
								<div id='NumeradorMediana' className='Numerador'></div>
								<div className='Line'></div>
								<div id='DenominadorMediana' className='Denominador'>
									2
								</div>
							</div>
							<span className='SignoIqual'>=</span>
							<div id='ResultDivisionMediana' className='ResultDivision'>
								<span className='FontRed'></span>
							</div>
						</div>
					</div>
				</div>
				<button onClick={MMMEvent} className='BtnResolver' id='Resolver'>
					RESOLVER
				</button>
			</div>
		</main>
	);
}

export default CardMMM;