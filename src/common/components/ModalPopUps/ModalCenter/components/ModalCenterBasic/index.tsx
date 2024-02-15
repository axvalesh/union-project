
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import ModalCenter from '../..';
import styles from './style.module.scss';
import Typography from '@common/components/ui/Typography/Typography';
import AppColor from '@common/styles/variables-static';

type ModalCenterBasicProps = {
    title: string;
    children: React.ReactNode;
    nodesBeforeClose?: React.ReactNode[];
    callbackClose: () => void;
    bottomPartPadding: string;
    topPartPadding?: string;
}
const ModalCenterBasic = ({callbackClose,topPartPadding,bottomPartPadding,children,title,nodesBeforeClose}:ModalCenterBasicProps) => {

    return (
      <ModalCenter onClickHandler={callbackClose}>
        <div className={styles.modal_center_basic}>
            <div className={styles.top_part} style={{padding: topPartPadding}}>
                <Typography variant='body3' fontWeight='500'>{title}</Typography>

                <div className='gap_10'>
                    {nodesBeforeClose && nodesBeforeClose.map(item => item)}
                    <AppColor.close  width={'15px'} height={'15px'} fill={AppColor.text}/>
                </div>
            </div>
            <HorizontalLine />
            <div className={styles.bottom_part} style={{padding: bottomPartPadding}}>
                {children}
            </div>
        </div>
      </ModalCenter>
    );
};

export default ModalCenterBasic;