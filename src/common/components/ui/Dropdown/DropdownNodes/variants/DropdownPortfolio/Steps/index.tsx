
import { StepItemSolving, StepsOfPreparingEndSolving } from '@common/components/StepsOfPreparing/index';
import { BigInputOutside } from '@common/components/ui/BigInput/index';
import DatePicker from '@common/components/ui/DatePicker/index';
import InfoBox from '@common/components/ui/InfoBox/index';
import Typography from '@common/components/ui/Typography/Typography';
import MyCheckbox from '@common/components/ui/inputs/Checkbox/index';
import InputCommon from '@common/components/ui/inputs/InputCommon/index';
import AppColor from '@common/styles/variables-static';
import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { SkillCheckBox } from '@pages/Dashboard/pages/Account/index';
import ImageCardsPlaceholder from '@common/components/ImageCardsPlaceholder/index';
import SwitchButton from '@common/components/ui/SwitchButton/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';

export type StepProps = {
    callback: (item: any) => void;
    value: any;
    stepOneValue?: string;
    stepTwoValue?: string;
    stepThreeValue?: string[];
    stepFourValue?: string[];
    stepFiveValue?: any[];
    stepSixValue?: string;
    stepSevenValue?: string;
    stepEightValue?: string;
    callbackStep: (item:number) => void;
}

const skills = [
    "WordPress",
    "NFT Development",
    "Chatbots",
    "Website Builders & CMS",
    "Crypto Wallet Development",
    "Databases",
    "Crypto Coins & Tokens",
    "Trading Apps",
    "Blockchain Development",
    "Databases",
    "Windows",
    "Android",
    "E-Commerce Development",
    "Linux/Unix",
    "iOS",
    "Web Programming",
    "3D",
    "OSX",
    "Other",
    "Mobile Web",
    "2D",
    "Other"
  ]
  
export const StepOneButtonAddPortfolio = ({callback,value}:StepProps) => {

    return (
        <StepItemSolving solveNode={
            <InputCommon initText={value} padding='15px 30px' width='100%' callback={(item) => {callback(item)}} placeholder='Title' />
        } stepNumber='1' title={value} />
    );
};

export const StepTwoButtonAddPortfolio= ({callback,value,stepOneValue,callbackStep}:StepProps) => {
    return (
        <StepsOfPreparingEndSolving 
            elements={[
                {
                    solve: 'Change title',
                    text: stepOneValue,
                    onSolveClick: () => {callbackStep(1)}
                },
            ]}
            solvingNode={
                <StepItemSolving solveNode={
                    <BigInputOutside initValue={value} callback={(item) => {callback(item)}}  />
                } stepNumber='2' title='Description' />
            }
        />
    )
}

export const StepThreeButtonAddPortfolio = ({callback,value,stepOneValue,stepTwoValue,callbackStep}:StepProps) => {

    const [array,setArray] = useState(value);

    useEffect(() => {
        callback(array);
    },[array])
    
    return (
        <StepsOfPreparingEndSolving 
            elements={[
                {
                    solve: 'Change title',
                    text: stepOneValue,
                    onSolveClick: () => {callbackStep(1)}
                },
                {
                    solve: 'Change description',
                    text: stepTwoValue,
                    onSolveClick: () => {callbackStep(2)}
                },
            ]}
            solvingNode={
                <StepItemSolving solveNode={
                  <div className={styles.grid_3}>
                    {  skills.map(item => <SkillCheckBox initValue={array.includes(item)} text={item} removeDropdown={true} callback={(text,isTrue) => {
                        if(isTrue) {
                            setArray(prev => [...prev,item])
                        } else {
                            if(array.includes(item)) {
                                setArray(prev => prev.filter(tmp => tmp != item))
                            }
                        }
                    }} />)}
                  </div>
                } stepNumber='3' title='Skills' />
            }
        />
    )
}

