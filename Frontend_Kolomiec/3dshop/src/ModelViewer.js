import './css/viewModel.css'
import { useParams } from 'react-router-dom';

function ModelViewer(){

    const {id} = useParams();

    return(
        <div className="view_model">
            <div>
                <div className="Title">
                    <h2>ТИТУЛ{id}</h2>
                    <img src="" alt="" />
                </div>
                <div className="content">
                    <div className="left_content">
                        <div className="preview">
                            <div className='image'>
                                <img src="/images/dragon.jpg" alt="" />
                            </div>
                            <div className="image_bar">
                                <img src="/images/dragon.jpg" alt="" />
                                <img src="/images/dragon2.jpg" alt="" />
                                <img src="/images/dragon2.jpg" alt="" />
                                <img src="/images/dragon2.jpg" alt="" />
                                <img src="/images/dragon2.jpg" alt="" />
                            </div>
                            <button></button>
                        </div>

                        <nav>
                            <h3>ССЫЛКИ</h3>
                        </nav>
                    </div>
                    <div className="right_content">
                        <div className="description">
                            <h3>ОПИСАНИЕ</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModelViewer;