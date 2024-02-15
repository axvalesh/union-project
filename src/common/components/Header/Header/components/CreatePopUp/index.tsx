
import Typography from '@common/components/ui/Typography/Typography';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import ModalCenter from '@common/components/ModalPopUps/ModalCenter/index';
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import InputCommon from '@common/components/ui/inputs/InputCommon/index';
import MyButtonBlack from '@common/components/ui/MyButton/variants/MyButtonBlack';
import SizeBox from '@common/components/ui/SizeBox/index';
import UserAvatar from '@common/components/ui/UserAvatar/index';
import { fakeUserConstant } from '@common/models/user';
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';



const CreatePopUp = () => {

    const [showOrder,setShowOrder] = useState(false);

    const [showModalPersonalOrder,setShowModalPersonalOrder] = useState(false);
    const [showModalInviteToOrder,setShowModalInviteToOrder] = useState(false);
    const [users,setUsers] = useState([fakeUserConstant,fakeUserConstant]);

    return (
      <div className={styles.create_wrapper}>

            {showModalPersonalOrder && 
            <ModalCenter onClickHandler={() => {setShowModalPersonalOrder(false)}}>
                <div className='modal_wrapper_item'>
                    <div style={{padding: '30px'}} className='flex_space_between'>
                        <Typography variant='body3' fontWeight='500'>
                        Personal Offer
                        </Typography>
                        <div className='cursor' onClick={() => {setShowModalPersonalOrder(false)}}>
                        <AppColor.close width={'17px'} height={'17px'} fill={AppColor.text}/>
                        </div>
                    </div>
                    <HorizontalLine />
                    <div style={{padding: '30px'}}>
                       <div style={{position: 'relative'}}>
                            <InputCommon
                                callback={() => {}}
                                placeholder='Enter a user name or list from save&notes'
                                padding='20px 80px 20px 20px'
                                rightPadding={80}
                                disableClose={true}
                            />
                            <div className={styles.absolute_button}>
                            <MyButtonBlack onClick={() => {}} padding='3px 14px'>
                                ADD
                            </MyButtonBlack>
                            </div>
                       </div>

                       <SizeBox height='20px'/>

                       <div className='gap_10'>
                            {users.map(item => <UserItem callback={() => {
                                const filtered = users.filter(item => item.name != fakeUserConstant.name)
                                setUsers(filtered)
                            }}/>)}
                       </div>

                       <DynamicPadding desktop='30px' mobile='20px'/>
                       <div className='text_box'>
                        <Typography variant='body4'>
                        After inviting the desired freelancers, you will be taken to the project details stage. Once the order is created, only the selected freelancers will receive notifications about the project invitation.
                        </Typography>
                       </div>
                       <DynamicPadding desktop='30px' mobile='20px'/>

                       <div style={{display: 'flex',justifyContent: 'end'}}>
                            <MyButtonTransparent fontWeight='500' onClick={() => {setShowModalPersonalOrder(false)}}>
                            Cancel
                            </MyButtonTransparent>
                            <MyButtonOrange onClick={() => {}}>
                            Create a personal order
                            </MyButtonOrange>
                       </div>
                    </div>
                </div>
            </ModalCenter>}

            {showModalInviteToOrder && 
            <ModalCenter onClickHandler={() => {setShowModalInviteToOrder(false)}}>
                <div className='modal_wrapper_item'>
                    <div style={{padding: '30px'}} className='flex_space_between'>
                        <Typography variant='body3' fontWeight='500'>
                        Invite To Order
                        </Typography>
                        <div className='cursor' onClick={() => {setShowModalInviteToOrder(false)}}>
                        <AppColor.close width={'17px'} height={'17px'} fill={AppColor.text}/>
                        </div>
                    </div>
                    <HorizontalLine />

                    <SizeBox height='30px' />
                    <div style={{paddingLeft: '30px'}} className='gap_10'>
                        <img src={fakeUserConstant.image} width={'38px'} height={'38px'} alt="" />
                        <Typography variant='body4' fontWeight='500'>
                        Logo Design
                        </Typography>
                        <AppColor.chevronBottom width={'12px'} height={'6px'} fill={AppColor.text}/>
                    </div>
             
                    <div style={{padding: '30px'}}>
                       <div style={{position: 'relative'}}>
                            <InputCommon
                                callback={() => {}}
                                placeholder='Enter a user name or list from save&notes'
                                padding='20px 80px 20px 20px'
                                rightPadding={80}
                                disableClose={true}
                            />
                            <div className={styles.absolute_button}>
                            <MyButtonBlack onClick={() => {}} padding='3px 14px'>
                                ADD
                            </MyButtonBlack>
                            </div>
                       </div>

                       <SizeBox height='20px'/>

                       <div className='gap_10'>
                            {users.map(item => <UserItem callback={() => {
                                const filtered = users.filter(item => item.name != fakeUserConstant.name)
                                setUsers(filtered)
                            }}/>)}
                       </div>

                       <DynamicPadding desktop='30px' mobile='20px'/>
                       <div className='text_box'>
                        <Typography variant='body4'>
                        After inviting the desired freelancers, the selected freelancers will receive project invitation notifications.
                        </Typography>
                       </div>
                       <DynamicPadding desktop='30px' mobile='20px'/>

                       <div style={{display: 'flex',justifyContent: 'end'}}>
                            <MyButtonTransparent textTransform='uppercase' fontWeight='500' onClick={() => {setShowModalPersonalOrder(false)}}>
                            Cancel
                            </MyButtonTransparent>
                            <MyButtonOrange textTransform='uppercase' onClick={() => {}} fontWeight='500'>
                            Send invite
                            </MyButtonOrange>
                       </div>
                    </div>
                </div>
            </ModalCenter>}

           <div className={styles.left_grid}>
                <Link to={'/search-master/category'}>
                    <LeftItem 
                        icon={<AppColor.searchIconLines fill={AppColor.text} />}
                        text='Discover the Solution'
                        title='Search Master'
                    />
                </Link>
                <LeftItem 
                    icon={<AppColor.orders fill={AppColor.text} />}
                    text='Unleash Top Freelancers'
                    title='Order'
                    callback={() => {setShowOrder(prev => !prev)}}
                />
                <LeftItem 
                    icon={<AppColor.caseIcon fill={AppColor.text} />}
                    text='Fueling Dreams Together'
                    title='Sponsorship'
                />
                <LeftItem 
                    icon={<AppColor.managers fill={AppColor.text} />}
                    text='Guiding Your Project'
                    title='Manager'
                />
           </div>
           <div className={styles.vertical_line}>

           </div>
           <div className={styles.right_part}>
                {showOrder &&
                <div style={{whiteSpace: 'nowrap'}}>
                    <Typography variant='body4' fontWeight='500'>
                    Orders Solutions    
                    </Typography>

                    <DynamicPadding desktop='30px' mobile='20px'/>
                    <div className={styles.grid_15}>
                       <Link to={'/create-order/details'}>
                       <Typography variant='body4'>Common Order</Typography>
                       </Link>
                        <div className='cursor' onClick={() => {setShowModalPersonalOrder(true)}}><Typography variant='body4'>Personal Offer</Typography></div>
                       <div className='cursor' onClick={() => {setShowModalInviteToOrder(true)}}> <Typography variant='body4'>Invite To Order</Typography></div>
                    </div>    
                </div>}
           </div>
      </div>
    );
};


const UserItem = ({callback}: {callback: (item:string) => void}) => {
    return (
        <div className='gap_10'>
            <UserAvatar active={true} name={fakeUserConstant.name} url={fakeUserConstant.image} role='Freelancer' flag={<AppColor.UkraineFlag/>}
             preventMobileNone={true}/>
           <div onClick={() => {callback(fakeUserConstant.name)}} className='cursor'>
           <AppColor.close width={'15px'} fill={AppColor.red} height={'15px'} />
           </div>
        </div>
    )
}

type LeftItemProps = {
    icon: React.ReactNode;
    title: string;
    text: string;
    callback?: (item: string) => void;
}
const LeftItem = ({icon,text,title,callback}:LeftItemProps) => {


    const handleClick = () => {
        if(callback) {
            callback(title);
        }
    }
    return (
        <div onClick={handleClick} className={styles.left_item}>
            <div className={styles.icon_wrapper}>
                {icon}
            </div>

            <div className={styles.flex_column}>
                <Typography variant='body4' fontWeight='500'>
                    {title}
                </Typography>
                <Typography variant='body5' color={AppColor.transparentBlack}>
                    {text}
                </Typography>
            </div>
        </div>
    )
}

export default CreatePopUp;