import '../styles/Home.css';
import { useEffect, useState } from 'react';

function Home(){
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const[myName, setMyName] = useState("SHAIVI GANDHI");  
    const[numRenders, setNumRenders] = useState(0);

    useEffect(() => {
      const name = "SHAIVI GANDHI";
      const interval1 = setInterval(() => {
        if (numRenders <= 13) {

            const newF = myName.split("").map((l,i) => {
                if(i < numRenders){
                    return name[i];
                }
                return letters[Math.floor(Math.random() * 26)];

            }).join("");

            setMyName(newF);
      
            setNumRenders(prevFRenders => prevFRenders + 1);
          }
      }, 70)
      return  () => clearInterval(interval1);
    }, [numRenders]);
    
    return(
        <div className='home-container'>              
            <h1 renders = {numRenders} className='name'>{myName}</h1>         
       </div>
    );
}

export default Home;