import { MouseEventHandler } from "react";

export interface MyButtonProps {
    children: React.ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
    color?: string;
    hoverColor?: string;
    padding?: string;
    border?: string;
    borderRadius?: string;
    borderHover?: string;
    textSize?: string;
    hoverTextColor?: string;
    textColor?: string;
    fontWeight?: string;
    width?: string;
    
}