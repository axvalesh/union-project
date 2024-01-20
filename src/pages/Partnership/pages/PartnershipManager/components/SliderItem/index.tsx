
import Typography from '@common/components/ui/Typography/Typography';
import styles from './style.module.scss';
import SliderByRef from '@common/components/ui/SliderByRef/index';
import AppColor from '@common/styles/variables-static';

type SliderItemProps = {
    icon: any;
    text: string
}


const SliderItem = ({icon,text}:SliderItemProps) => {

    return (
      <div className={styles.slider_item}>
           {icon}
           <Typography variant='body4'>{text}</Typography>
      </div>
    );
};
export const sliderNodeList = <SliderByRef
endToFrontIndex={7}
nodes={[
  <SliderItem
    icon={<AppColor.freelancer />}
    text='Minimalist'
  />,
  <SliderItem
    icon={<AppColor.freelancer />}
    text='3D'
  />,
  <SliderItem
    icon={<AppColor.freelancer />}
    text='Minimalist'
  />,
  <SliderItem
    icon={<AppColor.freelancer />}
    text='3D'
  />,
  <SliderItem
    icon={<AppColor.freelancer />}
    text='Minimalist'
  />,
  <SliderItem
    icon={<AppColor.freelancer />}
    text='3D'
  />,
  <SliderItem
    icon={<AppColor.freelancer />}
    text='Minimalist'
  />,
  <SliderItem
    icon={<AppColor.freelancer />}
    text='3D'
  />,
  <SliderItem
    icon={<AppColor.freelancer />}
    text='Minimalist'
  />,
  <SliderItem
    icon={<AppColor.freelancer />}
    text='3D'
  />,
  <SliderItem
    icon={<AppColor.freelancer />}
    text='Minimalist'
  />,
  <SliderItem
    icon={<AppColor.freelancer />}
    text='3D'
  />,
  <SliderItem
    icon={<AppColor.freelancer />}
    text='Minimalist'
  />,
  <SliderItem
    icon={<AppColor.freelancer />}
    text='Minimalist'
  />,
  <SliderItem
    icon={<AppColor.freelancer />}
    text='3D'
  />,
]}
/>
export default SliderItem;