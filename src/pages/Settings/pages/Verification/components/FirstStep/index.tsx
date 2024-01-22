
import Typography from '@common/components/ui/Typography/Typography';
import styles from './style.module.scss';
import PercentBar from '@common/components/ui/PercentBar/PercentBar';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import InputBorderText from '@common/components/ui/inputs/InputBorderText/index';
import AppColor from '@common/styles/variables-static';
import InputBorderTextDropdown from '@common/components/ui/inputs/InputBorderTextDropdown/index';
import { useEffect, useState } from 'react';

type dataType = {
    firstName: string;
    lastName: string;
    country: string;
    stateProvince: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    postCode: string;
}
const FirstStep = ({callback,formData1,updateFormData1}: {callback:() => void,formData1: dataType,updateFormData1:any}) => {
    const [formData, setFormData] = useState<dataType>(structuredClone(formData1));

    console.log(formData1);
    const isCanMoveOn = () => {
        return Object.values(formData).every(value => value.trim() !== '');
    }; 
    const updateField = (field, value) => {
        setFormData({ ...formData, [field]: value });
      };
    
    const handleCallback = (field,item) => {
        updateField(field, item);
    };

    function handleMove() {
        updateFormData1(formData)
        callback() 
    }
    return (
     <div>
          <div className={styles.wrapper}>
               <div className={styles.left}>
                    <div>
                        <Typography variant='body4'>Step 1/3 - User personal information</Typography>
                        <PercentBar
                            currentPercent={33.3}
                            height='13px'
                        />
                    </div>
                    <DynamicPadding desktop='25px' mobile='30px'/>
                    <Typography variant='body4'>KYC is a one-time process required by international regulators and is implemented for the safety of your assets. </Typography>
                    <DynamicPadding desktop='30px' mobile='20px'/>
                    <div className={styles.inputs_wrapper}>
                                <InputBorderText
                                    borderText='First Name'
                                    labelIcon={<AppColor.passportSvg fill={formData.firstName != '' ? AppColor.text : AppColor.grey}
                                    stroke={formData.firstName != '' ? AppColor.text : AppColor.grey} />}
                                    placeholderText=''
                                    callback={(item) => {handleCallback('firstName',item)}}
                                    inputText={formData.firstName}
                                />  
                                <InputBorderText
                                    borderText='Last Name'
                                    labelIcon={<AppColor.passportSvg fill={formData.lastName != '' ? AppColor.text : AppColor.grey}
                                    stroke={formData.lastName != '' ? AppColor.text : AppColor.grey} />}
                                    placeholderText=''
                                    callback={(item) => {handleCallback('lastName',item)}}
                                    inputText={formData.lastName}
                                />  
                                <InputBorderTextDropdown
                                    initText={formData.country != '' ? formData.country : 'Select country'}
                                    labelIcon={<AppColor.earth fill={formData.country != '' ? AppColor.text : AppColor.grey}
                                    />}
                                    borderText='Country'
                                    dropdownVariants={['Ukraine','England','Turkey','Poland']}
                                    callback={(item) => {handleCallback('country',item)}}
                                    
                                />  
                                <InputBorderTextDropdown
                                    initText={formData.stateProvince != '' ? formData.stateProvince : 'Select State/Province'}
                                    labelIcon={<AppColor.terrainMap fill={formData.stateProvince != '' ? AppColor.text : AppColor.grey} />}
                                    borderText='State/Province'
                                    dropdownVariants={['aaaa','bbbb','cccc','dddd']}
                                    callback={(item) => {handleCallback('stateProvince',item)}}
                                />  
                                <InputBorderText
                                    borderText='Address Line 1'
                                    labelIcon={<AppColor.location fill={formData.addressLine1 != '' ? AppColor.text : AppColor.grey} />}
                                    callback={(item) => {handleCallback('addressLine1',item)}}
                                    inputText={formData.addressLine1}
                                    placeholderText=''
                                />  
                                <InputBorderText
                                    borderText='Address Line 2'
                                    labelIcon={<AppColor.location fill={formData.addressLine2 != '' ? AppColor.text : AppColor.grey} />}
                                    callback={(item) => {handleCallback('addressLine2',item)}}
                                    inputText={formData.addressLine2}
                                    placeholderText=''
                                />  
                                <InputBorderText
                                    borderText='City'
                                    labelIcon={<AppColor.buildings fill={formData.city != '' ? AppColor.text : AppColor.grey} />}
                                    callback={(item) => {handleCallback('city',item)}}
                                    inputText={formData.city}
                                    placeholderText=''
                                />  
                                <InputBorderText
                                    borderText='Post Code'
                                    labelIcon={<AppColor.nameplate fill={formData.postCode != '' ? AppColor.text : AppColor.grey} />}
                                    callback={(item) => {handleCallback('postCode',item)}}
                                    inputText={formData.postCode}
                                    placeholderText=''
                                />  
                            </div>
               </div>
               <div className={styles.right}>
                    <div className={styles.right_wrapper}>
                        <Typography variant='body4' fontWeight='500'>Requirements:</Typography>
                        <DynamicPadding desktop='15px' mobile='15px'/>
                        <div style={{marginLeft: '15px'}}>
                            <Typography variant='body4' fontWeight='400'>• You must be at least 18 y.o. to complete the KYC process.</Typography>
                            <Typography variant='body4' fontWeight='400'>• Proof of identity cannot be used as a proof of address.</Typography>
                            <Typography variant='body4' fontWeight='400'>• All information must match your proof of identity document and proof of address document.</Typography>
                        </div>
                    </div>
               </div>
          </div>
          <DynamicPadding/>
          <div onClick={() => { isCanMoveOn() ? handleMove() : () => { } }} className={styles.justify}>
                <div className={styles.column}>
                    <Typography textTransform='uppercase' variant='body4' fontWeight='500'>User ID</Typography>
                    <Typography variant='body5' fontWeight='400'>Next step</Typography>
                </div>
                <div className={styles.box}><AppColor.longChevronRight/></div>
          </div>
     </div>
    );
};

export default FirstStep;