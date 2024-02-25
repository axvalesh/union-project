import { useState } from 'react';
import styles from './style.module.scss';
import { SwitchTransition, CSSTransition } from "react-transition-group";

type AnimatedSvgProps = {
    node1: React.ReactNode;
    node2: React.ReactNode;
    showNode2?: boolean;
  };
  
const AnimatedSvg = ({ node1, node2,showNode2=null }:AnimatedSvgProps) => {
    const [hover,setHover] = useState(false);

    const hovermodified = showNode2 != null ? showNode2 || hover : hover;
    return (
      <div 
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
        className={styles.animatedSvgContainer}>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={hovermodified ? 'node1' : 'node2'}
            addEndListener={() => {}}
            classNames={{
                enter: styles.fadeEnter,
                enterActive: styles.fadeEnterActive,
                exit: styles.fadeExit,
                exitActive: styles.fadeExitActive,
                exitDone: styles.exitDone
           }}
            timeout={100} // Adjust timeout as needed
          >
            {!hovermodified ? (
              <div className={`${styles.animatedNode} cursor`}>{node1}</div>
            ) : (
              <div className={`${styles.animatedNode} cursor`}>{node2}</div>
            )}
          </CSSTransition>
        </SwitchTransition>
      </div>
    );
  };
  
  export default AnimatedSvg;