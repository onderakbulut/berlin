import Hero from '@/components//hero';
import Work from '@/components/work';
import Services from '@/components/services';
import Clients from '@/components/clients';
import Testimonial from '@/components/testimonial';
import Blog from '@/components/blog';

function HomePage() {
    return (  
        <>
            <Hero />
            <Work />
            <Services />
            <Clients />
            <Testimonial />
            <Blog />
        </>
    );
}

export default HomePage;