import MyButton from '../MyButton'
import { MyButtonVariantProps } from '../models'

const MyButtonTransparentOrange = (props:MyButtonVariantProps) => {
    return (
        <MyButton
            padding={props.padding}
            onClick={props.onClick}
            children={props.children}
            fontWeight={props.fontWeight}
            width={props.width}
        />
    )
}

export default MyButtonTransparentOrange