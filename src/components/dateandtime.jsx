import { useEffect, useState } from "react";

function DateTime({ timeZoneOffset }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    console.log(new Date());
    return () => clearInterval(interval);
  }, []);
  function currentdate(dateTime, offset) {
    const localdatetime = new Date(dateTime.getTime() + offset)
    return localdatetime.toLocaleDateString(undefined, {
      timeZone: "UTC",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }
  function currenttime(dateTime, offset) {
    const localdatetime = new Date(dateTime.getTime() + offset)
    return localdatetime.toLocaleTimeString(undefined, {
      timeZone: "UTC",
      minute: "2-digit",
      hour: "2-digit",
      second: "2-digit",

    })

  }
  
  // const FormattedDate = localtime.toLocaleDateString("en-US", Doptions);
  // const FormattedTime = localtime.toLocaleTimeString("en-US", Toptions);
  // return { FormattedDate, FormattedTime };

// const { FormattedDate, FormattedTime } = currentDT(currentDate, timeZoneOffset);
// console.log(timeZoneOffset)
return (
  <div className="dateandtime">
    <p className="date-section">{currentdate(currentDate, timeZoneOffset)}</p>
    <p className="time-section"><span>Current Time:</span><br />{currenttime(currentDate, timeZoneOffset)} </p>
    {/* <p>{currentDT(currentDate, timeZoneOffset)}</p> */}
  </div>
);
}
export default DateTime;
