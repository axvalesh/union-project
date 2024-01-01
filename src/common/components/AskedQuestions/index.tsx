
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import Typography from '../ui/Typography/Typography';
import MyButtonBlack from '../ui/MyButton/variants/MyButtonBlack';
import Dropdown from '../ui/Dropdown';
import { ReactComponent as CommunityImage} from '@assets/svg/community.svg';
import { ReactComponent as ManagersImage} from '@assets/svg/managers.svg';
import { ReactComponent as GeneralHelpImage} from '@assets/svg/general-help.svg';
import { ReactComponent as ContactUs} from '@assets/svg/contact-us.svg';
import {useState} from 'react'
const AskedQuestion = () => {
    const screenWidth = window.innerWidth;
    return (
       <div>
        {screenWidth <= 768 && <Cookies />}
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
    const [show,setShow] = useState(true);
    return (
      <div style={{display: show ? 'flex' : 'none'}} className={styles.cookies}>
        <AppColor.cookies />
        <div className={styles.cookies_child}>
          <Typography variant="body4">
            This site uses cookies to improve your experience. Privacy Policy
          </Typography>
          <MyButtonBlack
          onClick={() => {setShow(false)}}
          >
            GOT IT
          </MyButtonBlack>
        </div>
      </div>
    )
  };

export default AskedQuestion;