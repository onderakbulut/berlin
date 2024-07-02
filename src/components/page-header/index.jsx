import './index.scss';
function PageHeader({title, showTags = false}) {
    return (  
        <div className="page-header">
            <div className="page-header__title">
                <h1>{title}</h1>
                {showTags && <div className="page-header__tags">
                    <a href='#'>Art Direction</a>
                    &ensp; ✺ &ensp;
                    <a href='#'>Web Design</a>
                </div>}
            </div>
            <div className="page-header__subTitle">
                Design agency helping clients with design projects from web design to art direction.
            </div>
        </div>
    );
}

export default PageHeader;