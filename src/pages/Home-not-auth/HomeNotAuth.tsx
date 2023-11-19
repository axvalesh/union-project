import HeaderNothAuthorized from '@common/components/Header/Header-not-authorized/Header-not-authorized';
import styles from './style.module.scss'
import {useState,useEffect} from 'react'
import chevronDownTransparent from '@assets/svg/chevron-down-transparent.svg'
import Typography from '@common/components/Typography/Typography';
import AppColor from '@common/styles/variables-static';
import MyButton from '@common/components/MyButton/MyButton';

import mobileImage from '@assets/images/home-not-auth_topBackground-mobile.png';
import desktopImage from '@assets/images/home-not-auth_topBackground.png';
import searchIcon from '@assets/svg/search-icon.svg';

import { AdvantagesSectionCardProps, PopularCategorysCatalogCardProps } from './models';
import { advantanges_section_card_content, popular_categorys_content } from './content';
import Slider from '@common/components/Slider/Slider';




const HomeNotAuth = () => {

  const [bcImageFirst, setBcImageFirst] = useState('');
  const screenWidth = window.innerWidth;
  useEffect(() => {
    let imageUrl;

    if (screenWidth <= 768) {
      imageUrl = mobileImage;
    } else {
      imageUrl = desktopImage;
    }

    setBcImageFirst(imageUrl);
  }, []);

    const divStyle = {
        backgroundImage: `url(${bcImageFirst})`,
        backgroundSize: 'contain', // You can customize these styles based on your requirements
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right top',
        width: '100%', // Set the width and height as needed
        height: '100%',
      };
    

    return (
      <>
        <div style={divStyle} className={styles.welcome_screen_wrapper}>
            <div className={styles.wrapper}>
           <HeaderNothAuthorized />
            <div className={styles.emptyLine}></div>
            <div className={styles.welcome_text}>
                <Typography textTransform='uppercase' textAlign={screenWidth <= 768 ? 'center' : 'start'} variant='title' color={AppColor.text}>
                    Empower Your Projects with
                   <span className={styles.welcome_text_orange_span}> Zero Commission</span>
                </Typography>
                
                <div className={styles.welcome_text_line}></div>
           </div>

           <div className={styles.input_wrapper}>
            <span className={styles.input_wrapper_search}>
              <img width={20} height={20} src={searchIcon} alt="search" />
            </span>
            <span className={styles.input_wrapper_search_button}>
              <Typography style={{letterSpacing: '0.48px'}} variant='body1' color='white' textTransform='uppercase'>
                Search
              </Typography>
            </span>
                <input type="text" placeholder='I’m looking for'/>
                <div className={styles.input_wrapper_absolute}>
                    <span></span>
                    <div className={styles.input_wrapper_absolute_dropdown}>
                        <Typography variant='body1' color={AppColor.transparentBlack}>
                            Search Master
                        </Typography>
                        <img src={chevronDownTransparent} alt="showList" />
                    </div>
                </div>
           </div>

            <span className={styles.welcome_button}>
            <MyButton 
            color={AppColor.orange}
            textColor='white'
            border='none'
            borderHover='none'
            width='296px'
            onClick={() => {}}>
                    Search
            </MyButton>
           </span>
          <span className={styles.welcome_text_bottom}>
           <Typography variant='body1'>
           Explore a world of possibilities! Choose the perfect fit for your projects
           </Typography>
           </span>
        </div>
      </div>
      <div className={styles.wrapper}>
        <section className={styles.advantanges_section}>
          <Typography textAlign={screenWidth <= 768 ? 'center' : 'start'} textTransform='uppercase' variant='titleSmall' color={AppColor.orange}>
            One Account, <span className={styles.advantanges_section_title_grey}>Four Distinct Roles</span>       
          </Typography>

          <div className={styles.advantanges_section_subtitle}>
            <Typography textAlign='center' variant='body4' color={AppColor.transparentBlack}>
              Explore endless opportunities with our unified account for all user types
            </Typography>
          </div>

          <div className={styles.advantanges_section_cards}>
            {advantanges_section_card_content.map(item => <AdvantangesSectionCard img={item.img} description={item.description} title={item.title}/>)}
          </div>
        </section>
      </div>
      <div className={styles.popular_categorys_wawe}>
          <div className={styles.wawe}>
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={styles.shape_fill}></path>
              </svg>
          </div>
          <div className={styles.wrapper}>

          
          <section className={styles.popular_categorys}>
            <Typography textAlign={screenWidth <= 768 ? 'center' : 'start'} textTransform='uppercase' variant='titleSmall'>
              Explore Popular <span className={styles.popular_categorys_title_orange}>Categories</span> in Demand
            </Typography>

            <div className={styles.popular_categorys_subtitle}>
              <Typography textAlign='center' variant='body4' color={AppColor.transparentBlack}>
                Browse services, orders, and sponsorships - unlock the path to success!
              </Typography>
            </div>

            {
              screenWidth <= AppColor.tabletSize
            ? <div className={styles.popular_categorys_categorysDisplay}>
                <div className={styles.popular_categorys_categorysDisplay_mobile}></div>
              </div>
              :
            <div className={styles.popular_categorys_categorysDisplay}>
                {popular_categorys_content.map(item => <PopularCategorysCatalogCard 
                activeIndex={item.activeIndex} 
                cardIndex={item.cardIndex} 
                height={item.height} 
                img={item.img}
                subtitle={item.subtitle}
                title={item.title}
                width={item.width}
                />)}
            </div>
            }

            <Slider itemWidth={300} maxWidth={1100} elementsCount={6} gap={21}>
              <div className={styles.color_cube}></div>
              <div className={styles.color_cube}></div>
              <div className={styles.color_cube}></div>
              <div className={styles.color_cube}></div>
              <div className={styles.color_cube}></div>
              <div className={styles.color_cube}></div>
            </Slider>
          </section>
          </div>
        </div>
      </>
    );
};


const AdvantangesSectionCard = ({img,title,description}:AdvantagesSectionCardProps) => {
  return (
    <div className={styles.advantanges_section_card_item}>
      <img src={img} width={224} height={160} alt="image" />
      <span className={styles.advantanges_section_card_title}>
        <Typography textAlign='center' variant='body2'>
          {title}
        </Typography>
      </span>
      <span className={styles.advantanges_section_card_description}>
        <Typography textAlign='center' variant='body4'>
          {description}
        </Typography>
      </span>
    </div>
  )
}

const PopularCategorysCatalogCard = ({img,title,subtitle,width,height,activeIndex,cardIndex}:PopularCategorysCatalogCardProps) => {
  return (
    <div style={{backgroundColor: activeIndex == cardIndex ? AppColor.orange : AppColor.white}} className={styles.popular_categorys_card}>
      <img src={img} width={width} height={height} alt="image" />
      <div>
        <Typography variant='body5' color={activeIndex == cardIndex ? 'white' : AppColor.transparentBlack}>
        {title}
        </Typography>
        <Typography variant='body4' color={activeIndex == cardIndex ? 'white' : AppColor.text}>
        {subtitle}
        </Typography>
      </div>
    </div>
  );
};
export default HomeNotAuth;