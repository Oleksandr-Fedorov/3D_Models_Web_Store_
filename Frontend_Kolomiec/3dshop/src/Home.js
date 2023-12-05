import './css/home.css';

const selector = <img src='/images/CircleWhite.png'/>;
const rSelector = <img src='/images/CircleRed.png'/>
let arr = [selector, selector, selector, rSelector, selector, selector, selector, selector, selector, selector];

function Home(){
    return(
        <div className='home'>
            <div>
                <h2>Название модели</h2>
                <div className='recommended'>
                    <a href="">
                        <div className='preview'>
                            <p className='rate'>5<img src='/images/star_new.png'/></p>
                            <p className='price'>199грн</p>
                            <img src='/images/dragon.jpg'/>
                        </div>
                    </a>
                    <div className='description'>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, arcu vestibulum dignissim nulla erat maecenas. Tellus nostra proin blandit eget mi ante ut suscipit a nec, libero augue cubilia aptent mus dolor erat varius pulvinar senectus odio, neque dapibus penatibus iaculis felis imperdiet lorem sem morbi.</p>
                    </div>
                </div>
                <div className='switcher'>{arr}</div>
            </div>
        </div>
    );
}

export default Home;