export const StepFourButtonAddPortfolio = ({callback,value,stepOneValue,stepTwoValue,stepThreeValue,callbackStep}:StepProps) => {

    return (
        <StepsOfPreparingEndSolving 
            elements={[
                {
                    solve: 'Change title',
                    text: stepOneValue,
                    onSolveClick: () => {callbackStep(1)}
                },
                {
                    solve: 'Change description',
                    text: stepTwoValue,
                    onSolveClick: () => {callbackStep(2)}
                },
                {
                    solve: 'Change repeatability',//array to string look like: item1, item2, item3
                    text: stepThreeValue.join(', '),
                    onSolveClick: () => {callbackStep(3)}
                },
            ]}
            solvingNode={
                <StepItemSolving solveNode={
                    <ImageCardsPlaceholder
                        callback={(item) => {
                            let newArray = [...item];
                            for (let i = newArray.length - 1; i >= 0; i--) {
                                if (newArray[i] === '') {
                                    newArray.splice(i, 1);
                                }
                            }
                            callback(newArray)
                        }}
                        height='350px'
                        widthTotalDesktop='730px'
                        images={['','','','']}
                    />
                } stepNumber='4' title='Images' />
            }
        />
    )
}

export const StepFiveButtonAddPortfolio = ({callback,value,stepOneValue,stepTwoValue,stepThreeValue,stepFourValue,callbackStep}:StepProps) => {
    const [tmpArray,setTmpArray] = useState(value);

    useEffect(() => {
        callback(tmpArray);
    },[tmpArray])

    console.log(tmpArray,'tmpArray');
    

    const [showAskedQuestions,setShowAskedQuestions] = useState(false);
    

    return (
        <StepsOfPreparingEndSolving 
            elements={[
                {
                    solve: 'Change title',
                    text: stepOneValue,
                    onSolveClick: () => {callbackStep(1)}
                },
                {
                    solve: 'Change description',
                    text: stepTwoValue,
                    onSolveClick: () => {callbackStep(2)}
                },
                {
                    solve: 'Change repeatability',
                    text: stepThreeValue.join(', '),
                    onSolveClick: () => {callbackStep(3)}
                },
                {
                    solve: 'Change time period',
                    text: `${stepFourValue.length} images`,
                    onSolveClick: () => {callbackStep(4)}
                },
            ]}
            solvingNode={
                <StepItemSolving solveNode={
                   <div>
                        <div className={styles.border_item}>
                            <Typography variant='body4'>Frequently Asked Questions</Typography>
                            <SwitchButton callback={(item) => {setShowAskedQuestions(item)}} width='44px' height='24px' />
                        </div>
                        <DynamicPadding desktop='20px' mobile='10px'/>
                        {showAskedQuestions && tmpArray.map((item,index) => <FaqItem title={item.question} text={item.answer} />)}

                   </div>
                } stepNumber='5' title='FAQ' />
            }
        />
    )
}

export const StepSixButtonAddPortfolio = ({callback,value,stepOneValue,stepTwoValue,stepThreeValue,stepFiveValue,stepFourValue,callbackStep}:StepProps) => {

    const [activeSelection,setActiveSelection] = useState(value);
    return (
        <StepsOfPreparingEndSolving 
            elements={[
                {
                    solve: 'Change title',
                    text: stepOneValue,
                    onSolveClick: () => {callbackStep(1)}
                },
                {
                    solve: 'Change description',
                    text: stepTwoValue,
                    onSolveClick: () => {callbackStep(2)}
                },
                {
                    solve: 'Change repeatability',
                    text: stepThreeValue.join(', '),
                    onSolveClick: () => {callbackStep(3)}
                },
                {
                    solve: 'Change time period',
                    text: `${stepFourValue.length} images`,
                    onSolveClick: () => {callbackStep(4)}
                },
                {
                    solve: 'Change subscriptions',
                    text: `${stepFiveValue.length} questions`,
                    onSolveClick: () => {callbackStep(5)}
                },
            ]}
            solvingNode={
                <StepItemSolving solveNode={
                    <div className='gap_20'>
                        <InputCommon padding='15px 30px' textAlingCenter={true} callback={(item) => {setActiveSelection(item);callback(item)}}
                            placeholder='Enter Manually' type='number' width='100%'
                        />
                        <SelectItemSix activeText={activeSelection} callback={(item) => {setActiveSelection(item);callback(item)}} 
                            text='5'
                        />
                        <SelectItemSix activeText={activeSelection} callback={(item) => {setActiveSelection(item);callback(item)}} 
                            text='10'
                        />
                        <SelectItemSix activeText={activeSelection} callback={(item) => {setActiveSelection(item);callback(item)}} 
                            text='20'
                        />
                    </div>
                } stepNumber='6' title='Limits' />
                } 
            />
    )
}


