import './index.scss';
import PageHeader from '../page-header';
import { useState } from "react";
import FsLightbox from "fslightbox-react";

function WorkDetail() {
    const [toggler, setToggler] = useState(false);
    const [slideIndex, setSlideIndex] = useState(1); // To control which image to show first

    // URLs of the images
    const images = [
        "./img/work-detail-banner.jpg",
        "./img/work-detail-banner-2.jpg",
        "./img/work-detail-banner-3.jpg"
    ];

    // Function to open lightbox at specific image
    const openLightboxOnSlide = (index) => {
        setSlideIndex(index);
        setToggler(!toggler);
    };
    return (  
        <div className='work-detail'>
            <FsLightbox
                toggler={toggler}
                sources={images}
                slide={slideIndex}
            />
            
            <PageHeader title='On Photography' showTags="true" />
            <img src={images[0]} alt="" onClick={() => openLightboxOnSlide(1)} />

            <div className="work-detail__content">
                <div className="work-detail__inner">
                    <p>Photography will be found conveniently divided into sections representing the principal divisions of modern literary activity; each section will contain an introductory essay guide.</p>
                </div>
                <img src={images[1]} alt="" onClick={() => openLightboxOnSlide(2)} />
                <div className="work-detail__inner">
                    <blockquote>It preserves for all time, in the form of a printed book, what might have been scattered in the sheets of ephemeral publications.</blockquote>
                </div>
                <img src={images[2]} alt="" onClick={() => openLightboxOnSlide(3)} />
                <div className="work-detail__inner">
                    <p>Each will be adorned with one or more examples of the finished article, which, if the instructions be carefully followed, should soon be turned out without difficulty by any earnest and industrious scholar of average.</p>
                    <p>Each will be adorned with one or more examples of the finished article, which, if the instructions be carefully followed, should soon be turned out without difficulty by any earnest and industrious scholar of average.</p>
                </div>
            </div>
            
            <div className="work-detail__banner">
                <div className="work-detail__content">
                    <div className="work-detail__banner-heading">
                        On Photography
                    </div>
                    <div className="work-detail__banner-description">
                        We&apos;ve crammed the most important information to help you get started with Ghost into this one post. It&apos;s your cheat-sheet to get started, and your shortcut to advanced features.
                    </div>
                    <button>Contact</button>
                </div>
            </div>
        </div>
    );
}

export default WorkDetail;