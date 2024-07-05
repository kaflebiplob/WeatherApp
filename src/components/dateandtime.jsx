import { useEffect, useState } from "react";

function DateTime() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    console.log(new Date());
    return () => clearInterval(interval);
  }, []);
  function currentDT(date) {
    const Doptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const Toptions = {
      minute: "2-digit",
      hour: "2-digit",
      second: "2-digit",
    };

    const FormattedDate = date.toLocaleDateString(undefined, Doptions);
    const FormattedTime = date.toLocaleTimeString(undefined, Toptions);
    return { FormattedDate, FormattedTime };
  }
  const { FormattedDate, FormattedTime } = currentDT(currentDate);
  return (
    <div className="dateandtime">
      <p className="date-section">{FormattedDate}</p>
      <p className="time-section"><span>Current Time:</span><br />{FormattedTime} </p>

    </div>
  );
}
export default DateTime;
