/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useTimer } from 'react-timer-hook';
import './Timer.scss';

function Timer({ expiryTimestamp }) {
  const [isEnd, setisEnd] = useState(false);
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      setisEnd(!isEnd);
    },
  });
  return (
    <div className="timer">
      <div className={isEnd ? 'timer__wrap timer__wrap--end' : 'timer__wrap'}>
        <p>
          <span>{days < 10 ? 0 + String(days) : days}</span>
          days
        </p>
        <span className="connect">:</span>
        <p>
          <span>{hours < 10 ? 0 + String(hours) : hours}</span>
          Hours
        </p>
        <span className="connect">:</span>
        <p>
          <span>{minutes < 10 ? 0 + String(minutes) : minutes}</span>
          Mins
        </p>
        <span className="connect">:</span>
        <p>
          <span>{seconds < 10 ? 0 + String(seconds) : seconds}</span>
          Secs
        </p>
      </div>
    </div>
  );
}

export default Timer;
