import imageHome from '../../assets/home.png';
import Image from 'next';

export const Icons = () => {
  return
(  <div>
    <Image src={imageHome} width={100} heigth={100} /> 
  </div>)
};

export default Icons;