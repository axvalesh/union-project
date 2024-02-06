
import { userModel } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import Typography from '../ui/Typography/Typography';
import UserAvatar from '../ui/UserAvatar';
import styles from './style.module.scss';

type ReviewsProgramCardProps = {
    user: userModel;
    text: string;
    likes: string;
    money: string;
    sales?: string;
    afterPriceNode?: React.ReactNode;
    images?: string[];
    addInfo?: {text:string,icon:React.ReactNode,users: userModel[]}
}
const ReviewsProgramCard = ({text,user,likes,money,sales,afterPriceNode,images,addInfo}:ReviewsProgramCardProps) => {

    const imagesArray = addInfo != null ? addInfo.users.map(item => item.image) : null;
    return (
        <div className={styles.comment_wrapper}>
            <div className={styles.comment_user_info}>
            <UserAvatar preventMobileNone={true} active={true} url={user.image} name={user.name} role='Manager' flag={<AppColor.UkraineFlag/>}/>
               <div className={styles.recommended_comment}>
                    <div style={{display: 'flex',alignItems:'center',gap: '10px'}}>
                        <AppColor.like />
                        <Typography variant='body4' fontWeight='500'>Recommended</Typography>
                    </div>
                    <Typography color={AppColor.transparentBlack} variant='body4'>{user.activeAgo}</Typography>
               </div>
               <div className={styles.sales_text} style={{marginLeft: 'auto',display: 'flex',alignItems:'center',gap: '10px'}}>
                    {money != '' && <Typography variant='subtitle' fontWeight='500' textTransform='uppercase'>${money} </Typography>}
                    {sales != null && <div style={{display: 'flex',alignItems:'center',gap: '5px'}}>
                        <AppColor.walletIcon />
                        <Typography variant='body4'>{sales} sales </Typography>
                    </div>}
                    {afterPriceNode}
               </div>
            </div>

            <Typography variant='body4'>
                {text}
            </Typography>

            {images != null && <div className='gap_10'>{ images.map(item => <img style={{borderRadius: '20px'}} src={item} height={'33px'} />)}</div>}
            {addInfo != null && 
                <div className='gap_10'>
                    {addInfo.icon}
                    <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>Musguard OMNI: Rollable Bicycle Mudguards</Typography>
                    <ImagesArrayDisplay images={imagesArray} />
                </div>}
            <div style={{display: 'flex',alignItems:'center',gap: '10px'}}>   
                <Typography color={parseInt(likes) < 50 ? AppColor.red :parseInt(likes) < 90 ? AppColor.orange : AppColor.green} variant='body4'>{likes}% users like this review </Typography>
                <AppColor.like/>
                <AppColor.dislike/>
            </div>
            <div className={styles.absolute_bottom}><AppColor.threeLines/></div>
        </div>
    )
}

export default ReviewsProgramCard;

const ImagesArrayDisplay = ({images}: {images:string[]}) => {
    return (
        <div className={styles.image_row}>
            {images.length > 4 
            ? <div>
                <img src={images[0]} width={'22px'} height={'22px'} alt="" />
                <img style={{left: `${(1*11)}px`,zIndex:'1'}} className={styles.absolute_image} src={images[0]} width={'22px'} height={'22px'} alt="" />
                <img style={{left: `${(1*22)}px`,zIndex:'1'}} className={styles.absolute_image} src={images[0]} width={'22px'} height={'22px'} alt="" />
                <div style={{left: `${(1*33)}px`,zIndex: '2'}} className={styles.images_length_show}>
                    <Typography fontSizeStatic='10px' fontWeight='500'>+{images.length-3}</Typography>
                </div>
            </div>
            : <div>
                {images.map((item,index) => <img style={{marginLeft: `${-(index*22)}px`}} width={'22px'} height={'22px'} src={item}/>)}
            </div>
            }   
        </div>
    )
}


// import { userModel } from '@common/models/user';
// import AppColor from '@common/styles/variables-static';
// import Typography from '../ui/Typography/Typography';
// import UserAvatar from '../ui/UserAvatar';
// import styles from './style.module.scss';

// type ReviewsProgramCardProps = {
//     user: userModel;
//     text: string;
//     likes: string;
// }
// const ReviewsProgramCard = ({text,user,likes}:ReviewsProgramCardProps) => {
//     return (
//         <div className={styles.comment_wrapper}>
//             <div className={styles.comment_user_info}>
//             <UserAvatar active={true} url={user.image} name={user.name} role='Manager' flag={<AppColor.UkraineFlag/>}/>
//                <div className={styles.recommended_comment}>
//                     <div style={{display: 'flex',alignItems:'center',gap: '10px'}}>
//                         <AppColor.like />
//                         <Typography variant='body4' fontWeight='500'>Recommended</Typography>
//                     </div>
//                     <Typography color={AppColor.transparentBlack} variant='body4'>{user.activeAgo}</Typography>
//                </div>
//             </div>

//             <Typography variant='body4'>
//                 {text}
//             </Typography>

//             <div style={{display: 'flex',alignItems:'center',gap: '10px'}}>   
//                 <Typography variant='body4'>{likes}% users like this review </Typography>
//                 <AppColor.like/>
//                 <AppColor.dislike/>
//             </div>
//         </div>
//     )
// }

// export default ReviewsProgramCard;
// .recommended_comment {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
// }
// .comment_wrapper {
//     padding: 20px 14px;
//     @include weakShadow;
//     border-radius: 20px;
//     display: flex;
//     flex-direction: column;
//     gap: 15px;
// }
// .comments_wrapper {
//     display: grid;
//     grid-template-columns: 1fr;
//     gap: 15px;
// }
// @media (min-width:$tabletSize) {
//     .comments_wrapper {
//         grid-template-columns: 1fr 1fr;
//         gap: 30px;
//     }
//     .recommended_comment {
//         justify-content: start;
//         gap: 20px;
//     }
//     .comment_user_info {
//         display: flex;
//         align-items: center;
//         gap: 25px;
//     }
//     .comment_wrapper {
//         gap: 20px;
//         padding: 30px;
//     }
// }