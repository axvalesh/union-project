
import { useState } from 'react';
import styles from './style.module.scss';

type ImageCardsShowProps = {
    images: string[];
}
const ImageCardsShow = ({images}:ImageCardsShowProps) => {
    const [activeImage,setActiveImage] = useState(images[0]);
    return (
      <div className={styles.wrapper}>
           <img className={styles.active_image} src={activeImage} alt="" />
           <div className={styles.small_images}>
                {images.map(item =>
                    <img style={{opacity: activeImage == item ? 1 : 0.4}} onClick={() => {setActiveImage(item)}} src={item} alt="" />    
                )}
           </div>
      </div>
    );
};

export default ImageCardsShow;