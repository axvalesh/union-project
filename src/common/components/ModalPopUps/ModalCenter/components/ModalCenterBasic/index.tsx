
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import ModalCenter from '../..';
import styles from './style.module.scss';
import Typography from '@common/components/ui/Typography/Typography';
import AppColor from '@common/styles/variables-static';
import SizeBox from '@common/components/ui/SizeBox/index';

type ModalCenterBasicProps = {
    title: string;
    children: React.ReactNode;
    nodesBeforeClose?: React.ReactNode[];
    callbackClose: () => void;
    bottomPartPadding: string;
    topPartPadding?: string;
    prevClose?: boolean;
    nodeAfterTitle?: React.ReactNode;
    callbackPrev?: () => void;

    desktopMinWidth?: string;
    mobileMinWidth?: string;
    desktopMinHeight?: string;

    desktopMaxWidth?: string;
    mobileMaxWidth?: string;
}
const ModalCenterBasic = ({prevClose,desktopMinHeight,nodeAfterTitle,desktopMinWidth,desktopMaxWidth,mobileMaxWidth,mobileMinWidth,callbackClose,topPartPadding,bottomPartPadding,children,title,nodesBeforeClose,callbackPrev}:ModalCenterBasicProps) => {

    const stylePass = {
        '--desktopWidthMin': desktopMinWidth,
        '--mobileMinWidth': mobileMinWidth,
        '--desktopMinHeight': desktopMinHeight,
        '--desktopMaxWidth':desktopMaxWidth,
        '--mobileMaxWidth':mobileMaxWidth,
        borderRadius: '20px',
    }
    return (
      <ModalCenter onClickHandler={callbackClose}>
        <div style={{...stylePass}} className={styles.modal_center_basic}>
            <div className={styles.top_part} style={{padding: topPartPadding}}>
                {prevClose && <div style={{display: 'flex',alignItems: 'center'}}>
                    <AppColor.longChevronLeft className='cursor' fill={AppColor.text} onClick={() => {
                        if(callbackPrev) {
                            callbackPrev()
                        } else {
                            callbackClose()
                        }
                    }} />
                    <SizeBox width='15px'/>
                    <Typography variant='body3' fontWeight='500'>{title}</Typography>
                    {nodeAfterTitle && <SizeBox width='15px'/>}
                    {nodeAfterTitle && nodeAfterTitle}
                    </div>}
                {!prevClose &&  <div className='gap_15'>
                    <Typography variant='body3' fontWeight='500'>{title}</Typography>
                    {nodeAfterTitle && nodeAfterTitle}
                    </div>}

                <div className='gap_10'>
                    {nodesBeforeClose && nodesBeforeClose.map(item => item)}
                    <AppColor.close onClick={callbackClose} className='cursor'  width={'15px'} height={'15px'} fill={AppColor.text}/>
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