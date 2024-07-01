import { useState,useEffect } from "react";

export default function ProgressBar({initialTimer} ){
    const [remainingTime, setRemainingTime] = useState(initialTimer );

    useEffect(() => {
      const interval = setInterval(() => {
        setRemainingTime((prev) => prev - 10);
      }, 10);
  
      return () => {
        clearInterval(interval);
      };
    }, []);

    return <progress value={remainingTime} max={initialTimer} />
}