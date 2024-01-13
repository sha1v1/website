import { useState, useEffect } from "react";

export default function Typer({ text }) {
  const characters = "A1B2C3D4E5F6G7H8I9J0K!L@M#N$O%P^Q&R*S<T?U>V/WXYZ";

  const [displaytext, setText] = useState(text);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    
    if (isHover) {

      let newText = "";
      let counter = 0;

      const intervalId = setInterval(() => {
        newText = text
          .split("")
          .map((l, i) => {
            
            if (i < counter) {
              return text[i];
            }
            return characters[Math.floor(Math.random() * 48)];
          })
          .join("");

        counter++; 
        setText(newText);
      }, 50);

      return () => clearInterval(intervalId);
    }
  }, [isHover]);

  return (
    <div
      isHover={false}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => {
        setText(text);
        setIsHover(false);
      }}
    >
      {displaytext}
    </div>
  );
}
