import { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [isActive, setIsActive] = useState(false);
    return(
        <main id='Panel' className='Panel'>
        <menu>
            <div className='DropMenu'>
                <div className='BtnMenu' onClick={e => setIsActive(!isActive)}>
                    <span>Matematicas</span>
                    {isActive
                        ? <div className='DropMenuOpen'><i className='fas fa-angle-left'></i></div>
                        : <div className='DropMenuClose'><i className='fas fa-angle-left'></i></div>
                    }
                </div>
                {isActive && (
                    <div className='DropContent-open'>
                        <Link to='/Simplificador'>Simplificacion</Link>
                        <Link to='/Media,MedianaYmoda'>Media, Mediana y Moda</Link>
                    </div>
                )}
            </div>
        </menu>
    </main>
    )
}

export default Menu;