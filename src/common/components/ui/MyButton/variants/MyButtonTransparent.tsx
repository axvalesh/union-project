import React, { MouseEventHandler } from 'react'
import MyButton from '../MyButton'
import AppColor from '@common/styles/variables-static'

const MyButtonTransparent = (
    onClick: MouseEventHandler<HTMLButtonElement>,
    children: React.ReactNode,
    padding?: string
) => {
    return (
        <MyButton
            padding={padding}
            onClick={onClick}
            children={children}
            border="1px solid transparent"
            color="transparent"
            textColor={AppColor.text}
            hoverColor="transparent"
            hoverTextColor={AppColor.orange}
        />
    )
}

export default MyButtonTransparent
