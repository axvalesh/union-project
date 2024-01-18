
import AppColor from '@common/styles/variables-static';
import Typography from '../Typography/Typography';
import styles from './style.module.scss';

type UserAvatarProps = {
    url?: string;
    active: boolean;
    name: string;
    role?: string;
    flag?: any;
    money?: string;
    variant?: UserAvatarVariants;
    preventMobileNone?: boolean;
    width?: string;
    height?: string;
    activeAgo?: string;
}

type UserAvatarVariants = "row" | "column" | "money"


const UserAvatar = ({active,name,role,url,variant='row',flag,money,preventMobileNone,height,width,activeAgo}:UserAvatarProps) => {

     switch (variant) {
        case "row":
            return <UserAvatarRow activeAgo={activeAgo} width={width} height={height} active={active} name={name} role={role} url={url} preventMobileNone={preventMobileNone} flag={flag} />;
        case "column":
            return <UserAvatarColumn activeAgo={activeAgo} active={active} name={name} role={role} url={url} flag={flag} />;
        case "money":
            return <UserAvatarMoney activeAgo={activeAgo} active={active} name={name} role={role} url={url} flag={flag} money={money} />;
        default:
            return null;
    }
};

const UserAvatarRow = ({active,name,role,url,preventMobileNone,flag,height,width,activeAgo}:UserAvatarProps) => {
    
    const currentWidth = width != null ? width : '38px';
    const currentHeight = height != null ? height : '38px';
    return (
        <div className={styles.wrapper}>
           <div className={styles.position_relative}>
               {url != null
               ? <img width={width != null ? width : '38px'} height={height != null ? height : '38px'} src={url} alt="" />
                 : <AppColor.freelancer fill={AppColor.text} width={currentWidth} height={currentHeight} />}
               <div className={`${styles.active_status} ${active ? styles.active_true : styles.active_false}`}></div>
           </div>
           <div style={preventMobileNone ? { display: 'block' } : {}} className={styles.flex_wrapper}>
                <Typography textLineHeight='100%' variant='body5' fontWeight='500'>
                  {flag}  {name}
                </Typography>
                <Typography color={AppColor.transparentBlack} fontWeight='400' variant='body5' textLineHeight='160%'>
                    {activeAgo}
                </Typography>
                <Typography color={AppColor.orange} textLineHeight='100%'>
                    {role}
                </Typography>
           </div>
      </div>
    )
}

const UserAvatarMoney = ({active,name,role,url,money,flag}:UserAvatarProps) => {
    const stylesItem = {
        'display': 'flex',
        'flexDirection': 'column' as 'column',
        'gap': '5px',
        'alignItems': 'start',
    } as const;
    return (
        <div className={styles.wrapper}>
           <div className={styles.position_relative}>
               {url != null
               ? <img width={'38px'} height={'38px'} src={url} alt="" />
                 : <AppColor.freelancer />}
               <div className={`${styles.active_status} ${active ? styles.active_true : styles.active_false}`}></div>
           </div>
           <div style={stylesItem} className={styles.flex_wrapper}>
                <Typography textLineHeight='100%' variant='body5' fontWeight='500'>
                  {flag}  {name}
                </Typography>
                <Typography color={AppColor.orange} textLineHeight='100%'>
                    {money != null
                    ? `$${money}` : <AppColor.hideEye />}
                </Typography>
           </div>
      </div>
    )
}

const UserAvatarColumn = ({active,name,url,flag}:UserAvatarProps) => {
    return (
        <div className={styles.wrapper_column}>
           <div className={styles.position_relative}>
               {url != null
               ? <img width={'124px'} height={'124px'} src={url} alt="" />
                 : <AppColor.freelancer width={124} height={124} />}
                 <div style={{width: '22px',height: '22px'}} className={`${styles.active_status} ${active ? styles.active_true : styles.active_false}`}></div>
           </div>
                <Typography textLineHeight='100%' variant='body5' fontWeight='500'>
                   {flag} {name}
                </Typography>
      </div>
    )
}
export default UserAvatar;