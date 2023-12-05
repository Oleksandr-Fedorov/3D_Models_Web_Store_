import ModelData from './CatalogViewer.json';
import './css/catalogViewer.css';

function CatalogViewer(){
    return(
        <div className='catalogViewer'>
            <nav>
                {ModelData.map(item =>(
                    <li key={item.id}>
                        <a href={"/Catalog/CatalogViewer/ModelViewer/" + item.id}>
                            <div className='img'>                            
                                <img src={item.url}/>
                                <p className='rate'>{item.rate}<img src='/images/star_new.png'/></p>
                            </div>
                        </a>
                        <div className='short_description'>
                            <p>Автор: {item.user}</p>
                            <p>Цена: {item.price} грн.</p>
                        </div>
                    </li>
                ))}
            </nav>
        </div>
    );
}

export default CatalogViewer;