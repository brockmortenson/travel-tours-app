import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Nav.css';

function Nav() {
    const [ open, setOpen ] = useState(false);

    function handleOpen() {
        setOpen(!open)
    }

    return (
        <div className='Nav'>
            <div>
                <input className='toggler' type='checkbox' onClick={handleOpen} />
                <div className='burger'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>
            </div>
            <ul className='nav-links'>
                <Link to='/Home' style={{ textDecoration: 'none', color: 'black' }}><li className='nav-home'>Home</li></Link>
                <Link to='About' style={{ textDecoration: 'none', color: 'black' }}><li className='nav-about'>About Us</li></Link>
                <Link to='Contact' style={{ textDecoration: 'none', color: 'black' }}><li className='nav-contact'>Contact Us</li></Link>
                <Link to='Cart' ><li><img className='cart-img' src='https://image.flaticon.com/icons/png/512/263/263142.png' alt='cart'/></li></Link>
                {/* <Link to='/ChangePass' style={{ textDecoration: 'none', color: 'black'}}>Change password</Link> */}
                {/* will add changepass again later */}
            </ul>
            { open ?
                <ul className='toggled'>
                    <Link to='/Home' style={{ textDecoration: 'none', color: 'black' }}><li>Home</li></Link>
                    <Link to='About' style={{ textDecoration: 'none', color: 'black' }}><li>About Us</li></Link>
                    <Link to='Contact' style={{ textDecoration: 'none', color: 'black' }}><li>Contact Us</li></Link>
                    <Link to='Cart' ><li><img src='https://image.flaticon.com/icons/png/512/263/263142.png' alt='cart'/></li></Link>
                </ul>
                : null
                }
        </div>
    );
}

export default Nav;