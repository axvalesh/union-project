import AppColor from '@common/styles/variables-static';
import styles from './MyButton.module.scss'
import { MyButtonProps } from './models';

const MyButton = ({
    children,
    onClick,
    color,
    hoverColor,
    padding,
    border,
    borderHover,
    borderRadius,
    fontWeight,
    textColor,
    textSize,
    hoverTextColor,
    width,
    textTransform,
}: MyButtonProps) => {
    const style = {
        '--backgroundColor': color ?? 'transparent',
        '--padding': padding ?? '10px 12px',
        '--hoverBcColor': hoverColor ?? AppColor.orange,
        '--border': border ?? `1px solid ${AppColor.orange}`,
        '--hoverBorder': borderHover ?? `1px solid ${AppColor.orange}`,
        '--borderRadius': borderRadius ?? '20px',
        'border': border,
        '--textSize': textSize ?? '1rem',
        '--textColor': textColor ?? AppColor.orange,
        '--fontWeight': fontWeight ?? '400',
        '--hoverTextColor': hoverTextColor ?? 'white',
        '--width': width ?? 'auto',
        '--textTransform': textTransform,
    }
    return (
        <button
            style={style}
            onClick={onClick}
            className={styles.button}>
            {children}
        </button>
    )
}

export default MyButton;