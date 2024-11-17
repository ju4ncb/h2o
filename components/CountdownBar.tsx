import { Timer } from "lucide-react";
import React, { useState, useEffect } from "react";

interface Props {
  tiempo: number;
  isPaused: boolean;
  timeOutFunction(): void;
}

const CountdownBar: React.FC<Props> = ({
  tiempo,
  isPaused,
  timeOutFunction,
}: Props) => {
  const [timeLeft, setTimeLeft] = useState(tiempo); // Time in seconds
  const [width, setWidth] = useState(100); // Progress bar width percentage
  const [backgroundColor, setBackgroundColor] = useState("#16ff3d");

  // Function to execute when time runs out
  const handleTimeOut = () => {
    timeOutFunction();
  };

  useEffect(() => {
    if (timeLeft <= tiempo / 2 && timeLeft > tiempo / 4) {
      setBackgroundColor("#fffb16");
    } else if (timeLeft <= tiempo / 4) {
      setBackgroundColor("#ff1616");
    }
    if (!isPaused && timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
        setWidth((prev) => (timeLeft - 2) * (100 / tiempo)); // Adjust bar width
      }, 1000);
      return () => clearInterval(interval);
    } else {
      handleTimeOut(); // Execute the function when time runs out
    }
  }, [isPaused, timeLeft]);

  return (
    <div
      style={{
        width: "100%",
        border: "1px solid #ccc",
        height: "30px",
        position: "relative",
        marginTop: 10,
      }}
    >
      <div
        style={{
          width: `${width}%`,
          backgroundColor: backgroundColor,
          height: "100%",
          transition: "width 1s linear",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          padding: 4,
        }}
      >
        <Timer
          height={20}
          className={timeLeft <= tiempo / 4 && timeLeft !== 0 ? "blink" : ""}
        ></Timer>
        <p
          className={
            timeLeft <= tiempo / 4 && timeLeft !== 0
              ? "countdown blink"
              : "countdown"
          }
        >
          {timeLeft}s
        </p>
      </div>
    </div>
  );
};

export default CountdownBar;
