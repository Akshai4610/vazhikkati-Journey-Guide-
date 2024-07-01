import { useEffect, useState } from "react";

const InitialTimer = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainingTime, setRemainingTime] = useState(InitialTimer);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Interval");
      setRemainingTime((prev) => prev - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log("Timer started");
    const timer = setTimeout(() => {
      onConfirm();
    }, InitialTimer);

    return () => {
      console.log("Timer end");
      clearTimeout(timer);
    };
  }, [onConfirm]); //dependence (here is a function so it will cause a loop,but in this case {open ? children : null } ' it will not effect )

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={InitialTimer} />
    </div>
  );
}
