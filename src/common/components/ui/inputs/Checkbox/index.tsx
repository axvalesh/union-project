import { useEffect, useState } from 'react'
import styles from './style.module.scss'
import AppColor from '@common/styles/variables-static'

type MyCheckboxProps = {
    width: string
    height: string
    callback?: (isTrue: boolean) => void
    basicValue?: boolean
    checkWidth?: string;
    checkHeight?: string;
    borderRadius?: string;
}
const MyCheckbox = ({
    width,
    height,
    callback,
    checkHeight='12px',
    borderRadius='5px',
    checkWidth='12px',
    basicValue = false,
}: MyCheckboxProps) => {
    const [isTrue, setIsTrue] = useState(basicValue)

    useEffect(() => {
        setIsTrue(basicValue)
        if(callback != null) {
            callback(basicValue);
        }
    },[basicValue])
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
                              minWidth:width,minHeight:height,borderRadius: borderRadius
                      }
                    : {
                        minWidth:width,minHeight:height,borderRadius: borderRadius
                    }
            }
            onClick={() => {
                handleChange(!isTrue);
            }}>
            {isTrue && <AppColor.singTrue width={checkWidth} height={checkHeight} stroke="white" />}
        </div>
    )
}

export default MyCheckbox
