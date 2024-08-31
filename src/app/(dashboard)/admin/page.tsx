import {
  BarChartCustom,
  CalendarCustom,
  Card,
  CountChart,
  Events,
  FinanceChart,
} from "@/components/shared";
import Image from "next/image";
const events = [
  {
    eventTitle: "Team Meeting",
    content: "Monthly team meeting to discuss project updates and team goals.",
    createdAt: new Date("2024-08-01T10:00:00Z"), // August 1, 2024, 10:00 AM UTC
  },
  {
    eventTitle: "Product Launch",
    content:
      "Launch event for our new product line. Join us for a demonstration and Q&A session.",
    createdAt: new Date("2024-08-10T15:00:00Z"), // August 10, 2024, 3:00 PM UTC
  },
  {
    eventTitle: "Client Presentation",
    content:
      "Presentation for our key client to showcase the latest project developments and strategies.",
    createdAt: new Date("2024-08-15T09:30:00Z"), // August 15, 2024, 9:30 AM UTC
  },
  {
    eventTitle: "Company Picnic",
    content:
      "Annual company picnic for employees and their families. Enjoy a day of fun and relaxation.",
    createdAt: new Date("2024-08-20T12:00:00Z"), // August 20, 2024, 12:00 PM UTC
  },
  {
    eventTitle: "Quarterly Review",
    content:
      "Review of the quarterly financial and performance metrics. Includes discussions on improvements and next steps.",
    createdAt: new Date("2024-08-30T14:00:00Z"), // August 30, 2024, 2:00 PM UTC
  },
];
export default function Home() {
  return (
    <div className="mt-8 flex flex-col gap-4 md:gap-2 md:items-start items-center justify-center  md:flex-row ">
      <div className=" w-[80%] md:w-[70%]">
        <div className="flex items-center justify-between flex-wrap gap-y-2">
          <Card date={new Date()} amount={"1234"} holderType={"Students"} />
          <Card date={new Date()} amount={"1234"} holderType={"Teachers"} />
          <Card date={new Date()} amount={"1234"} holderType={"Parents"} />
          <Card date={new Date()} amount={"1234"} holderType={"Staffs"} />
        </div>
        <div className="flex flex-col md:flex-row justify-center  items-center gap-4 mt-6">
          <CountChart style="w-[100%] md:w-[35%] md:min-w-[200px] h-[300px] " />
          <BarChartCustom style="w-[100%] md:w-[65%] h-[300px]" />
        </div>
        <FinanceChart style="w-[100%] h-[500px] my-4 " />
      </div>
      <div className="md:w-[30%] w-[100%] flex flex-col ">
        <CalendarCustom />
        <div className=" rounded-xl my-4 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span>Events</span>
            <Image src="/moreDark.png" width={20} height={20} alt="more icon" />
          </div>
          <Events
            data={events}
            style="border-t-4 rounded-md shadow-md bg-white odd:border-sky even:border-purple"
          />
        </div>

        <div className=" rounded-xl my-4 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span>Students</span>
            <Image src="/moreDark.png" width={20} height={20} alt="more icon" />
          </div>
          <Events
            data={events}
            style="rounded-md shadow-md odd:bg-sky  even:bg-purple"
          />
        </div>
      </div>
    </div>
  );
}
