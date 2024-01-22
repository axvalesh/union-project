import { userModel } from "common/models/user";
import Typography from "../../ui/Typography/Typography";
import testUserImage from '@assets/images/test-user-image.png';
import bc_image from '@assets/images/card-time-background.png';
import { useGetImage } from "@common/helpers/UseGetImage";
import AppColor from "@common/styles/variables-static";
import styles from './style.module.scss'
import icon_sponsorship from '@assets/svg/sponsors-icon.svg';
import icon_message from '@assets/svg/message-icon.svg';
import icon_star from '@assets/svg/star.svg';
import icon_comments from '@assets/svg/comments-icon.svg';
import PercentBar from "@common/components/ui/PercentBar/PercentBar";
import { formatNumberWithSpaces } from "@common/helpers/stringFunctions";
import DaysLeftTimer from "@common/components/ui/DaysLeftTimer/DaysLeftTimer";
import CardTypeDisplay from "../CardTypeDisplay/CardTypeDisplay";
type CardTimeProps = {
    title: string;
    user: userModel;
    tags: string[];
    totalMoneyRange: number;
    currentMoneyRange: number;
    date: Date;
}
const CardTime = ({title,user,tags,totalMoneyRange,currentMoneyRange,date}:CardTimeProps) => {
    const flagImage = useGetImage(`flags/${user.country}`,false);

    const topImageStyles = {
        backgroundImage: `url(${bc_image})`,
        backgroundSize: 'cover', // You can customize these styles based on your requirements
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        zIndex: 0,
    }
    const today = new Date('2023-11-23');
    const futureDate = new Date(today.getTime() + (53 * 24 * 60 * 60 * 1000) + (3 * 60 * 60 * 1000) + (40 * 60 * 1000) + (20 * 1000));

    const moneyRangePercent = (currentMoneyRange / totalMoneyRange)*100
    return (
      <div className={styles.shell}>
            <span className={styles.shell_absolute}>
                <CardTypeDisplay textColor={AppColor.white} text="Business" backgroundColor={AppColor.text}/>
            </span>
           <div style={topImageStyles} className={styles.shell_top_image}>
            <Typography variant="body5" color="white">
                {title}
            </Typography>
                <div className={styles.content_top_first}>
                        <img src={testUserImage} alt="userImage" />
                        <div>
                            <img src={flagImage} alt="countryFlag" />
                        <span className={styles.name}>
                            <Typography variant="body5" color="white">
                                    {user.name}
                                </Typography>
                        </span>
                            <Typography variant="body5" color={AppColor.orange}>
                                {user.roles}
                            </Typography>
                        </div>
                </div>
                <div className={styles.content_top_second}>
                        <SvgText img={icon_sponsorship} text={`${user.statistic.sponsorship_count}`}/>
                        <SvgText img={icon_message} text={`${user.statistic.responses_count}`}/>
                        <SvgText img={icon_star} text={`${user.statistic.rating}%`}/>
                        <SvgText img={icon_comments} text={`${user.statistic.comments_count}`}/>
                </div>
                <div className={styles.tags_wrapper}>
                        {tags.map(tag => <TagDisplay text={tag}/>)}
                </div>
           </div>
           <div className={styles.shell_bottom}>
                <PercentBar currentPercent={moneyRangePercent}/>
                <div className={styles.bottom_details_money}>
               <div className={styles.bottom_details_money_range}>
                <Typography variant="body6" textLineHeight="100%">
                        ${formatNumberWithSpaces(currentMoneyRange)} <span> </span>
                        <Typography variant="body5" color={AppColor.transparentBlack} textLineHeight="100%">
                            of ${formatNumberWithSpaces(totalMoneyRange)}
                        </Typography>
                </Typography>
               </div>
               <Typography variant="body6" textLineHeight="100%" color={AppColor.orange}>
                    {moneyRangePercent}%
               </Typography>
           </div>
           <div>
                <DaysLeftTimer time={futureDate}/>
           </div>
           </div>
      </div>
    );
};

type svgTextProps = {
    img: string;
    text: string;
}
const SvgText = ({img,text}: svgTextProps) => {
   return (
    <div className={styles.svgText}>
        <img src={img} alt="img" />
        <Typography textLineHeight={'100%'} variant="body5" color="white">
            {text}
        </Typography>
    </div>
   );
};

type TagDisplayProps = {
    text: string;
}
const TagDisplay = ({text}:TagDisplayProps) => {
    return (
        <span className={styles.tag}>
        <Typography textLineHeight={'100%'} variant="body5" color={AppColor.white}>
            {text}
        </Typography>
        </span>
    );
};
export default CardTime;