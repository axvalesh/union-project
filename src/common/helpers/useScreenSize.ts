import {useState,useEffect} from 'react'

type useScreenSizeType = {
    width:number;
    height: number;
}
export const useScreenSize = ():useScreenSizeType => {
    const [width,setWidth] = useState(0);
    const [height,setHeight] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        console.log('use effect from screen size')
      
          window.addEventListener('resize', handleResize);
      
          return () => {
            window.removeEventListener('resize', handleResize);
          };
    },[])

    return {width:width,height:height}
}