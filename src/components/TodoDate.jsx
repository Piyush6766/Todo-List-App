import React, { useEffect, useState } from "react";

export default function TodoDate() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date()); // har second update karo
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = dateTime.toLocaleDateString();
  const formattedTime = dateTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  return (
    <h2 className="text-[2.4rem] text-center">
      {formattedDate} - {formattedTime}
    </h2>
  );
}
