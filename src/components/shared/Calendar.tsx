"use client";

import { FC, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const CalendarCustom: FC = () => {
  const [value, setValue] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-xl ">
      <Calendar onChange={setValue} value={value} />
    </div>
  );
};

export default CalendarCustom;
