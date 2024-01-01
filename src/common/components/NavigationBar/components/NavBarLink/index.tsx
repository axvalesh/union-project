import { Link } from "react-router-dom"

import styles from './style.module.scss';
import AppColor from "@common/styles/variables-static";
import Typography from "@common/components/ui/Typography/Typography";

type NavBarLinkProps = {
    title: string
    index: number
    activeIndex: number
}
const NavBarLink = ({
    title,
    index,
    activeIndex,
}: NavBarLinkProps) => {
    return (
        <Link
            to={`/dashboard/${title}`}
            className={styles.nav_bar_link}
            style={{
                backgroundColor:
                    index == activeIndex
                        ? AppColor.orange
                        : 'transparent',
            }}>
            <Typography textTransform="uppercase" color="white" variant="body1" fontWeight="500">{title}</Typography>
        </Link>
    )
}
export default NavBarLink;
