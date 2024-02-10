import HeaderNothAuthorized from '@common/components/Header/Header-not-authorized/Header-not-authorized';
import styles from './style.module.scss'
import {useState,useEffect} from 'react'
import chevronDownTransparent from '@assets/svg/chevron-down-transparent.svg'
import Typography from '@common/components/ui/Typography/Typography';
import AppColor from '@common/styles/variables-static';
import MyButton from '@common/components/ui/MyButton/MyButton';

import fourthBcSvg from '@assets/svg/home-page-fourth-background.svg';
import listCheckedSvg from '@assets/svg/icon-checked.svg';
import mobileImage from '@assets/images/home-not-auth_topBackground-mobile.png';
import desktopImage from '@assets/images/home-not-auth_topBackground.png';
import searchIcon from '@assets/svg/search-icon.svg';
import testUserImage2 from '@assets/images/test-user-image2.png';
import pointIcon from '@assets/svg/point-icon.svg';

import peoplesImage1 from '@assets/images/home-page-peoples1.png';
import peoplesImage2 from '@assets/images/home-page-peoples2.png';
import peoplesImage3 from '@assets/images/home-page-peoples3.png';
import peoplesImage4 from '@assets/images/home-page-peoples4.png';
import peoplesImage5 from '@assets/images/home-page-peoples5.png';
import peoplesImage6 from '@assets/images/home-page-peoples6.png';
import peoplesImage7 from '@assets/images/home-page-peoples7.png';
import peoplesImage8 from '@assets/images/home-page-peoples8.png';

import { AdvantagesSectionCardProps, PopularCategorysCatalogCardProps, PopularCategorysServiceCardProps, sixSectionCardProps } from './models';
import { advantanges_section_card_content, popular_categorys_content, popular_categorys_content_services, six_section_cards_content } from './content';
import Slider from '@common/components/ui/Slider/Slider';
import { popular_services } from '@common/content/services';
import CardTime from '@common/components/cards/CardTime/CardTime';
import { userModel } from 'common/models/user';
import { useGetImage } from '@common/helpers/UseGetImage';
import Footer from '@common/components/Footer/Footer';
import { useScreenSize } from '@common/helpers/useScreenSize';
import SizeBox from '@common/components/ui/SizeBox/index';
import { Link } from 'react-router-dom';




