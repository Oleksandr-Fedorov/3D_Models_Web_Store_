import "./css/aside.css"
import { Context } from "./Context";
import { useContext } from "react";

function Aside(){
    const {setName} = useContext(Context);
    const onClickHandler = (titleName) =>{
        setName(titleName);
    }

    return(
        <aside>
            <div className='aside_container'>
                <nav>
                    <li key={1}>
                        <img src="/images/home.png"/>
                        <a href='/' onClick={() => onClickHandler("Главная страница")}>Главная страница</a>
                    </li>
                    <li key={2}>
                        <img src="/images/personal.png" />
                        <p>Личный кабинет</p>
                    </li>
                    <li key={3}>
                        <img src="/images/catalog_icon.png" />
                        <a href='/Catalog/' onClick={()=> onClickHandler("Каталог")}>Каталог</a>
                    </li>
                    <li key={4}>
                        <img src="/images/forum_icon.png" />
                        <a href='/Forum' onClick={ () => onClickHandler("Форум")}>Форум</a>
                    </li>
                    <li key={5}>
                        <img src="/images/support_icon.png" />
                        <p>Поддержка</p>
                    </li>
                    
                </nav>
            </div>
        </aside>
        );
}

export default Aside;