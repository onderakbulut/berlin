import './index.scss';

function Footer() {
    return (  
        <div className='footer'>
            <div className="footer__inner">
                <div className='grid lg:grid-cols-2'>
                    <div className="footer__subscribe">
                        <h2>NEWSLETTER</h2>
                        <form action="" className='flex'>
                            <input type="email" placeholder="Enter your email" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
                <ul className="social">
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Dribbble</a></li>
                    <li><a href="#">LinkedIn</a></li>
                    <li><a href="#">mail@example.com</a></li>
                </ul>
                <div className="footer__copyright">
                    © 2024 Berlin -
                    Copyright © 2024 All rights reserved
                </div>
            </div>
        </div>
    );
}

export default Footer;