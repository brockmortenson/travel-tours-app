import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <div className='Nav'>
            <ul className='nav-links'>
                <Link><li>Home</li></Link>
                <Link><li>About Us</li></Link>
                <Link><li>Contact Us</li></Link>
                <Link><li><img className='cart-img' src='https://image.flaticon.com/icons/png/512/263/263142.png' alt='cart'/></li></Link>
            </ul>
        </div>
    );
}

export default Nav;