import '../hero/hero__light.css';
import CvBtn from '../downloadBtn/CvBtn';
import LogoLight from '../../assets/logo/Logo__light';
/*import LogoDark from '../../assets/logo/Logo__dark';*/
import {SiMinutemailer} from 'react-icons/si';

export default function Hero(){
    return <div className="hero">
        <section>
        <h1>Hello World!</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <div className='heroButtons'>
            <CvBtn />
            <button className="contactBtn contact">Contact <SiMinutemailer/> </button>
        </div>
        </section>
        <aside>
            {/*<LogoDark />*/}
            <LogoLight />
        </aside>
    </div>
}