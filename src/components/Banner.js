import '../styles/banner.css';
import Recommandation from './Recommandation';

function Banner ({children}) {
     
    return (
        <div className = 'lmj-banner-row'>
            <div className='lmj-banner-titleLogo'>{children}</div>
                <Recommandation />
        </div>
    )
}

export default Banner;