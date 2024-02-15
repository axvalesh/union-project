
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import styles from './style.module.scss';
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import MyButtonTransparentGrey from '@common/components/ui/MyButton/variants/MyButtonTransparentGrey';
import Typography from '@common/components/ui/Typography/Typography';
import AppColor from '@common/styles/variables-static';
import { useState } from 'react';
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index';
import InputCommon from '@common/components/ui/inputs/InputCommon/index';

const ControllPannel = () => {

    const [statusModal,setStatusModal] = useState(false);

    return (
      <div className={styles.controll_pannel}>
           <MyButtonOrange onClick={() => {}} fontWeight='500'>
           <div style={{marginRight: 'auto',opacity: '0'}}><AppColor.chevronRight height={'14px'} width={'7px'} fill='white'/></div> Customer <div style={{marginLeft: 'auto',paddingTop: '5px'}}><AppColor.chevronRight height={'14px'} width={'7px'} fill='white'/></div>
           </MyButtonOrange>

           <HorizontalLine />
           
           <MyButtonTransparentGrey onClick={() => {setStatusModal(true)}} fontWeight='500'>
            <AppColor.setStatus /> Set a status
           </MyButtonTransparentGrey>

           <HorizontalLine />

            <ControllItem callback={() => {}} icon={<AppColor.dashboard fill={AppColor.text} />} text='Dashboard' />
            <ControllItem callback={() => {}} icon={<AppColor.message fill={AppColor.text} />} text='Messenger' />
            <ControllItem callback={() => {}} icon={<AppColor.teams />} text='Teams' />
            <ControllItem callback={() => {}} icon={<AppColor.subscriptions />} text='Subscriptions' />
            <ControllItem callback={() => {}} icon={<AppColor.community />} text='Community' />
            <ControllItem callback={() => {}} icon={<AppColor.payments />} text='Payments' />
            <ControllItem callback={() => {}} icon={<AppColor.settings2 fill={AppColor.text} />} text='Settings' />
            <ControllItem callback={() => {}} icon={<AppColor.controll />} text='Control Panel' />
            <HorizontalLine />
            <ControllItem callback={() => {}} icon={<AppColor.logOut />} text='Logout' />

            {statusModal && 
                <ModalCenterBasic bottomPartPadding='30px 30px' callbackClose={() => {setStatusModal(false)}} title='Set a status' topPartPadding='15px 30px' nodesBeforeClose={[<AppColor.template />]} >
                    <InputCommon callback={() => {}} placeholder='Search' />
                </ModalCenterBasic>}
      </div>
    );
};

type ControllItemProps = {
    icon: React.ReactNode;
    text: string;
    callback: () => void;
}
const ControllItem = ({callback,icon,text}:ControllItemProps) => {
    return (
        <div className={`${styles.controll_item} cursor`} onClick={callback}>
            {icon}
            <Typography variant='body4'>{text}</Typography>
        </div>
    )
}
export default ControllPannel;