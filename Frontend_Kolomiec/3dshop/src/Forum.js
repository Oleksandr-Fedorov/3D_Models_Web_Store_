import './css/Forum.css';

function Forum(){
    return(
        <div className='forum'>
            <nav>
                <li><h2>3D обсуждения</h2></li>
                <li><p>3D Редактор</p></li>
                <li><p>Как начать изучать</p></li>
                <li><p>3D персонажи</p></li> 
                <li><h2>2D обсуждения</h2></li>
                <li><p>2D Редактор</p></li>
                <li><p>Как начать изучать</p></li>
                <li><p>2D персонажи</p></li>
                <li><h2>Работа сайта</h2></li>
                <li><p>Ошибки/Баги</p></li>
                <li><p>Официальные оповещения</p></li>           
            </nav>
        </div>
    );
}

export default Forum; 