
import styles from './style.module.scss';

type CenterShadowBoxProps = {
    elements: React.ReactNode[];
    gap: string;
    paddingBoxDesktop: string;
    paddingBoxMobile?: string;
    absoluteItem?: React.ReactNode;
    align?: 'center' | 'start' | 'end'
}
const CenterShadowBox = ({elements,gap,paddingBoxDesktop,absoluteItem,paddingBoxMobile,align}:CenterShadowBoxProps) => {
    const styleBox = {
        '--gap': gap,
        '--paddingMobile': paddingBoxMobile ?? paddingBoxDesktop,
        '--paddoingDesktop': paddingBoxDesktop,
        '--align': align as string | 'center',
        border: 'none'
    }
    return (
      <div style={styleBox} className={styles.box_shadow}>
        <div className={styles.absolute_node}>{absoluteItem}</div>
           {...elements}
      </div>
    );
};

export default CenterShadowBox;