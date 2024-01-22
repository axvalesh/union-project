import { userModel } from 'common/models/user'
import Typography from '../../ui/Typography/Typography'
import testUserImage from '@assets/images/test-user-image.png'
import bc_image from '@assets/images/card-time-background.png'
import { useGetImage } from '@common/helpers/UseGetImage'
import AppColor from '@common/styles/variables-static'
import styles from './style.module.scss'
import icon_sponsorship from '@assets/svg/sponsors-icon.svg'
import icon_message from '@assets/svg/message-icon.svg'
import icon_star from '@assets/svg/star.svg'
import icon_comments from '@assets/svg/comments-icon.svg'
import PercentBar from '@common/components/ui/PercentBar/PercentBar'
import { formatNumberWithSpaces } from '@common/helpers/stringFunctions'
import DaysLeftTimer from '@common/components/ui/DaysLeftTimer/DaysLeftTimer'
import CardTypeDisplay from '../CardTypeDisplay/CardTypeDisplay'
type CardStatisticPartnershipProps = {
    title: string
    user: userModel
    tags: string[]
    rate: React.ReactNode
    EPC: React.ReactNode
    CR: React.ReactNode
    CR48hours: React.ReactNode
}
const CardStatisticPartnership = ({
    title,
    user,
    tags,
    rate,
    EPC,
    CR,
    CR48hours,
}: CardStatisticPartnershipProps) => {
    const flagImage = useGetImage(`flags/${user.country}`, false)

    const topImageStyles = {
        backgroundImage: `url(${bc_image})`,
        backgroundSize: 'cover', // You can customize these styles based on your requirements
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        zIndex: 0,
    }
    const today = new Date('2023-11-23')
    
    return (
        <div className={styles.shell}>
            <span className={styles.shell_absolute}>
                <CardTypeDisplay
                    textColor={AppColor.white}
                    text="Business"
                    backgroundColor={AppColor.text}
                />
            </span>
            <div className={styles.right_abolute}><AppColor.refresh/></div>
            <div
                style={topImageStyles}
                className={styles.shell_top_image}>
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
                        <Typography
                            variant="body5"
                            color={AppColor.orange}>
                            {user.roles}
                        </Typography>
                    </div>
                </div>
                <div className={styles.content_top_second}>
                    <SvgText
                        nodeImg={<AppColor.handshake/>}
                        text={`${user.statistic.sponsorship_count}`}
                    />
                    <SvgText
                        nodeImg={<AppColor.message fill='white' />}
                        text={`${user.statistic.responses_count}`}
                    />
                    <SvgText
                        img={icon_star}
                        text={`${user.statistic.rating}%`}
                    />
                   
                </div>
                <div className={styles.tags_wrapper}>
                    {tags.map((tag) => (
                        <TagDisplay text={tag} />
                    ))}
                </div>
            </div>
            <div className={styles.shell_middle}>
                <StatisticItem
                    text="Rate"
                    endNode={
                        rate
                    }
                />

                <StatisticItem
                    text="EPC"
                    endNode={
                       EPC
                    }
                />

                <StatisticItem
                    text="CR"
                    endNode={
                      CR
                    }
                />

                <StatisticItem
                    text="CR for 48 hours"
                    endNode={
                      CR48hours
                    }
                />
            </div>
            <div className={styles.shell_bottom}>
                <AppColor.hearPlus />
                <AppColor.notes />
                <AppColor.hideEye />
            </div>
        </div>
    )
}

type svgTextProps = {
    img?: string
    text: string
    nodeImg?: any;
}
const SvgText = ({ img, text,nodeImg }: svgTextProps) => {
    return (
        <div className={styles.svgText}>
            { nodeImg == null
            ?<img src={img} alt="img" />
            : nodeImg}
            <Typography
                textLineHeight={'100%'}
                variant="body5"
                color="white">
                {text}
            </Typography>
        </div>
    )
}

type TagDisplayProps = {
    text: string
}
const TagDisplay = ({ text }: TagDisplayProps) => {
    return (
        <span className={styles.tag}>
            <Typography
                textLineHeight={'100%'}
                variant="body5"
                color={AppColor.white}>
                {text}
            </Typography>
        </span>
    )
}

type StatisticItemProps = {
    text: string
    endNode: React.ReactNode
}
const StatisticItem = ({ text, endNode }: StatisticItemProps) => {
    return (
        <div className={styles.static_wrapper}>
            <div className={styles.static_text}>
                <Typography
                    textLineHeight="80%"
                    variant="body4"
                    color={AppColor.transparentBlack}>
                    {text}
                </Typography>
            </div>
            <div className={styles.dots}></div>
            {endNode}
        </div>
    )
}
export default CardStatisticPartnership