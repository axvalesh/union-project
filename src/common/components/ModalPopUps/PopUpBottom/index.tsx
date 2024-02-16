
import { useHover } from '@common/helpers/useHover';
import styles from './style.module.scss';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { useEffect, useRef, useState } from 'react';

type PopUpBottomProps = {
        showNode: React.ReactNode;
        showNodeHover?: React.ReactNode;
        popUpNode: React.ReactNode;
        topPaddingFromNode?: string;
        showBackgroundHover?: boolean
}
const PopUpBottom = ({popUpNode,showNode,showBackgroundHover=false,topPaddingFromNode,showNodeHover}:PopUpBottomProps) => {

    const [show,setShow] = useState(false);

    const [hovered, eventHandlers] = useHover({delayInMilliseconds: 1000,hoverDelay: 150});

    const nodeRef = useRef(null);
    useEffect(() => {
     const handleOutsideClick = (event: MouseEvent) => {
        const clickedElement = event.target as HTMLElement;
        if (clickedElement.closest('.overlay_prevent_close')) return;  //ignore overlay modal and modals children

        
         if (nodeRef.current && !nodeRef.current.contains(event.target as Node)) {
             setShow(false);
             console.log('close');
         } else {
            console.log('not close');
            
         }
     };

     document.addEventListener('mousedown', handleOutsideClick);

     return () => {
         document.removeEventListener('mousedown', handleOutsideClick);
     };
 }, []);
    return (
      <div  ref={nodeRef}  style={{position:'relative'}}>
           <div onClick={() => {setShow(prev => !prev)}} >
           {showNodeHover ?
           <SwitchTransition mode='out-in'>
               
           <CSSTransition
                key={show ? "Goodbye, world!" : "Hello, world!"}
                addEndListener={() => {}}
                classNames={{
                     enter: styles.fadeEnter,
                     enterActive: styles.fadeEnterActive,
                     exit: styles.fadeExit,
                     exitActive: styles.fadeExitActive,
                     exitDone: styles.exitDone
                }}
                timeout={100} // 0.15s in milliseconds
                >
                {show ? <div className={showBackgroundHover && styles.hover_item}>
                    {showNodeHover}
                </div> : <div className={showBackgroundHover && styles.hover_item}>
                    {showNode}     
               </div>}
           </CSSTransition>
      </SwitchTransition>
      : <div className={showBackgroundHover &&  styles.hover_item}>
          {showNode}     
     </div>}
               
           </div>
           <div  style={{top: `calc(100% + ${topPaddingFromNode})`,opacity: show ? '1' : '0',pointerEvents: show ? 'all' : 'none',display: show ? 'block' : 'none'}} className={styles.popup_node}>
                {popUpNode}
           </div>
      </div>
    );
};

export default PopUpBottom;