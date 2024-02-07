
import Typography from '@common/components/ui/Typography/Typography';
import { userModel, fakeUserConstant } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import { useState } from 'react';
import DetailsTable from '../..';
import DynamicPadding from '../../../DynamicPadding';
import HorizontalLine from '../../../Lines/HorizontalLine';
import SizeBox from '../../../SizeBox';
import UserAvatar from '../../../UserAvatar';
import styles from './style.module.scss';
import SwitchButton from '../../../SwitchButton';
import InputCommon from '../../../inputs/InputCommon';

type DetailsTablePagesListProps = {
    information: DetailsTablePagesListItem[];
}

export type DetailsTablePagesListItem = {
   user: userModel;
   page: string;
   group: string;
   link: string;
  
}

const DetailsTablePagesList = ({information}:DetailsTablePagesListProps) => {

    const [currentPage,setCurrentPage] = useState(1);
    const currentItem = information[currentPage-1];
    
    return (
      <DetailsTable
        removeNavBar={true}
        titleEnd='pages'
        projectsCount='3'
        callbackNav={(item) => { setCurrentPage(item)}}
        filters={[]}
        page={currentPage}

        dropdownNode={
            <div>
                <DynamicPadding desktop='30px' mobile='20px' />

                <div className={styles.fields_grid}>
                    <InputField
                        initText={currentItem.page}
                        title='Title'
                    />
                    <InputField
                        initText={'/'}
                        title='Link'
                    />
                    <InputField
                        initText={currentItem.page}
                        title='Group'
                    />
                    <InputField
                        initText={'/'}
                        title='Redirect'
                    />
                    <InputField
                        initText={'Freelance Services'}
                        title='Meta-title'
                    />
                    <InputField
                    multiLine={true}
                        initText={`Uniano's mission is to change how the world works together. Uniano connects businesses with freelancers offering digital services in 500+ categories.`}
                        title='Meta-description'

                    />
                    <InputField
                        initText={'freelance, freelance service, freelance marketplace'}
                        title='Meta-keywords'
                    />

                </div>
                <DynamicPadding desktop='30px' mobile='20px' />

                <HorizontalLine />
            </div>
        }
        details={
            currentItem != null ? [
                {
                    title: 'Page',
                    selecrable: true,   
                    maxWidth: '250px',
                    child: <div className='gap_5'>
                        <Typography variant='body4'>{currentItem.page}</Typography>
                        <AppColor.openInBrowser />
                    </div>
                },
                {
                    title: 'Group',
                    maxWidth: '110px',
                    child: <div style={{opacity: currentItem.group.toLowerCase() == 'no group' ? '0.3' : '1'}} className={styles.category_wrapper}>
                    <Typography textLineHeight='1' textTransform='uppercase' fontSizeStatic='13px' color='white'>{currentItem.group}</Typography>
                </div>
                },
                {
                    title: 'Link',
                    maxWidth: '130px',
                    child:  <Typography variant='body4'>{currentItem.link}</Typography>
                },
                {
                    title: 'New Tab',
                    child:  <SwitchButton width='44px' height='24px' />
                },
                {
                    title: 'Indexing',
                    child: <SwitchButton width='44px' height='24px' />
                },
                {
                    title: 'Active',
                    child: <SwitchButton width='44px' height='24px' />
                },
            
            ] : [
                {
                    title: 'Page',
                    child: <>
                    <DynamicPadding desktop='30px' mobile='10px' /></>
                },
                {
                    title: 'Group',
                    child: <></>
                },
                {
                    title: 'Link',
                    child: <></>
                },
                {
                    title: 'New Tab',
                    child: <></>
                },
                {
                    title: 'Indexing',
                    child: <></>
                },
                {
                    title: 'Active',
                    child: <></>
                },
              
               
            ]
        }
      />
    );
};

type InputFieldProps = {
    title: string;
    initText: string;
    multiLine?: boolean
}
const InputField = ({initText,title,multiLine}:InputFieldProps) => {
    return (
        <div>
            <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>{title}</Typography>
            <SizeBox height='8px'/>
            <InputCommon
                callback={() => {}}
                initText={initText}
                multiLine={multiLine}
                padding={multiLine ? '6px 14px 50px 14px' :'6px 14px'}
                rightPadding={14}
                placeholder=''
            />
        </div>
    )
}
export default DetailsTablePagesList;