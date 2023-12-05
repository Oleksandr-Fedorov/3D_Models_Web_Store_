import "./css/header.css";

function Header(){
    return(
        <header>
            <div className="left_header">
                <a href="">Вход</a>
                <a href="">Регистрация</a>
            </div>
            <div className="right_header">
                <div className="title"><h1>3D Models</h1></div>
                <div className="search">
                    <p>Поиск</p>
                    <input />
                </div>
                <div className="page_name"><p></p></div>
            </div>
        </header>
    );
}

export default Header;