const HomeNotAuth = () => {
  
  const [bcImageFirst, setBcImageFirst] = useState('');
  const {width,height} = useScreenSize();
  useEffect(() => {
    let imageUrl;

    if (width <= 768) {
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
    
      const fakeUser:userModel = {
        country: 'Ukraine',
        image: '',
        name: 'Artem M.',
        roles: 'Customer',
        activeAgo: '2 days',
        lvl: '55',
        isActive: true,
        statistic: {
          comments_count: 55,
          sponsorship_count: 55,
          rating: 98,
          responses_count: 900
        }
      }
      const fakeUser2:userModel = {
        country: 'Ukraine',
        image: '',
        name: 'Antonio L.',
        roles: 'Sponsor',
        activeAgo: '2 days',
        lvl: '55',
        isActive: true,
        statistic: {
          comments_count: 55,
          sponsorship_count: 55,
          rating: 98,
          responses_count: 900
        }
      }

      const flagImage = useGetImage(`flags/${fakeUser2.country}`,false);

    return (
      <>
        <div style={divStyle} className={styles.welcome_screen_wrapper}>
        <HeaderNothAuthorized />
            <div className={styles.wrapper}>
            <div className={styles.emptyLine}></div>
            <div className={styles.welcome_text}>
                <Typography textTransform='uppercase' textAlign={width <= 768 ? 'center' : 'start'} variant='title' color={AppColor.text}>
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
          <Typography textAlign={width <= 768 ? 'center' : 'start'} textTransform='uppercase' variant='titleSmall' color={AppColor.orange}>
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
            <Typography textAlign={width <= 768 ? 'center' : 'start'} textTransform='uppercase' variant='titleSmall'>
              Explore Popular <span className={styles.popular_categorys_title_orange}>Categories</span> in Demand
            </Typography>

            <div className={styles.popular_categorys_subtitle}>
              <Typography textAlign='center' variant='body4' color={AppColor.transparentBlack}>
                Browse services, orders, and sponsorships - unlock the path to success!
              </Typography>
            </div>

            {
              width <= AppColor.tabletSize
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
            <div style={{padding: '0px 80px'}}  className={styles.popular_categorys_slider}>
            <Slider itemWidth={260} maxWidth={width <= AppColor.tabletSize ? 260 : 1100} elementsCount={popular_categorys_content_services.length} gap={21}>
              {popular_categorys_content_services.map(item => <PopularCategorysServiceCard img={item.img} svg={item.svg} title={item.title}/>)}
            </Slider>
            </div>
            <div className={styles.popular_categorys_buttons}>
           
              <MyButton onClick={() => {}} fontWeight="500">
              Browse all services
              </MyButton>
              <MyButton
                border="1px solid transparent"
                color="transparent"
                textColor={AppColor.text}
                hoverColor="transparent"
                hoverTextColor={AppColor.orange}
                fontWeight="500"
                onClick={() => {}}>
                Create own service
              </MyButton>
            </div>
            <div className={styles.popular_categorys_skills}>
              <div className={styles.popular_categorys_skills_title}>
                <Typography variant='body3'>
                Popular Skills
                </Typography>
              </div>
              <section className={styles.popular_categorys_skills_list}>
                {popular_services.map(service => <div><Typography fontWeight='400' variant='body1'>{service}</Typography></div>)}
              </section>
              <div className={styles.popular_categorys_buttons_mobile}>
           
              <MyButton onClick={() => {}} fontWeight="500">
              Browse all services
              </MyButton>
              <MyButton
                border="1px solid transparent"
                color="transparent"
                textColor={AppColor.text}
                hoverColor="transparent"
                hoverTextColor={AppColor.orange}
                fontWeight="500"
                onClick={() => {}}>
                Create own service
              </MyButton>
            </div>
            </div>
          </section>
          </div>
        </div>
        <div className={styles.wrapper}>
        <section className={styles.fourth_screen}>
            <div className={styles.fourth_screen_shell}>
              <div className={styles.fourth_screen_slider}>
                <img className={styles.fourth_screen_bc_image} src={fourthBcSvg} alt="" />
              <Slider paddingBottom='10px' paddingTop='20px' elementsCount={6} itemWidth={250} maxWidth={width <= AppColor.tabletSize ? 250 : 540} gap={40}>
                <CardTime 
                title='Logo by sample in vector in maximum quality' 
                currentMoneyRange={500} totalMoneyRange={5000} 
                date={new Date('2023-01-01T12:00:00')}
                tags={['Logo','Logo Design', 'Logo Maker', 'Logo Create']}
                user={fakeUser}
                />
                <CardTime 
                title='Logo by sample in vector in maximum quality' 
                currentMoneyRange={500} totalMoneyRange={5000} 
                date={new Date('2023-01-01T12:00:00')}
                tags={['Logo','Logo Design', 'Logo Maker', 'Logo Create']}
                user={fakeUser}
                />
                <CardTime 
                title='Logo by sample in vector in maximum quality' 
                currentMoneyRange={500} totalMoneyRange={5000} 
                date={new Date('2023-01-01T12:00:00')}
                tags={['Logo','Logo Design', 'Logo Maker', 'Logo Create']}
                user={fakeUser}
                />
                <CardTime 
                title='Logo by sample in vector in maximum quality' 
                currentMoneyRange={500} totalMoneyRange={5000} 
                date={new Date('2023-01-01T12:00:00')}
                tags={['Logo','Logo Design', 'Logo Maker', 'Logo Create']}
                user={fakeUser}
                />
                <CardTime 
                title='Logo by sample in vector in maximum quality' 
                currentMoneyRange={500} totalMoneyRange={5000} 
                date={new Date('2023-01-01T12:00:00')}
                tags={['Logo','Logo Design', 'Logo Maker', 'Logo Create']}
                user={fakeUser}
                />
                <CardTime 
                title='Logo by sample in vector in maximum quality' 
                currentMoneyRange={500} totalMoneyRange={5000} 
                date={new Date('2023-01-01T12:00:00')}
                tags={['Logo','Logo Design', 'Logo Maker', 'Logo Create']}
                user={fakeUser}
                />
              </Slider>
              </div>
              <div className={styles.fourth_screen_text}>
                <Typography variant='titleSmall' color={AppColor.orange} textTransform='uppercase'>
                  Ignite <span className={styles.fourth_screen_text_grey}>Change Together</span>
                </Typography>

                <div className={styles.fourth_screen_text_margin_top}>
                  <Typography variant='body1'>
                  Explore featured campaigns and contribute to projects that resonate with you
                  </Typography>
                </div>

                <div className={styles.fourth_screen_details_none_mobile}>
                  <ul className={styles.fourth_screen_list_ul}>
                    <li style={{listStyleImage: `url(${listCheckedSvg})`}}>
                      <Typography variant='body4' fontWeight='400'>
                      <span className={styles.fourth_screen_list_bold_text}>Innovation:</span> Support groundbreaking projects and be part of their success story.
                      </Typography>
                      <SizeBox height='5px'/>
                    </li>
                    <li style={{listStyleImage: `url(${listCheckedSvg})`}}>
                      <Typography variant='body4' fontWeight='400'>
                      <span className={styles.fourth_screen_list_bold_text}>Engagement:</span> Connect with creators, exchange ideas, and collaborate on unique ventures.
                      </Typography>
                      <SizeBox height='5px'/>
                    </li>
                    <li style={{listStyleImage: `url(${listCheckedSvg})`}}>
                      <Typography variant='body4' fontWeight='400'>
                      <span className={styles.fourth_screen_list_bold_text}>Exclusive Rewards:</span> Enjoy special perks, from early access to products to recognition for your contribution.
                      </Typography>
                    </li>
                  </ul>
                  <div className={styles.fourth_screen_buttons}>
                    <MyButton
                    color={AppColor.orange}
                    textColor='white'
                    hoverColor='transparent'
                    hoverTextColor={AppColor.orange}
                    onClick={() => {}} textTransform='uppercase'>
                    try sponsorship
                    </MyButton>
                    <MyButton
                      border="1px solid transparent"
                      color="transparent"
                      textColor={AppColor.text}
                      hoverColor="transparent"
                      hoverTextColor={AppColor.orange}
                      textTransform='uppercase'
                      fontWeight="500"
                      onClick={() => {}}>
                      Create own service
                    </MyButton>
                  </div>
                </div>
              </div>  
              <div className={styles.fourth_screen_sponsor_wrapper}>
                <img width={38} height={38} src={testUserImage2} alt="userImage" />
                <div className={styles.fourth_screen_details_wrapper}>
                  <div>
                  <img width={16} height={13} src={flagImage} alt="" />
                  <span className={styles.fourth_screen_inline_text}>
                    <Typography variant='body4'>
                      <span className={styles.fourth_screen_sponsor_bold_text}>{fakeUser2.name}</span>
                      sponsored $2 500 in 
                      <span className={styles.fourth_screen_sponsor_bold_text}>GameWithMe launch</span>
                    </Typography>
                  </span>
                  </div>
                  <Typography variant='body4' color={AppColor.transparentBlack}>
                    2 hours ago
                  </Typography>
                </div>
              </div>
              <div className={styles.fourth_screen_details_none_desktop}>
                  <ul className={styles.fourth_screen_list_ul}>
                    <li style={{listStyleImage: `url(${listCheckedSvg})`}}>
                      <Typography variant='body4' fontWeight='400'>
                      <span className={styles.fourth_screen_list_bold_text}>Innovation:</span> Support groundbreaking projects and be part of their success story.
                      </Typography>
                      <SizeBox height='5px'/>
                    </li>
                    <li style={{listStyleImage: `url(${listCheckedSvg})`}}>
                      <Typography variant='body4' fontWeight='400'>
                      <span className={styles.fourth_screen_list_bold_text}>Engagement:</span> Connect with creators, exchange ideas, and collaborate on unique ventures.
                      </Typography>
                      <SizeBox height='5px'/>
                    </li>
                    <li style={{listStyleImage: `url(${listCheckedSvg})`}}>
                      <Typography variant='body4' fontWeight='400'>
                      <span className={styles.fourth_screen_list_bold_text}>Exclusive Rewards:</span> Enjoy special perks, from early access to products to recognition for your contribution.
                      </Typography>
                    </li>
                  </ul>
                  <div className={styles.fourth_screen_buttons}>
                    <MyButton
                    color={AppColor.orange}
                    textColor='white'
                    hoverColor='transparent'
                    hoverTextColor={AppColor.orange}
                    onClick={() => {}} textTransform='uppercase'>
                    try sponsorship
                    </MyButton>
                    <MyButton
                      border="1px solid transparent"
                      color="transparent"
                      textColor={AppColor.text}
                      hoverColor="transparent"
                      hoverTextColor={AppColor.orange}
                      textTransform='uppercase'
                      fontWeight="500"
                      onClick={() => {}}>
                      Create own service
                    </MyButton>
                  </div>
                </div>
            </div>
          </section>
        </div>
        <div className={styles.fifth_section_background}>
          <div className={styles.wrapper}>
          <section className={styles.fifth_sectin_wrapper}>
          <div className={styles.fifth_sectin_wrapper_flex}>
            <div className={styles.fifth_sectin_wrapper_details_wrapper}>
              <Typography variant='titleSmall' textTransform='uppercase'>
                Elevate Projects with Professional <span style={{color: AppColor.orange}}>Management</span>
              </Typography>
              <span className={styles.fifth_sectin_details_text_margin}>
              <Typography variant='body4' color={AppColor.transparentBlack}>
                Experience the advantages of being a manager on our platform
              </Typography>
              </span>
              <div className={styles.fourth_screen_details_none_mobile}>
                <ul className={styles.fourth_screen_list_ul}>
                  <li style={{listStyleImage: `url(${pointIcon})`}}>
                    <Typography variant='body4' fontWeight='400'>
                    <span className={styles.fourth_screen_list_bold_text}>Strategic Alliances:</span> Establish lucrative partnerships with freelancers, earning a portion of project revenues for introducing clients or contributing to project success. 
                    </Typography>
                    <SizeBox height='5px'/>
                  </li>
                  <li style={{listStyleImage: `url(${pointIcon})`}}>
                    <Typography variant='body4' fontWeight='400'>
                    <span className={styles.fourth_screen_list_bold_text}>Project Facilitation:</span> Guide clients through the project journey, ensuring a smooth experience and optimal utilization of our platform.
                    </Typography>
                    <SizeBox height='5px'/>
                  </li>
                  <li style={{listStyleImage: `url(${pointIcon})`}}>
                    <Typography variant='body4' fontWeight='400'>
                    <span className={styles.fourth_screen_list_bold_text}>Expert Advisory:</span> Offer valuable advice to users, covering platform usage, project execution, and leveraging our services for maximum impact.
                    </Typography>
                  </li>
                </ul>
                  <div className={styles.fourth_screen_buttons}>
                    <MyButton
                    onClick={() => {}} textTransform='uppercase'>
                    contact managers
                    </MyButton>
                    <MyButton
                      border="1px solid transparent"
                      color="transparent"
                      textColor={AppColor.text}
                      hoverColor="transparent"
                      hoverTextColor={AppColor.orange}
                      textTransform='uppercase'
                      fontWeight="500"
                      onClick={() => {}}>
                      View partnerships
                    </MyButton>
                  </div>
                </div>
            </div>
            
            <div className={styles.fourth_screen_details_none_desktop}>
                <ul className={styles.fourth_screen_list_ul}>
                  <li style={{listStyleImage: `url(${pointIcon})`}}>
                    <Typography variant='body4' fontWeight='400'>
                    <span className={styles.fourth_screen_list_bold_text}>Strategic Alliances:</span> Establish lucrative partnerships with freelancers, earning a portion of project revenues for introducing clients or contributing to project success. 
                    </Typography>
                    <SizeBox height='5px'/>
                  </li>
                  <li style={{listStyleImage: `url(${pointIcon})`}}>
                    <Typography variant='body4' fontWeight='400'>
                    <span className={styles.fourth_screen_list_bold_text}>Project Facilitation:</span> Guide clients through the project journey, ensuring a smooth experience and optimal utilization of our platform.
                    </Typography>
                    <SizeBox height='5px'/>
                  </li>
                  <li style={{listStyleImage: `url(${pointIcon})`}}>
                    <Typography variant='body4' fontWeight='400'>
                    <span className={styles.fourth_screen_list_bold_text}>Expert Advisory:</span> Offer valuable advice to users, covering platform usage, project execution, and leveraging our services for maximum impact.
                    </Typography>
                  </li>
                </ul>
                  <div className={styles.fourth_screen_buttons}>
                    <MyButton
                    onClick={() => {}} textTransform='uppercase'>
                    contact managers
                    </MyButton>
                    <MyButton
                      border="1px solid transparent"
                      color="transparent"
                      textColor={AppColor.text}
                      hoverColor="transparent"
                      hoverTextColor={AppColor.orange}
                      textTransform='uppercase'
                      fontWeight="500"
                      onClick={() => {}}>
                      View partnerships
                    </MyButton>
                  </div>
                </div>
                <div className={styles.fifth_section_images_wrapper}>
                  <img width={width <= AppColor.tabletSize ? 61 : 112} height={width <= AppColor.tabletSize ? 61 : 112} src={peoplesImage1} alt="image" />
                  <img width={width <= AppColor.tabletSize ? 61 : 112} height={width <= AppColor.tabletSize ? 61 : 112} src={peoplesImage2} alt="image" />
                  <img width={width <= AppColor.tabletSize ? 61 : 112} height={width <= AppColor.tabletSize ? 61 : 112} src={peoplesImage3} alt="image" />
                  <img width={width <= AppColor.tabletSize ? 61 : 112} height={width <= AppColor.tabletSize ? 61 : 112} src={peoplesImage4} alt="image" />
                  <img width={width <= AppColor.tabletSize ? 61 : 112} height={width <= AppColor.tabletSize ? 61 : 112} src={peoplesImage5} alt="image" />
                  <img width={width <= AppColor.tabletSize ? 61 : 112} height={width <= AppColor.tabletSize ? 61 : 112} src={peoplesImage6} alt="image" />
                  <img width={width <= AppColor.tabletSize ? 61 : 112} height={width <= AppColor.tabletSize ? 61 : 112} src={peoplesImage7} alt="image" />
                  <img width={width <= AppColor.tabletSize ? 61 : 112} height={width <= AppColor.tabletSize ? 61 : 112} src={peoplesImage8} alt="image" />
                </div>
                <div>

                </div>
            </div>
          </section>
          </div>
        </div>
        <div className={styles.wrapper}>
            <section className={styles.six_section_wrapper}>
              <div className={styles.six_section_cards_wrapper}>
                {six_section_cards_content.map((item,index) => <SixSectionCard index={index} title={item.title} description={item.description} image={item.image}/>)}
              </div>
              <div className={styles.six_section_details}>
                <Typography variant='titleSmall' textTransform='uppercase'>
                  <span style={{color: AppColor.orange}}>Unveiling</span> More Features
                </Typography>
                <span className={styles.six_section_details_span}>
                <Typography variant='body4' color={AppColor.transparentBlack}>
                Unlock your projects' complete potential. Explore the extra benefits we offer
                </Typography>
                </span>
                <MyButton
                color={AppColor.orange}
                textColor='white'
                hoverColor='transparent'
                hoverTextColor={AppColor.orange}
                onClick={() => {}} textTransform='uppercase'>
                  join us now
                </MyButton>
              </div>
            </section>
        </div>
        <Footer />
      </>
    );
};


const AdvantangesSectionCard = ({img,title,description}:AdvantagesSectionCardProps) => {
  return (
    <div className={styles.advantanges_section_card_item}>
      <div style={{height: '160px'}}><img src={img} style={{maxWidth: '224px',width:'fit-content'}}  alt="image" /></div>
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

const PopularCategorysServiceCard = ({img,title,svg}:PopularCategorysServiceCardProps) => {
  return (
    <div style={{}} className={styles.popular_categorys_services_card}>
      <img width={260} height={240} src={img} alt=""  className={styles.popular_categorys_card_image}/>
     <div className={styles.popular_categorys_services_card_shell}>
      
      <img src={svg} alt="svg" />
        <Typography variant='body2' color='white'>
          {title}
        </Typography>
     </div>
    </div>
  );
};


const SixSectionCard = ({title,description,image,index}: sixSectionCardProps) => {
  return (
   <div className={styles.six_section_card_wrapper}>
    {index % 2 != 0 && <div className='desktop'><SizeBox height='50px'/></div>}
      <div className={styles.six_section_card}>
        <div className={styles.six_section_card_image}>
          <img src={image} width={30} height={30} alt="icon" />
        </div>
        <Typography variant='body3'>
          {title}
        </Typography>
        <span className={styles.orange_line}></span>
        <Typography variant='body1' fontWeight='400' textAlign='center'>
          {description}
        </Typography>
      </div>
   </div>
  );
};
export default HomeNotAuth;