import Work from '@/components/work';
import PageHeader from '@/components/page-header';

function WorkPage() {
    return (  
        <>
            <PageHeader title="Work" />
            <Work showTitle={false} />
        </>
        
    );
}

export default WorkPage;