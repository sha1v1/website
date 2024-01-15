import { useEffect, useState } from "react";

export default function BlinkingCursor(){
    const[isVisible, setIsVisible] = useState(false);
    useEffect(()=> {
        const intervalID = setInterval(()=>{
            setIsVisible(!isVisible);
        }, 900)
        return ()=> clearInterval(intervalID);
    }, [isVisible]);
    
    return(
        <span style={{fontSize: '4rem', opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s', fontWeight: 'bolder', color: "var(--medium-bright-pink)"}} 
        isVisible={false}    
        >
            {isVisible && "_"}
        </span>
    );
}