export const StepSevenButtonAddPortfolio = ({callback,value,stepOneValue,stepTwoValue,stepSixValue,stepThreeValue,stepFiveValue,stepFourValue,callbackStep}:StepProps) => {

    const [activeSelection,setActiveSelection] = useState(value);
    return (
        <StepsOfPreparingEndSolving 
            elements={[
                {
                    solve: 'Change title',
                    text: stepOneValue,
                    onSolveClick: () => {callbackStep(1)}
                },
                {
                    solve: 'Change description',
                    text: stepTwoValue,
                    onSolveClick: () => {callbackStep(2)}
                },
                {
                    solve: 'Change repeatability',
                    text: stepThreeValue.join(', '),
                    onSolveClick: () => {callbackStep(3)}
                },
                {
                    solve: 'Change time period',
                    text: `${stepFourValue.length} images`,
                    onSolveClick: () => {callbackStep(4)}
                },
                {
                    solve: 'Change subscriptions',
                    text: `${stepFiveValue.length} questions`,
                    onSolveClick: () => {callbackStep(5)}
                },
                {
                    solve: 'Change limit',
                    text: `${stepSixValue} - ${stepSixValue} limit`,
                    onSolveClick: () => {callbackStep(6)}
                },
            ]}
            solvingNode={
                <StepItemSolving solveNode={
                    <div className='gap_20'>
                      
                    </div>
                } stepNumber='7' title='Purpose' />
                } 
            />
    )
}


type FagItemProps = {
    title: string;
    text: string;
}
const FaqItem = ({text,title}:FagItemProps) => {
    return (
        <div>
            <div className={styles.faq_item}>
                <AppColor.arrowFour />
    
                <div>
                    <Typography variant='body4' fontWeight='500'>{title}</Typography>
                    <DynamicPadding desktop='15px' mobile='10px'/>
                    <Typography variant='body4'>{text}</Typography>
                </div>
    
                <div className='gap_10'>
                    <AppColor.close width={'16px'} height={'16px'} fill={AppColor.red} />
                    <AppColor.edit fill={AppColor.text}/>
                </div>
            </div>
            <DynamicPadding desktop='20px' mobile='10px'/>
            <HorizontalLine />
        </div>
    )
}
type SelectItemSixProps = {
    text: string;
    activeText: string;
    callback: (item:string) => void;
}
export const SelectItemSix = ({activeText,callback,text}:SelectItemSixProps) => {
    return (
        <div style={{border: activeText == text ? `1px solid ${AppColor.orange}` : '1px solid transparent'}} onClick={() => {callback(text)}} className={`${styles.select_six} cursor`}>
            <Typography variant='body4' fontWeight='500' color={activeText == text ? AppColor.orange : AppColor.text}>
                {text}
            </Typography>
        </div>
    )
}

type SelectItemFiveProps = {
    text: string;
    callback: (item:boolean) => void;
    initValue: boolean;
}
const SelectItemFive = ({callback,initValue,text}:SelectItemFiveProps) => {
    const [isSelected,setIsSelected] = useState(initValue);
    return (
        <div className='gap_10'>
            <MyCheckbox width='20px' height='20px' basicValue={initValue} callback={(item) => {
                callback(item);
                }} />
            <Typography variant='body4' fontWeight={initValue ? '500' : '400'}>
                {text}
            </Typography>
        </div>
    )
}

type StepThreeItemProps = {
    icon: React.ReactNode;
    text: string;
    activeItem: string;
    callback: (item:string) => void;
}
const StepThreeItem = ({activeItem,callback,icon,text}:StepThreeItemProps) => {
    return (
        <div style={activeItem == text ? {backgroundColor: AppColor.white} : {}} onClick={() => {callback(text)}} 
        className={`${styles.step_three} cursor`}> 
            <div className={styles.info_absolute}>
                <InfoBox />
            </div>
            {icon}
            <Typography variant='body5'>{text}</Typography>
        </div>
    )
}