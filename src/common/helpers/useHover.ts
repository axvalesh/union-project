import { useState, useMemo, useRef } from 'react';

interface HoverHandlers {
  onMouseOver(): void;
  onMouseOut(): void;
}

type useHoverProps = {
  delayInMilliseconds?: number;
  hoverDelay?: number; // New optional prop for hover duration
};

export const useHover = ({ delayInMilliseconds, hoverDelay=200 }: useHoverProps): [boolean, HoverHandlers, any] => {
  const [hovered, setHovered] = useState(false);
  const isHoveredRef = useRef(false);

  const eventHandlers: HoverHandlers = useMemo(
    () => ({
      onMouseOver() {
        isHoveredRef.current = true;
        if (hoverDelay !== undefined) {
          setTimeout(() => {
            if (isHoveredRef.current) {
              setHovered(true);
            }
          }, hoverDelay);
        } else {
          setHovered(true);
        }
      },
      onMouseOut() {
        isHoveredRef.current = false;
        if (delayInMilliseconds !== undefined) {
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
    [delayInMilliseconds, hoverDelay]
  );

  return [hovered, eventHandlers, setHovered];
};
