import { AdvantagesSectionCardProps, PopularCategorysCatalogCardProps } from './models';
import catalogServices from '@assets/svg/catalog-services.svg';
import catalogOrders from '@assets/svg/catalog-orders.svg';
import catalogSponsorship from '@assets/svg/catalog-sponsorship.svg';
import advantagesFirstImage from '@assets/images/home-not-auth_advantages_first.png';
import advantagesSecondImage from '@assets/images/home-not-auth_advantages_second.png';
import advantagesThirdtImage from '@assets/images/home-not-auth_advantages_third.png';
import advantagesFourthImage from '@assets/images/home-not-auth_advantages_forth.png';

export const advantanges_section_card_content:AdvantagesSectionCardProps[] = [
    {
      img: advantagesFirstImage,
      title: 'Customers',
      description: 'Enjoy Commission-Free Projects and Focus on Your Business Growth!'
    },
  
    {
      img: advantagesSecondImage,
      title: 'Freelancers',
      description: 'Keep All Your Earnings, Just 5% Commission!'
    },
    {
      img: advantagesThirdtImage  ,
      title: 'Managers',
      description: 'Streamline Your Project Management with Our Intuitive Tools and Features'
    },
    {
      img: advantagesFourthImage  ,
      title: 'Sponsors',
      description: 'Make a Difference by Sponsoring Innovative and Impactful Projects'
    },
  ];

export const popular_categorys_content:PopularCategorysCatalogCardProps[] = [
    {
      img: catalogServices,
      width: 36,
      height: 28,
      title: 'Catalog',
      subtitle: 'Services',
      activeIndex: 0,
      cardIndex: 0,
    },
    {
      img: catalogOrders,
      width: 27,
      height: 33,
      title: 'Catalog',
      subtitle: 'Orders',
      activeIndex: 0,
      cardIndex: 1,
    },
    {
      img: catalogSponsorship,
      width: 33,
      height: 21,
      title: 'Catalog',
      subtitle: 'Sponsorships',
      activeIndex: 0,
      cardIndex: 2,
    },
  ];