import Header from '@common/components/Header/Header/index'
import styles from './style.module.scss'
import NavigationBarDropdowns from '@common/components/NavigationBarDropdowns/index'
import AppColor from '@common/styles/variables-static'
import { developmentDropdown } from '@common/models/constants'
import PageDetails from '@common/components/ui/PageDetails/index'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import SliderByRef from '@common/components/ui/SliderByRef/index'
import SliderItem from './components/SliderItem'
import Typography from '@common/components/ui/Typography/Typography'
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index'
import {
    ClipboardEventHandler,
    useEffect,
    useRef,
    useState,
} from 'react'
import SideBarCategory from './components/SideBarCategory'
import AskedQuestion from '@common/components/AskedQuestions/index'
import Footer from '@common/components/Footer/Footer'
import DoubleRangeSlider from '@common/components/ui/DoubleRangeSlider/index'
import MyButtonBlack from '@common/components/ui/MyButton/variants/MyButtonBlack'
import CardStatisticTest from '@common/components/cards/CardStatistics/variants/CardStatisticTest'
import CardStatisticsParthnershipConstant from '@common/components/cards/CardStatiscticsPartnership/variants/CardStatisticsParthnershipConstant/CardStatisticTest'
import { useScreenSize } from '@common/helpers/useScreenSize'
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent'
import NavBarLineBlack from '@common/components/ui/NavBarLineBlack/index'
import MyButtonTransparentBlack from '@common/components/ui/MyButton/variants/MyButtonTransparentBlack'
import minimalist from '@assets/images/minimalist.png';
import mascot from '@assets/images/mascot.png';
import freestyle from '@assets/images/freestyle.png';
import threeD from '@assets/images/threeD.png';
import CardsSliderRelated from '@common/components/CardsSliderRelated/index'
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import { FilterBlock } from '@pages/Crowdfreelance/CrowdfreelanceAll/index'

