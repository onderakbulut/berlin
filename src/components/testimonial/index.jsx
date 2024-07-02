import './index.scss';

function Testimonial() {
    return (  
        <div className="testimonial">
            <div className="testimonial__card">
                <blockquote className="testimonial__text">Excellent support from the team behind the Aspire themes, if you decide to give it a try.</blockquote>
                <div className="testimonial__author">
                    <div className="testimonial__figure">
                        <img src="./img/hero-img.jpg" alt="" />
                    </div>
                    <div className="testimonial__author-bio">
                        <div className="testimonial__author-name">
                            <h3>Amelia Harry</h3>
                        </div>
                        <div className="testimonial__author-title">
                            <p>Engineer @Shopify</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonial__card">
                <blockquote className="testimonial__text">Ahmad has done an incredible job of creating a flexible yet robust site.</blockquote>
                <div className="testimonial__author">
                    <div className="testimonial__figure">
                        <img src="./img/hero-img.jpg" alt="" />
                    </div>
                    <div className="testimonial__author-bio">
                        <div className="testimonial__author-name">
                            <h3>Olivia Thomas</h3>
                        </div>
                        <div className="testimonial__author-title">
                            <p>Designer @Dropbox</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;