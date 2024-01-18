import Typography from '@common/components/ui/Typography/Typography'
import styles from './style.module.scss'
import AppColor from '@common/styles/variables-static'
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange'
import ModalTriangleTop from '@common/components/ui/modals/ModalTriangleTop/index'
import ModalBottomCenter from '@common/components/ui/modals/ModalBottomCenter/index'
import { useHover } from '@common/helpers/useHover'

export type SquadCardProps = {
    title: string
    members: membersType[]
}

type membersType = {
    icon: any
    isOnline: boolean
}
const SquadCard = ({ members, title }: SquadCardProps) => {
    const [hovered, eventHandlers] = useHover({delayInMilliseconds: 1000});
    return (
        <div className={styles.wrapper}>
            <div {...eventHandlers} className={styles.modal_absolute_handler}>
                {' '}
                <AppColor.threeLines />
                <ModalBottomCenter node={<div className={styles.modal_edit_wrapper}>
                    <div><AppColor.edit/> <Typography variant='body5'>Edit</Typography></div>
                    <div><AppColor.lightning/> <Typography variant='body5'>Report</Typography></div>
                </div>} isActive={hovered} />
            </div>
            <div className={styles.main_wrapper}>
                <Typography fontWeight='500' textTransform='uppercase' variant="body4">{title}</Typography>
                {members.length > 0 ? (
                    <div className={styles.members_wrapper}>
                        {members.map((item, index) => {
                            if ((index) < (members.length > 8 ? 7 : 8)) {
                                return (
                                    <div
                                        className={
                                            styles.member_wrapper
                                        }>
                                        {item.icon}
                                        <div
                                            className={
                                                styles.member_activity
                                            }
                                            style={{
                                                backgroundColor:
                                                    item.isOnline
                                                        ? AppColor.green
                                                        : AppColor.red,
                                            }}></div>
                                    </div>
                                )
                            } else if(index == 7 && members.length > 8) {
                                return <div className={styles.last_circle}><Typography variant='body4' fontWeight='500'>+{members.length-7}</Typography></div>
                            } else {
                                return null;
                            }
                        })}
                    </div>
                ) : (
                    <MyButtonTransparentOrange onClick={() => {}}>
                        MEMBERS
                    </MyButtonTransparentOrange>
                )}
                <Typography variant="body4">
                    {members.length} Members
                </Typography>
            </div>
        </div>
    )
}

export default SquadCard
