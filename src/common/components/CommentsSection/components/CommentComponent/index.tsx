
import { userModel } from '@common/models/user';
import styles from './style.module.scss';
import { useScreenSize } from '@common/helpers/useScreenSize';
import UserAvatar from '@common/components/ui/UserAvatar/index';
import AppColor from '@common/styles/variables-static';
import Typography from '@common/components/ui/Typography/Typography';
import Solution from '@common/components/ui/Solution/index';
import { useEffect, useRef, useState } from 'react';
import { comment } from '../..';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import SizeBox from '@common/components/ui/SizeBox/index';


const CommentComponent = ({comment,isBestReplay,isSolution,likesPercent,user,answeredUserComment,depth}:comment) => {
    const {width,height} = useScreenSize()
    const leftMargin = width <= 768 ? 10 : 30
    const [showReplies,setShowReplies] = useState(false);
    const [addReply,setAddReply] = useState(false);
    useEffect(() => {
        if(depth < 1) {
            setShowReplies(true);
        }
    },[])
    return (
        <div style={{marginLeft: `${depth*leftMargin}px`}}>
            <div className={styles.top_wrapper}>
                <UserAvatar preventMobileNone={true}
                    active={user.isActive}
                    name={user.name}
                    activeAgo={user.activeAgo}
                    flag={<AppColor.UkraineFlag/>}
                />
                <div className={styles.flex_center_10}>
                    {isBestReplay && <Typography variant='body3' fontWeight='500'>Best Reply</Typography>}
                    {isSolution && 
                        <Solution />
                    }
                </div>
                <div className={styles.mobile}><AppColor.lightning/></div>
            </div>
            <DynamicPadding desktop='10px' mobile='10px'/>
            <Typography variant='body4'>
                {comment}
            </Typography>
            <DynamicPadding desktop='15px' mobile='15px'/>
            <div className={styles.flex_center}>
                <Typography variant='body4' color={likesPercent > 60 ? AppColor.green : AppColor.orange} textLineHeight='1'>
                    {likesPercent}% users like this reply 
                </Typography>
                <div className={styles.flex_center_10}>
                    <AppColor.like />
                    <AppColor.dislike/>
                </div>
               <div style={{cursor: 'pointer'}} onClick={() => {setAddReply(true)}}>
                 <Typography textLineHeight='1' color={AppColor.transparentBlack} textTransform='uppercase' fontWeight='500'>Reply</Typography>
                </div>
            </div>
            <DynamicPadding desktop='15px' mobile='15px'/>
           <div>
                <div onClick={() => {setShowReplies(prev => !prev)}} style={{cursor: 'pointer'}}  className={styles.flex_center_10}>
                    {answeredUserComment.length > 0 && 
                    <div className={styles.flex_center_10}>
                        <Typography variant='body4' fontWeight='500' color={AppColor.orange}>
                            Hide {answeredUserComment.length} replies  
                        </Typography>
                        
                        {showReplies
                        ? <div><AppColor.triangleTop fill={AppColor.orange} width={'8px'} height={'6px'}/></div>
                        : <div><AppColor.trianleDown fill={AppColor.orange} width={'8px'} height={'6px'}/></div>}
                    </div>
                    
                    }
                </div>
                {showReplies && <SizeBox height='20px'/>}
                {addReply && <AddReplyItem replyTo={user}/>}
                {
                    showReplies &&
                    answeredUserComment.map(item => 
                        <div>
                            <CommentComponent
                                comment={item.comment}
                                depth={depth+1}
                                isBestReplay={item.isBestReplay}
                                isSolution={item.isSolution}
                                likesPercent={item.likesPercent}
                                user={item.user}
                                answeredUserComment={item.answeredUserComment}
                            />    
                            <SizeBox height='20px'/>
                        </div>
                    )
                }
           </div>
        </div>
    )
}

type AddReplyItemProps = {
    replyTo: userModel;
}
const AddReplyItem = ({ replyTo }: AddReplyItemProps) => {
    const ref = useRef(null);
  
    const handleChange = () => {
      if (ref.current) {
        const value = ref.current.textContent;
        const atIndex = value.indexOf('@');
  
        if (atIndex !== -1) {
          const spaceIndex = value.slice(atIndex).indexOf(' ');
  
          if (spaceIndex !== -1) {
            const newValue = value.slice(0, atIndex) + `<span class=${styles.orangeText}>${value.slice(atIndex, atIndex + spaceIndex)}</span>` + value.slice(atIndex + spaceIndex);
  
            ref.current.innerHTML = newValue;
            ref.current.setSelectionRange(ref.current.textContent.length, ref.current.textContent.length);
          }
        }
      }
      ref.current.setSelectionRange(ref.current.textContent.length, ref.current.textContent.length);
    };
  
    return (
      <div>
        <div ref={ref} contentEditable={true} onInput={handleChange} className={styles.new_reply_item}>
          {/* Your editable content goes here */}
        </div>
      </div>
    );
  };
const CustomInput = () => {
    let [styledInput,setStyledInput] = useState(null);
    const handleChange = (event) => {
      const inputValue = event.target.value;
      const atIndex = inputValue.indexOf('@');
  
      if (atIndex !== -1) {
        const prefix = inputValue.slice(0, atIndex + 1);
        const suffix = inputValue.slice(atIndex + 5);
  
        // Apply different styles to prefix and suffix
        
        setStyledInput (
            <span>
              <span style={{ color: 'orange' }}>1{prefix}</span>
              <span style={{ color: 'black' }}>2{suffix}</span>
            </span>
          );
        // Now you can use styledInput where you render your input
        // For example, set it as the value of the controlled input component
        // or use it within a <div> or any other container element
      }
    };
  
    return (
      <div>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Type here..."
          />
          h1
          {styledInput}
          h2s
      </div>
    );
  };
export default CommentComponent;