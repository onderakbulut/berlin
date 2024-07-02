import './index.scss';

function Clients() {
    return (  
        <div className="clients">
            <div className="clients__title">
                <h1>Clients</h1>
            </div>
            <div className="clients__content">
                <ul>
                    <li><img src="./img/google.svg" alt="" /></li>
                    <li><img src="./img/netflix.svg" alt="" /></li>
                    <li><img src="./img/nike.svg" alt="" /></li>
                    <li><img src="./img/adobe.svg" alt="" /></li>
                    <li><img src="./img/pinterest.svg" alt="" /></li>
                    <li><img src="./img/apple.svg" alt="" /></li>
                </ul>
            </div>
        </div>
    );
}

export default Clients;