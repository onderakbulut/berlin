import './index.scss';

function Services() {
    return (  
        <div className='services'>
            <div className="services__inner">
                <div className="sercices__item">
                    <div className="services__title">
                        <h1>Services</h1>
                    </div>
                    <ul className="services__list">
                        <li><a href="#">Art Direction</a></li>
                        <li><a href="#">Typeface Design</a></li>
                        <li><a href="#">User Experience Design</a></li>
                        <li><a href="#">Information Architecture</a></li>
                    </ul>
                </div>
                <div className="sercices__item">
                    <div className="services__title">
                        <h1>Technologies</h1>
                    </div>
                    <ul className="services__list">
                        <li><a href="#">Figma</a></li>
                        <li><a href="#">React</a></li>
                        <li><a href="#">Vue</a></li>
                        <li><a href="#">Ghost</a></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Services;