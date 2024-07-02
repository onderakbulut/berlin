import './index.scss';
import { Link } from 'react-router-dom';

function Work({ showTitle = true }) {
    return (  
        <div className='work'>
            {showTitle && <div className="work__title">Work</div>}
            <div className="work__content">
                <div className="work__content-item">
                    <div className="work__content-media">
                        <img src="./img/work-banner-1.jpg" alt="" />
                    </div>
                    <div className="work__content-title">
                        <Link to='/work-detail'>On Photography</Link>
                    </div>
                    <div className="work__content-tags">
                        <a href='#'>Art Direction</a>
                        &ensp; ✺ &ensp;
                        <a href='#'>Web Design</a>
                    </div>
                </div>
                <div className="work__content-item">
                    <div className="work__content-media">
                        <img src="./img/work-banner-2.jpg" alt="" />
                    </div>
                    <div className="work__content-title">
                        <Link to='/work-detail'>On Magazines</Link>
                    </div>
                    <div className="work__content-tags">
                        <a href='#'>App Design</a>
                        &ensp; ✺ &ensp;
                        <a href='#'>Copy Writing</a>
                    </div>
                </div>
                <div className="work__content-item">
                    <div className="work__content-media">
                        <img src="./img/work-banner-3.jpg" alt="" />
                    </div>
                    <div className="work__content-title">
                        <Link to='/work-detail'>Books</Link>
                    </div>
                    <div className="work__content-tags">
                        <a href='#'>Art Direction</a>
                        &ensp; ✺ &ensp;
                        <a href='#'>App Design</a>
                    </div>
                </div>
                <div className="work__content-item">
                    <div className="work__content-media">
                        <img src="./img/work-banner-4.jpg" alt="" />
                    </div>
                    <div className="work__content-title">
                        <Link to='/work-detail'>On Package</Link>
                    </div>
                    <div className="work__content-tags">
                        <a href='#'>Web Design</a>
                        &ensp; ✺ &ensp;
                        <a href='#'>Art Direction</a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Work;