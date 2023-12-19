import HeaderNothAuthorized from "@common/components/Header/Header-not-authorized/Header-not-authorized";
import NavigationItem from "@common/components/navigation_history/NavigationItem/index";
import AppColor from "@common/styles/variables-static";
import styles from './style.module.scss';
import Typography from "@common/components/ui/Typography/Typography";
import MyButtonBlack from "@common/components/ui/MyButton/variants/MyButtonBlack";
import MyButtonOrange from "@common/components/ui/MyButton/variants/MyButtonOrange";
import SizeBox from "@common/components/ui/SizeBox/index";
import Dropdown from "@common/components/ui/Dropdown/index";

import { ReactComponent as CommunityImage} from '@assets/svg/community.svg';
import { ReactComponent as ManagersImage} from '@assets/svg/managers.svg';
import { ReactComponent as GeneralHelpImage} from '@assets/svg/general-help.svg';
import { ReactComponent as ContactUs} from '@assets/svg/contact-us.svg';
import Footer from "@common/components/Footer/Footer";

const Error = () => {
    const screenWidth = window.innerWidth;

    return (
      <div>
          <HeaderNothAuthorized/>
          <div className={styles.wrapper}>
            <NavigationItem textList={[ 
              <p className={styles.error_title}>404 Not Found</p>
            ]} 
            image={<AppColor.home />} 
          />

          <div className={styles.flex_center}>
            <Typography variant="titleSmall" textTransform="uppercase" textAlign="center">
              Oops! That page can’t be found.          
            </Typography>
           <div className={styles.block_margin}>
            <Typography variant="body4" textAlign="center">
                It looks like nothing was found at this location. Maybe try one of the links below or a search?
              </Typography>
           </div>
            <div style={{display: 'flex'}}>
              <MyButtonBlack onClick={() => {}} padding="14px 26px">
                Back
              </MyButtonBlack>
              <SizeBox width="20px"/>
              <MyButtonOrange 
              onClick={() => {}}
              padding="14px 30px"
              >
                Go to Home
              </MyButtonOrange>
            </div>
            {screenWidth <= 768 && <Cookies />}
            </div>
            <div className={styles.dropdown_parent}>
            <div className={styles.absolute}>
                 <div className={styles.flex_center_child}>
                 <Cookies />
                 </div>
                  </div>

                <div className={styles.flex_center}>
                  <Typography variant="body2">
                    Frequently Asked Questions
                  </Typography>
                </div>
                <div className={styles.line}></div>
                <div className={styles.dropdown_wrapper}>
                 
                  <Dropdown 
                  title="What if your requirements does not meet any of my package?"
                  description="In risus nec etiam nunc, leo velit. Turpis et diam cursus adipiscing dolor posuere. Velit elit metus tempus volutpat turpis iaculis tempor nam. Sapien felis at ipsum aliquet commodo."
                  />
                  <Dropdown 
                  title="What software do you use?"
                  description="In risus nec etiam nunc, leo velit. Turpis et diam cursus adipiscing dolor posuere. Velit elit metus tempus volutpat turpis iaculis tempor nam. Sapien felis at ipsum aliquet commodo."
                  />
                  <Dropdown 
                  title="What is freelance ?"
                  description="In risus nec etiam nunc, leo velit. Turpis et diam cursus adipiscing dolor posuere. Velit elit metus tempus volutpat turpis iaculis tempor nam. Sapien felis at ipsum aliquet commodo."
                  />
                  <Dropdown 
                  title="Why I see 404 page ?"
                  description="In risus nec etiam nunc, leo velit. Turpis et diam cursus adipiscing dolor posuere. Velit elit metus tempus volutpat turpis iaculis tempor nam. Sapien felis at ipsum aliquet commodo."
                  />
                  <Dropdown 
                  title="What to do being in staff ?"
                  description="In risus nec etiam nunc, leo velit. Turpis et diam cursus adipiscing dolor posuere. Velit elit metus tempus volutpat turpis iaculis tempor nam. Sapien felis at ipsum aliquet commodo."
                  showLine= {screenWidth <= 768 ? false : true}
                  />
                
              </div>
            </div>
            <div className={styles.card_links_wrapper}>
              <LinkCard 
              image={<CommunityImage />}
              title="Community"
              description="FAQ & Discussions"
              />
              <LinkCard 
              image={<ManagersImage />}
              title="Managers"
              description="Help You With Solutions"
              />
              <LinkCard 
              image={<GeneralHelpImage />}
              title="General Help"
              description="Chat With Moderators"
              />
              <LinkCard 
              image={<ContactUs />}
              title="Contact Us"
              description="Still need help?"
              />
            </div>
          </div>
          <Footer />
      </div>
    );
};

type LinkCardProps = {
  image: any;
  title: string;
  description:string;
}
const LinkCard = ({image,title,description}:LinkCardProps) => {
  return (
    <div className={styles.link_card}>
      {image}
      <div className={styles.link_card_child}> 
        <Typography variant="body7">
        {title}
        </Typography>
        <Typography variant="body5">
        {description}
        </Typography>
      </div>
    </div>
  )
};
const Cookies = () => {
  return (
    <div className={styles.cookies}>
      <AppColor.cookies />
      <div className={styles.cookies_child}>
        <Typography variant="body4">
          This site uses cookies to improve your experience. Privacy Policy
        </Typography>
        <MyButtonBlack
        onClick={() => {}}
        >
          GOT IT
        </MyButtonBlack>
      </div>
    </div>
  )
};
export default Error;