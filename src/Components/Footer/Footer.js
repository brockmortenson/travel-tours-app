import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='subscribe-box'>
                <h1>Subscribe to receive weekly offers!</h1>
                <form className='subscribe' method="POST" action="send">
                <p>
                    <input className='input-email' type='email' name='email' placeholder='Email' />
                </p>
                <p>
                    <button type='submit'>Subscribe</button>
                </p>
                </form>
            </div>
        </div>
    )
}

export default Footer;