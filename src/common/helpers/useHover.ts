import { useState, useMemo,useRef } from 'react';


interface HoverHandlers {
  onMouseOver(): void;
  onMouseOut(): void;
}


type useHoverProps = {
    delayInMilliseconds?: number;
}
export const useHover = ({ delayInMilliseconds }: useHoverProps): [boolean, HoverHandlers,any] => {
  const [hovered, setHovered] = useState(false);
  const isHoveredRef = useRef(false);

  const eventHandlers: HoverHandlers = useMemo(
    () => ({
      onMouseOver() {
        isHoveredRef.current = true;
        setHovered(true);
      },
      onMouseOut() {
        isHoveredRef.current = false;
        if (delayInMilliseconds != undefined) {
          setTimeout(() => {
            if (!isHoveredRef.current) {
              setHovered(false);
            }
          }, delayInMilliseconds);
        } else {
          setHovered(false);
        }
      },
    }),
    [delayInMilliseconds]
  );

  return [hovered, eventHandlers,setHovered];
};