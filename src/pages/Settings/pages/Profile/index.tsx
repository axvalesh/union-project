
import Header from '@common/components/Header/Header/index';
import styles from './style.module.scss';
import NavigationBar from '@common/components/NavigationBar/index';
import PageDetails from '@common/components/ui/PageDetails/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import AppColor from '@common/styles/variables-static';
import { fakeUserConstant, userModel } from '@common/models/user';
import Typography from '@common/components/ui/Typography/Typography';
import MyButtonBlack from '@common/components/ui/MyButton/variants/MyButtonBlack';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import DisplayTopInfo from './components/DisplayTopInfo';
import InputBorderText from '@common/components/ui/inputs/InputBorderText/index';
import InputBorderTextDropdown from '@common/components/ui/inputs/InputBorderTextDropdown/index';
import AskedQuestion from '@common/components/AskedQuestions/index';
import Footer from '@common/components/Footer/Footer';
import { useState } from 'react';
import BackgroundItem from './components/BackgroundItem';
import MyButtonRed from '@common/components/ui/MyButton/variants/MyButtonRed';

const SettingsProfile = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        country: '', // You can set a default value
        stateProvince: '', // You can set a default value
        addressLine1: '',
        addressLine2: '',
        city: '',
        postCode: '',
    });

    const updateField = (field, value) => {
        setFormData({ ...formData, [field]: value });
      };
    
    const handleCallback = (field,item) => {
        updateField(field, item);
    };
      
    return (
      <div>
           <Header />
           <NavigationBar
                activePageIndex={0}
                currentCategoryTitle="Settings"
            />
            <div className={styles.wrapper}>
                 <PageDetails
                    historyNode=
                    {
                        <NavigationItem
                            image={<AppColor.home />}
                            textList={['Settings']} 
                        />
                    } 
                    pageTitle='Profile'
                />
            
                <DynamicPadding />

                <div className={styles.main}>
                    <div className={styles.main_left}>
                        <DisplayTopInfo user={fakeUserConstant} />

                        <DynamicPadding />

                        <div className={styles.inputs_wrapper}>
                            <InputBorderText
                                borderText='First Name'
                                labelIcon={<AppColor.passportSvg fill={formData.firstName != '' ? AppColor.text : AppColor.grey}
                                stroke={formData.firstName != '' ? AppColor.text : AppColor.grey} />}
                                placeholderText=''
                                callback={(item) => {handleCallback('firstName',item)}}
                            />  
                            <InputBorderText
                                borderText='Last Name'
                                labelIcon={<AppColor.passportSvg fill={formData.lastName != '' ? AppColor.text : AppColor.grey}
                                stroke={formData.lastName != '' ? AppColor.text : AppColor.grey} />}
                                placeholderText=''
                                callback={(item) => {handleCallback('lastName',item)}}
                            />  
                            <InputBorderTextDropdown
                                initText='Select country'
                                labelIcon={<AppColor.earth fill={formData.country != '' ? AppColor.text : AppColor.grey}
                                />}
                                borderText='Country'
                                dropdownVariants={['Ukraine','England','Turkey','Poland']}
                                callback={(item) => {handleCallback('country',item)}}
                                
                            />  
                            <InputBorderTextDropdown
                                initText='Select State/Province'
                                labelIcon={<AppColor.terrainMap fill={formData.stateProvince != '' ? AppColor.text : AppColor.grey} />}
                                borderText='State/Province'
                                dropdownVariants={['aaaa','bbbb','cccc','dddd']}
                                callback={(item) => {handleCallback('stateProvince',item)}}
                            />  
                            <InputBorderText
                                borderText='Address Line 1'
                                labelIcon={<AppColor.location fill={formData.addressLine1 != '' ? AppColor.text : AppColor.grey} />}
                                callback={(item) => {handleCallback('addressLine1',item)}}
                                placeholderText=''
                            />  
                            <InputBorderText
                                borderText='Address Line 2'
                                labelIcon={<AppColor.location fill={formData.addressLine2 != '' ? AppColor.text : AppColor.grey} />}
                                callback={(item) => {handleCallback('addressLine2',item)}}
                                placeholderText=''
                            />  
                            <InputBorderText
                                borderText='City'
                                labelIcon={<AppColor.buildings fill={formData.city != '' ? AppColor.text : AppColor.grey} />}
                                callback={(item) => {handleCallback('city',item)}}
                                placeholderText=''
                            />  
                            <InputBorderText
                                borderText='Post Code'
                                labelIcon={<AppColor.nameplate fill={formData.postCode != '' ? AppColor.text : AppColor.grey} />}
                                callback={(item) => {handleCallback('postCode',item)}}
                                placeholderText=''
                            />  
                        </div>


                    </div>
                    <div className={styles.main_right}>
                        <BackgroundItem
                            image=''    
                        />
                    </div>
                </div>

                <DynamicPadding />

                <div className={styles.delete_wrapper}>
                    <Typography variant='body3' fontWeight='500'>Delete Account</Typography>
                    
                    <DynamicPadding desktop='20px' mobile='13px'/>

                    <Typography variant='body4' fontWeight='400'>You can delete your account here. After 30 days your account cannot be recovered.</Typography>
                    
                    
                    <DynamicPadding desktop='20px' mobile='13px'/>

                    <MyButtonRed textTransform='uppercase' onClick={() => {}}>
                        Delete account
                    </MyButtonRed>
                </div>
                <AskedQuestion />
            </div>
            <Footer/>
      </div>
    );
};


export default SettingsProfile;