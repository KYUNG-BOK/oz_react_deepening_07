import { useEffect, useState, useRef } from "react"; // useRef는 예상치못한 변수들을 방지하기 위해 추가했습니다.
import './Clock.css';

function Clock() {
  const [time, setTime] = useState(new Date());
  const [timerRunning, setTimerRunning] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (timerRunning) {
      clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        setTime(new Date());
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [timerRunning]);

  const handleTimerToggle = () => {
    setTimerRunning((prev) => !prev);
  };

  return (
    <div className="timer-container">
      <h1 className="timer-time">{time.toLocaleTimeString("it-IT")}</h1>
      <button
        className={`timer-button ${timerRunning ? 'running' : 'paused'}`}
        onClick={handleTimerToggle}
      >
        {timerRunning ? "타이머 정지" : "타이머 시작"}
      </button>
    </div>
  );
}

export default Clock;
