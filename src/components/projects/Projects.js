import './projects__dark.css';
import Carousel from './Carousel';
import Item from './Item';

export default function Projects(){
    return <div className="projects">
        <h2>Projects </h2>
        <p>Small lorem ipsum lorem ipsuma and again lorem lorem lorem</p>
        <div className="items">
            <Item />
            <Item />
            <Item />
        </div>

    </div>
}