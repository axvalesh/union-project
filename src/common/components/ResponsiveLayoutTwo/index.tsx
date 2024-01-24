
import styles from './style.module.scss';

type ResponsiveLayoutTwo = {
    item1: React.ReactNode;
    item2: React.ReactNode;
    item1MaxWidth: string;
    item2MaxWidth: string;
    gap: string;
    orderItem1Mobile?: number;
    orderItem2Mobile?: number;
    orderItem1Desktop?: number;
    orderItem2Desktop?: number;
}
const ResponsiveLayoutTwo = ({item1,item1MaxWidth,item2MaxWidth,item2,gap,orderItem1Desktop,orderItem1Mobile,orderItem2Desktop,orderItem2Mobile}:ResponsiveLayoutTwo) => {
    const styleItem = {
        '--maxWidth1': item1MaxWidth,
        '--maxWidth2': item2MaxWidth,
        '--order1M': orderItem1Mobile ?? 0,
        '--order2M': orderItem2Mobile ?? 1,
        '--order1D': orderItem1Desktop ?? 0,
        '--order2D': orderItem2Desktop ?? 1,
        '--gap': gap,
        display: 'flex',
    }
    return (
      <div style={styleItem} className={styles.main_part}>
        <div className={styles.left_part}>
            {item1}
        </div>
        <div className={styles.right_part}>
            {item2}
        </div>
      </div>
    );
};

export default ResponsiveLayoutTwo;