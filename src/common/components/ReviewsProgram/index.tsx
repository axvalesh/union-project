
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
    sales: string;
}
const ReviewsProgramCard = ({text,user,likes,money,sales}:ReviewsProgramCardProps) => {
    return (
        <div className={styles.comment_wrapper}>
            <div className={styles.comment_user_info}>
            <UserAvatar active={true} url={user.image} name={user.name} role='Manager' flag={<AppColor.UkraineFlag/>}/>
               <div className={styles.recommended_comment}>
                    <div style={{display: 'flex',alignItems:'center',gap: '10px'}}>
                        <AppColor.like />
                        <Typography variant='body4' fontWeight='500'>Recommended</Typography>
                    </div>
                    <Typography color={AppColor.transparentBlack} variant='body4'>{user.activeAgo}</Typography>
               </div>
               <div className={styles.sales_text} style={{marginLeft: 'auto',display: 'flex',alignItems:'center',gap: '10px'}}>
                    <Typography variant='subtitle' fontWeight='500' textTransform='uppercase'>${money} </Typography>
                    <div style={{display: 'flex',alignItems:'center',gap: '5px'}}>
                        <AppColor.walletIcon />
                        <Typography variant='body4'>{sales} sales </Typography>
                    </div>
               </div>
            </div>

            <Typography variant='body4'>
                {text}
            </Typography>

            <div style={{display: 'flex',alignItems:'center',gap: '10px'}}>   
                <Typography variant='body4'>{likes}% users like this review </Typography>
                <AppColor.like/>
                <AppColor.dislike/>
            </div>
            <div className={styles.absolute_bottom}><AppColor.threeLines/></div>
        </div>
    )
}

export default ReviewsProgramCard;


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