const PartnershipManager = () => {
    const { width, height } = useScreenSize()
    const [tags, setTags] = useState<string[]>([])
    const [priceValue, setPriceValue] = useState<{
        min: number
        max: number
    }>({ min: 0, max: 100 })
    const [itemsToshow, setItemsToShow] = useState([])
    const [showModalSideBar,setShowModalSideBar] = useState(false);
    const [skills, setSkills] = useState([
        'Logos',
        'Logo Design',
        'Logo',
        'Logo Maker',
        'Modern Logo ',
    ])
    const minValueRef = useRef(null)
    const maxValueRef = useRef(null)
    const [removedTagFromSideBar,setRemovedTagFromSideBar] = useState('');

    useEffect(() => {
        const arrayLengthStart = width <= 768 ? 4 : 9

        setItemsToShow(
            Array.from(
                { length: arrayLengthStart },
                (a, index) => index
            )
        )
    }, [width])

    const handleAddTag = (item: string) => {
        if (!tags.includes(item)) {
            setTags((prev) => [...prev, item])
        } else {
            setTags(tags.filter((tag) => tag != item))
        }
    }

    const handleAddTagFromSideBar = (passedText?:string) => {
   
        setTags(tags.filter((tag) => tag != passedText))
        setRemovedTagFromSideBar(passedText);
      
    }
    return (
        <div>
            <Header />

            <NavigationBarDropdowns
                title="partnership"
                navItems={developmentDropdown}
                titleIcon={<AppColor.partnership />}
            />

            <div className={styles.wrapper}>
                <PageDetails
                    historyNode={
                        <NavigationItem
                            image={<AppColor.home />}
                            textList={['Partnership']}
                        />
                    }
                    endNode={
                        <div className={styles.details_end_node}>
                            <MyButtonTransparentOrange
                                fontWeight="500"
                                textTransform="uppercase"
                                onClick={() => {}}>
                                All programs{' '}
                                <AppColor.chevronBottom
                                    fill={AppColor.orange}
                                />
                            </MyButtonTransparentOrange>
                        </div>
                    }
                    pageTitle="Brand Identity Design "
                />

                <DynamicPadding />
                <SliderByRef
                    endToFrontIndex={4}
                    nodes={[
                        <SliderItem
                            icon={<img src={minimalist}  height={'30px'}/>}
                            text="Minimalist"
                            onClick={handleAddTag}
                            removedTag={removedTagFromSideBar}
                            tags={tags}
                        />,
                        <SliderItem
                            icon={<img src={threeD}  height={'30px'}/>}
                            text="3D"
                            onClick={handleAddTag}
                            removedTag={removedTagFromSideBar}
                            tags={tags}
                        />,
                        <SliderItem
                            icon={<img src={freestyle}  height={'30px'}/>}
                            text="Freestyle"
                            onClick={handleAddTag}
                            removedTag={removedTagFromSideBar}
                            tags={tags}
                        />,
                        <SliderItem
                            icon={<img src={mascot}  height={'30px'}/>}
                            text="Mascot"
                            onClick={handleAddTag}
                            removedTag={removedTagFromSideBar}
                            tags={tags}
                        />,
                        
                    ]}
                />
                <DynamicPadding />
                <ResponsiveLayoutTwo
                    callbackModal={(item) => {setShowModalSideBar(item)}}
                    item1ToAModalLeftMobile={true}
                    showModal={showModalSideBar}
                    gap='80px'
                    item1MaxWidth='290px'
                    item2MaxWidth='830px'
                    item0MobileWhenModal={
                        <div style={{width: '100%'}}>
                           
                            <div className={styles.justify_flex}>
                                <Typography
                                    variant="body4"
                                    color={AppColor.transparentBlack}
                                    textTransform='uppercase'
                                    >
                                    My filter templates
                                </Typography>
                                <AppColor.template />
                            </div>

                            <DynamicPadding
                                desktop="30px"
                                mobile="15px"
                            />
                            <InputCommon 
                                placeholder='Search'
                                callback={() => {}}
                            />
                             <DynamicPadding
                                desktop="30px"
                                mobile="15px"
                            />
                        </div>
                    }
                    item1={
                        <FilterBlock />
                    }
                    item2={
                        <div style={{width: '100%'}}>
                             
                <div className={styles.justify_flex}>
                        <div className='desktop'>
                                <Typography variant="body4">
                                    11 841 programs
                                </Typography>
                            </div>
                            <div className={styles.flex_center}>
                            <div onClick={() => {setShowModalSideBar(true)}} className={'gap_5 mobile'}>
                                        <AppColor.filter />
                                        <Typography
                                            variant="body4"
                                            fontWeight="500"
                                            color={
                                                AppColor.transparentBlack
                                            }
                                            textTransform="uppercase">
                                            Filters
                                        </Typography>
                                </div>
                                    <div className={'gap_5'}>
                                        <AppColor.relevant />
                                        <Typography
                                            variant="body4"
                                            fontWeight="500"
                                            color={
                                                AppColor.transparentBlack
                                            }
                                            textTransform="uppercase">
                                            Relevant
                                        </Typography>
                                </div>
                                <div>
                                    <AppColor.chevronBottom
                                        fill={AppColor.text}
                                    />
                                </div>
                            </div>
                        </div>
                        <DynamicPadding />

                        <div className={styles.cards_wrapper}>
                            {itemsToshow.map((item) => (
                                <CardStatisticsParthnershipConstant />
                            ))}
                        </div>
                        <DynamicPadding
                            desktop="40px"
                            mobile="20px"
                        />
                        <div className={styles.justify_center}>
                            <MyButtonTransparentBlack
                                onClick={() => {
                                    setItemsToShow((prev) => [
                                        ...prev,
                                        1,
                                        2,
                                        3,
                                    ])
                                }}>
                                Show more +3
                            </MyButtonTransparentBlack>
                        </div>
                        <DynamicPadding
                            desktop="40px"
                            mobile="20px"
                        />
                        <div className={styles.justify_center}>
                            <NavBarLineBlack
                                callback={() => {}}
                                maxCountPage={100}
                            />
                        </div>
                        <DynamicPadding />
                        
                        <DynamicPadding />
                        </div>
                    }
                />
                
            </div>
            <CardsSliderRelated />
            <div className={styles.wrapper}>
                <AskedQuestion />
            </div>
            <Footer />
        </div>
    )
}


export default PartnershipManager
