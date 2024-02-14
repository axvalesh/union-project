
import styles from './style.module.scss';
import {createPortal} from 'react-dom';

type ModalCenterProps = {
    onClickHandler: () => void;
    children: React.ReactNode
}
const ModalCenter = ({children,onClickHandler}:ModalCenterProps) => {

    return createPortal(
        <div className={styles.overaly} onClick={onClickHandler}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>,
        document.body
      );
};

export default ModalCenter;