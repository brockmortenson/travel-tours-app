import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <div className='Nav'>
            <ul className='nav-links'>
                <Link style={{ textDecoration: 'none', color: 'black' }}><li className='nav-home'>Home</li></Link>
                <Link style={{ textDecoration: 'none', color: 'black' }}><li className='nav-about'>About Us</li></Link>
                <Link style={{ textDecoration: 'none', color: 'black' }}><li className='nav-contact'>Contact Us</li></Link>
                <Link><li><img className='cart-img' src='https://image.flaticon.com/icons/png/512/263/263142.png' alt='cart'/></li></Link>
            </ul>
        </div>
    );
}

export default Nav;