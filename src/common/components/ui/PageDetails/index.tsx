import DynamicPadding from '../DynamicPadding';
import styles from './style.module.scss';
import Typography from '../Typography/Typography';

type PageDetailsProps = {
    pageTitle: string;
    historyNode: React.ReactNode;
    endNode?: React.ReactNode;
}
const PageDetails = ({historyNode,pageTitle,endNode}:PageDetailsProps) => {

    return (
      <div>
           <DynamicPadding />
                <div className={styles.top_section}>
                    <div className={styles.top_flex}>
                        {historyNode}
                        <Typography
                            variant="titleBig"
                            textTransform="uppercase"
                            fontWeight="600">
                            <div className={styles.flex_center}>
                                {pageTitle}
                            </div>
                        </Typography>
                    </div>
                    {endNode}
                </div>
      </div>
    );
};

export default PageDetails;