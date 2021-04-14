import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <div className='Nav'>
            <ul className='nav-links'>
                <Link to='/Home' style={{ textDecoration: 'none', color: 'black' }}><li className='nav-home'>Home</li></Link>
                <Link to='About' style={{ textDecoration: 'none', color: 'black' }}><li className='nav-about'>About Us</li></Link>
                <Link to='Contact' style={{ textDecoration: 'none', color: 'black' }}><li className='nav-contact'>Contact Us</li></Link>
                <Link to='Cart' ><li><img className='cart-img' src='https://image.flaticon.com/icons/png/512/263/263142.png' alt='cart'/></li></Link>
            </ul>
        </div>
    );
}

export default Nav;