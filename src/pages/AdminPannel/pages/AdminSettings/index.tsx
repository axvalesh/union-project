
import ButtonChooseList from '@common/components/ButtonChooseList/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import SizeBox from '@common/components/ui/SizeBox/index';
import Typography from '@common/components/ui/Typography/Typography';
import AppColor from '@common/styles/variables-static';
import React, { useState } from 'react';
import DateFilter from '../../components/DateFilter';
import styles from './style.module.scss';
import MyButtonBlack from '@common/components/ui/MyButton/variants/MyButtonBlack';
import { fakeUserConstant } from '@common/models/user';
import InputCommon from '@common/components/ui/inputs/InputCommon/index';
import InputDropdown from '@common/components/ui/inputs/InputDropdown/index';

const AdminSettings = () => {

    return (
        <div className='admin_wrapper'>
             <DynamicPadding />
             <div className='center_mobile_text'>
             <Typography textTransform='uppercase' variant='titleBig' fontWeight='600'>settings</Typography>
             </div>
             <DynamicPadding />
  
             <DateFilter />
  
             <DynamicPadding />
  
             <DetailsTable 
                  title='Logo & favicon'
                 node={
                    <div className={styles.logo_grid}>
                        <div className={styles.flex_column}>
                                <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>
                                White background
                                </Typography>
                                <SizeBox height='20px'/>
                                <div className='box_shadow' style={{width: '200px',height: '100px'}}>

                                </div>
                                <SizeBox height='20px'/>
                                <div className={styles.logo_bottom_item}>
                                    <MyButtonBlack textTransform='uppercase' onClick={() => {}}>
                                    Update logo
                                    </MyButtonBlack>
                                    <AppColor.close fill={AppColor.red} width={'15px'} height={'15px'} />
                                </div>
                        </div>
                        <div className={styles.flex_column}>
                                <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>
                                Dark background
                                </Typography>
                                <SizeBox height='20px'/>
                                <div className='box_shadow' style={{width: '200px',height: '100px'}}>

                                </div>
                                <SizeBox height='20px'/>
                                <div className={styles.logo_bottom_item}>
                                    <MyButtonBlack textTransform='uppercase' onClick={() => {}}>
                                    Update logo
                                    </MyButtonBlack>
                                    <AppColor.close fill={AppColor.red} width={'15px'} height={'15px'} />
                                </div>
                        </div>
                        <div className={styles.flex_column}>
                                <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>
                                Favicon
                                </Typography>
                                <SizeBox height='20px'/>
                                <img src={fakeUserConstant.image} width={'100px'} height={'100px'} alt="" />
                                <SizeBox height='20px'/>
                                <div className={styles.logo_bottom_item}>
                                    <MyButtonBlack textTransform='uppercase' onClick={() => {}}>
                                    Update logo
                                    </MyButtonBlack>
                                    <AppColor.close fill={AppColor.red} width={'15px'} height={'15px'} />
                                </div>
                        </div>
                    </div>
                 }
             />
  
             <DynamicPadding />
  
             <DetailsTable 
                  title='Site name'
                 node={
                    <div className={styles.site_grid}>
                        <div style={{width: '100%'}}>
                            <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>
                            Title
                            </Typography>
                            <SizeBox height='20px'/>
                            <InputCommon
                            padding='10px 15px'
                            width='100%'
                                callback={() => {}}
                                placeholder='title site'
                            />
                        </div>
                        <div style={{width: '100%'}}>
                            <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>
                            Title Position
                            </Typography>
                            <SizeBox height='20px'/>
                            <InputDropdown
                            padding='10px 15px'
                                dropdownVariants={['At the end']}
                                initText='At the end'
                                labelIcon={<></>}
                                marginLeft={true}
                            />
                        </div>
                    </div>
                 }
             />
  
       <DynamicPadding />
             
        </div>
      );
  };
  
  type DetailsTableProps = {
      title: string;
      node: React.ReactNode
  }
  export const DetailsTable = ({node,title}:DetailsTableProps) => {
      return (
          <div className={styles.details_wrapper}>
              <div>
                  <div className={styles.top_part_dropdown}>
                      <Typography variant='body3' fontWeight='500'>{title}</Typography>
                      
                  </div>
                  <div>
              </div>
              </div>
              <HorizontalLine />
  
              <div style={{padding: '15px 15px'}}>
                  {node}
              </div>
          </div>
      )
  }
  type DropdownButtonProps = {
      filters: string[];
  }
  const DropdownButton = ({filters}:DropdownButtonProps) => {
      const [activeItem,setActiveItem] = useState(filters[0]);
      const [showDropdown,setShowDropdown] = useState(false);
      return (
          filters.length > 0 ?
          <div className={styles.dropdown_relative}>
              <MyButtonTransparentOrange onClick={() => {setShowDropdown(prev => !prev)}}>
                  {activeItem}
                  <AppColor.chevronBottom />
              </MyButtonTransparentOrange>
              <div className={styles.dropdown_absolute} style={{display: showDropdown ? 'block' : 'none'}}>
                  <div className={styles.dropdown_grid}>
                      {filters.map(item => <div onClick={() => {setActiveItem(item)}}><Typography variant='body4'>{item}</Typography></div>)}
                  </div>
              </div>
          </div>
          : <></>
      )
  }
export default AdminSettings;