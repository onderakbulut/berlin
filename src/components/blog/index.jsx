import './index.scss';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

function Blog() {
    return (  
        <div className="blog">
            <div className="blog__title">
                <h1>Blog</h1>
            </div>
            <NavLink to="/work-detail" className="blog__card">
                <div className="blog__content">
                    <div className="blog__content-title">On Working Less</div>
                    <div className="blog__content-date">Dec 1, 2021</div>
                </div>
            </NavLink>
            <NavLink to="/work-detail" className="blog__card">
                <div className="blog__content">
                    <div className="blog__content-title">On Living with Less</div>
                    <div className="blog__content-date">Dec 1, 2021</div>
                </div>
            </NavLink>
            <NavLink to="/work-detail" className="blog__card">
                <div className="blog__content">
                    <div className="blog__content-title">On Espresso Machines</div>
                    <div className="blog__content-date">Dec 1, 2021</div>
                </div>
            </NavLink>
            <NavLink to="/work-detail" className="blog__card">
                <div className="blog__content">
                    <div className="blog__content-title">On the World Around Us</div>
                    <div className="blog__content-date">Dec 1, 2021</div>
                </div>
            </NavLink>

        </div>
    );
}

export default Blog;