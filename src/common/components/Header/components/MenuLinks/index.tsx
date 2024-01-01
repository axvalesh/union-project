
import Typography from '@common/components/ui/Typography/Typography';
import { LinksType } from './content';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';
import {useState} from 'react'

const MenuLinks = () => {
    const [activeTab,setActiveTab] = useState(0);
    return (
      <div className={styles.wrapper}>
           <div className={styles.links_wrapper}>
         
              
                <Link
                  onClick={() => {setActiveTab(0)}}
                  activeIndex={activeTab}
                  ImageNode={<AppColor.cart fill={AppColor.text} />}
                  ImageNodeActive={<AppColor.cart fill='white' />}
                  text='Services'
                  index={0}
                />

                <Link
                  onClick={() => {setActiveTab(1)}}
                  activeIndex={activeTab}
                  ImageNode={<AppColor.orders />}
                  ImageNodeActive={<AppColor.ordersWhite />}
                  text='Orders'
                  index={1}
                />

                <Link
                  onClick={() => {setActiveTab(2)}}
                  activeIndex={activeTab}
                  ImageNode={<AppColor.caseIcon fill={AppColor.text} />}
                  ImageNodeActive={<AppColor.caseWhite fill='white' />}
                  text='Sponsorships'
                  index={2}
                />

                <Link
                  onClick={() => {setActiveTab(3)}}
                  activeIndex={activeTab}
                  ImageNode={<AppColor.freelancer fill={AppColor.text} />}
                  ImageNodeActive={<AppColor.freelancerWhite fill='white' />}
                  text='Freelancers'
                  index={3}
                />

                <Link
                  onClick={() => {setActiveTab(4)}}
                  activeIndex={activeTab}
                  ImageNode={<AppColor.managers fill={AppColor.text} />}
                  ImageNodeActive={<AppColor.managersWhite fill='white' />}
                  text='Managers'
                  index={4}
                />

                <Link
                  onClick={() => {setActiveTab(5)}}
                  activeIndex={activeTab}
                  ImageNode={<AppColor.searchIconLines fill={AppColor.text} />}
                  ImageNodeActive={<AppColor.searchIconLines fill='white' />}
                  text='Search'
                  index={5}
                />

                
             
           </div>
           <div className={styles.horizontal_line}></div>
           <div className={styles.content_wrapper}>
              <div className={styles.search_section}>

              </div>
              <div className={styles.vertical_line}></div>
              <div className={styles.search_result_wrapper}>
                
              </div>
           </div>
      </div>
    );
};

const Link = ({activeIndex,ImageNode,text,index,onClick,ImageNodeActive}:LinksType) => {
  return (
    <div onClick={onClick} className={styles.link_wrapper} style={{backgroundColor: index == activeIndex? AppColor.orange : 'transparent'}}>
      {activeIndex == index ? ImageNodeActive : ImageNode}
      <Typography variant='body7' color={activeIndex == index ? 'white' : AppColor.text} fontWeight='500' textLineHeight='100%'>
        {text}
      </Typography>
    </div>
  );
}

export default MenuLinks;