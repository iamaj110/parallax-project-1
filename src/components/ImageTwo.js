import { Parallax } from 'react-parallax';
import Satellite from '../img/satellite.jpg'

const ImageOne = () => (
    <Parallax className = 'image' bgImage={Satellite} strength={800}>
        <div className='content'>
            <span className='img-txt'>a trip to space</span>
        </div>
    </Parallax>
);

export default ImageOne