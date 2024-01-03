
import Header from '@common/components/Header/Header/index';
import styles from './style.module.scss';
import NavigationBar from '@common/components/NavigationBar/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import AppColor from '@common/styles/variables-static';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import Typography from '@common/components/ui/Typography/Typography';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import AskedQuestion from '@common/components/AskedQuestions/index';
import Footer from '@common/components/Footer/Footer';
import headphones from '@assets/images/rewards-1.png';
import UserAvatar from '@common/components/ui/UserAvatar/index';

const rewards:RewardItemProps[] = [
    {
        image: <img src={headphones} />,
        title: 'Logitech G435 LIGHTSPEED ',
        user: <UserAvatar active={true} name='Artem M.' />
    },
    {
        image: <AppColor.box width={62} height={62} />   ,
        title: 'Logitech G435 LIGHTSPEED ',
        user: <UserAvatar active={true} name='Artem M.' />
    },
    {
        image: <AppColor.cart fill={AppColor.text} width={80} height={62} />, 
        title: 'Logitech G435 LIGHTSPEED ',
        user: <UserAvatar active={true} name='Artem M.' />,
        count: 3
    }
]
const Rewards = () => {

    return (
        <div>
            <Header />
            <NavigationBar
                activePageIndex={3}
                currentCategoryTitle="Dashboard"
            />

            <div className={styles.wrapper}>
                <DynamicPadding />
                <div className={styles.top_section}>
                    <div className={styles.top_flex}>
                        <NavigationItem
                            image={<AppColor.home />}
                            textList={['Dashboard']}
                        />
                        <Typography
                            variant="titleBig"
                            textTransform="uppercase"
                            fontWeight="600">
                            <div className={styles.flex_center}>
                                rewards{' '}
                            </div>
                        </Typography>
                    </div>
                    <MyButtonTransparentOrange
                        onClick={() => {}}
                        fontWeight="500">
                        CUSTOMER{' '}
                        <AppColor.chevronBottom
                            fill={AppColor.orange}
                            width={14}
                            height={10}
                        />
                    </MyButtonTransparentOrange>
                </div>

                <DynamicPadding />
                <div className={styles.search_wrapper}>
                    <input type="text" placeholder="Search" />
                    <div className={styles.flex_items_wrapper}>
                        

                        <div className={styles.search_item_flex}>
                            <AppColor.filter />
                            <Typography
                                variant="body4"
                                color={AppColor.transparentBlack}>
                                Filters
                            </Typography>
                        </div>
                        <div className={styles.search_item_flex}>
                            <Typography
                                variant="body4"
                                color={AppColor.transparentBlack}>
                                12
                            </Typography>
                            <AppColor.chevronBottom
                                fill={AppColor.text}
                            />
                        </div>
                    </div>
                </div>
                <DynamicPadding />
                <div className={styles.rewards_wrapper}>
                    {rewards.map(item =>
                        <RewardItem
                            image={item.image}
                            title={item.title}
                            user={item.user}
                            count={item.count}
                        />
                    )}
                </div>
                
                <AskedQuestion />
            </div>
            <Footer />
        </div>
    )
};

type RewardItemProps = {
    image: any;
    title: string;
    user: any;
    count?: number;
}
const RewardItem = ({count,image,title,user,}:RewardItemProps) => {
    return (
        <div className={styles.reward_wrapper}>
            {count != null && (
                <div className={styles.reward_absolute_item_left}><Typography variant='body5' color={'white'}>{count}</Typography></div>
            )}
            <div className={styles.reward_absolute_item_right}><AppColor.threeLines /></div>
            {image}
            <Typography variant='body4' fontWeight='500'>
                {title}
            </Typography>
            {user}
        </div>
    )
}
export default Rewards;