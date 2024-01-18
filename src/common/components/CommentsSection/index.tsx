
import { userModel } from '@common/models/user';
import styles from './style.module.scss';
import Typography from '../ui/Typography/Typography';
import { useScreenSize } from '@common/helpers/useScreenSize';
import InputCommon from '../ui/inputs/InputCommon';
import DynamicPadding from '../ui/DynamicPadding';
import CommentComponent from './components/CommentComponent';

export type CommentsSectionProps = {
    comments: comment[];
}

export type comment = {
    user: userModel;
    comment: string;
    likesPercent: number;
    isSolution: boolean;
    isBestReplay: boolean;
    answeredUserComment?: comment[];
    depth?: number;
}
const CommentsSection = ({comments}:CommentsSectionProps) => {
    const {width,height} = useScreenSize();
    const isMobile = width <= 768;
    return (
        <div>
            <div className={styles.flex_center}>
                <Typography variant="body3" fontWeight="500">
                    Replies
                </Typography>
                <div className={styles.dark_wrapper}>
                    <Typography
                        fontSizeStatic={
                            isMobile ? '0.75rem' : '1.125rem'
                        }
                        color="white">{comments.length}</Typography>
                </div>
            </div>

            <DynamicPadding desktop='30px' mobile='20px'/>

            <InputCommon 
                padding='13px 20px'
                rightPadding={20}
                callback={() => {}}
                placeholder='Add reply'
            />
            <DynamicPadding mobile='20px' desktop='30px' />
            {
                comments.map(item =>
                   <div>
                        <CommentComponent
                            comment={item.comment}
                            depth={0}
                            isBestReplay={item.isBestReplay}
                            isSolution={item.isSolution}
                            likesPercent={item.likesPercent}
                            user={item.user}
                            answeredUserComment={item.answeredUserComment}
                        />
                        <DynamicPadding mobile='20px' desktop='30px'/>
                   </div>
                )
            }
        </div>
    )
};


export default CommentsSection;