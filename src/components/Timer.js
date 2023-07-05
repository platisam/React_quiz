import { useEffect } from "react";

const Timer = ({ dispatch, secondsRemaining }) => {
  useEffect(() => {
    setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
  }, [dispatch]);

  return <div className="timer">{secondsRemaining}</div>;
};
export default Timer;
