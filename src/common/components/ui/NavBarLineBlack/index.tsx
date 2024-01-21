import { useEffect, useState } from "react";
import styles from './style.module.scss'
import Typography from "../Typography/Typography";
import AppColor from "@common/styles/variables-static";
const NavBarLineBlack = ({callback,maxCountPage}: {callback: (item:number) => void,maxCountPage:number}) => {
    const [currentPage, setCurrentPage] = useState(1);
  
    const startIdx = Math.max(1, currentPage - 3);
  
    const endIdx = startIdx + 6;
  
    const numberBoxes = [];
  
    useEffect(() => {
      callback(currentPage)
    }, [currentPage])
  
    for (let i = startIdx; i <= endIdx; i++) {
      numberBoxes.push(
          <div
              onClick={() => {
                  if(i <= maxCountPage) {
                    setCurrentPage(i)
                  }
              }}
              key={i}
              className={styles.box}
              style={i == startIdx ? {opacity: 1} : {}}>
              <Typography
                  variant="body4"
                  >
                  {i}
              </Typography>
          </div>
      )
    }
    numberBoxes.push(
        <div className={styles.box}>...</div>,
        <div onClick={() => {
            if(currentPage+30 < maxCountPage) {
                setCurrentPage(currentPage+30)
              }
        }} className={styles.box}>
            <Typography variant="body4">{currentPage+30}</Typography>
        </div>
    )
  
    function prevFunction() {
      if(currentPage - 7 > 0) {
        setCurrentPage(prev => prev - 7)
      }
    }
  
    function nextFunction() {
      if(currentPage + 7 <= maxCountPage) {
        setCurrentPage(prev => prev + 7)
      }
    }
  
  
    return (
      <div className={styles.navbar_wrapper}>
        
        {numberBoxes}
      </div>
    )
  }
  
  export default NavBarLineBlack;