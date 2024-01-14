import { useState, useEffect } from "react";

export default function Typer({ text }) {
  const characters = "ABCDEFGHIJKLMOPQRSTUVWXYZ";

  const [displaytext, setText] = useState(text);
  const [isHovering, setIsHover] = useState(false);

  useEffect(() => {
    
    if (isHovering) {

      let newText = "";
      let counter = 0;

      const intervalId = setInterval(() => {
        newText = text
          .split("")
          .map((l, i) => {
            
            if (i < counter) {
              return text[i];
            }
            return characters[Math.floor(Math.random() * 26)];
          })
          .join("");

        counter+= 1/2; 
        setText(newText);
      }, 30);

      return () => clearInterval(intervalId);
    }
  }, [isHovering]);

  return (
    
    <span style={{display: "inline-block"}}
      isHovering={false}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => {
        setText(text);
        setIsHover(false);
      }}
      
    >
      {displaytext}
    </span>
    
  );
}
