import { useState } from 'react'
import styles from './style.module.scss'
import AppColor from '@common/styles/variables-static'

type MyCheckboxProps = {
    width: string
    height: string
    callback?: (isTrue: boolean) => void
    basicValue?: boolean
}
const MyCheckbox = ({
    width,
    height,
    callback,
    basicValue = false,
}: MyCheckboxProps) => {
    const [isTrue, setIsTrue] = useState(basicValue)

    function handleChange(item:boolean) {
        if(callback != null) {
            callback(item)
        }
        setIsTrue(item)
    }
    return (
        <div
            className={styles.checkbox}
            style={
                !isTrue
                    ? {
                          backgroundColor: 'white',
                          boxShadow:
                              '-1px 1px 6px 2px rgba(0,0,0,0.11)',
                              width:width,height:height
                      }
                    : {
                        width:width,height:height
                    }
            }
            onClick={() => {
                handleChange(!isTrue);
            }}>
            {isTrue && <AppColor.singTrue stroke="white" />}
        </div>
    )
}

export default MyCheckbox
