import { Parallax } from 'react-parallax';
import SpaceStation from '../img/spaceStation.jpg'

const ImageOne = () => (
    <Parallax className = 'image' bgImage={SpaceStation} strength={800}>
        <div className='content'>
            <span className='img-txt'>a trip to space</span>
        </div>
    </Parallax>
);

export default ImageOne