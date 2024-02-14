
import { useHover } from '@common/helpers/useHover';
import styles from './style.module.scss';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { useRef } from 'react';

type PopUpBottomProps = {
        showNode: React.ReactNode;
        showNodeHover?: React.ReactNode;
        popUpNode: React.ReactNode;
        topPaddingFromNode?: string;
}
const PopUpBottom = ({popUpNode,showNode,topPaddingFromNode,showNodeHover}:PopUpBottomProps) => {

    const [hovered, eventHandlers] = useHover({delayInMilliseconds: 1000,hoverDelay: 150});

    const nodeRef = useRef(null);
    return (
      <div {...eventHandlers} style={{position:'relative'}}>
           <div>
           {showNodeHover ?
           <SwitchTransition mode='out-in'>
               
           <CSSTransition
                key={hovered ? "Goodbye, world!" : "Hello, world!"}
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
                {hovered ? showNodeHover : showNode}
           </CSSTransition>
      </SwitchTransition>
      : showNode}
               
           </div>
           <div style={{top: `calc(100% + ${topPaddingFromNode})`,opacity: hovered ? '1' : '0',pointerEvents: hovered ? 'all' : 'none'}} className={styles.popup_node}>
                {popUpNode}
           </div>
      </div>
    );
};

export default PopUpBottom;