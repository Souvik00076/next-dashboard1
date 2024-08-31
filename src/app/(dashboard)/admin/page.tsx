import {
  BarChartCustom,
  Card,
  CountChart,
  FinanceChart,
} from "@/components/shared";

export default function Home() {
  return (
    <div className="mt-8 flex flex-col items-center justify-center md:flex-row">
      <div className=" w-[80%] md:w-[70%]">
        <div className="flex items-center justify-between flex-wrap gap-y-2">
          <Card date={new Date()} amount={"1234"} holderType={"Students"} />
          <Card date={new Date()} amount={"1234"} holderType={"Teachers"} />
          <Card date={new Date()} amount={"1234"} holderType={"Parents"} />
          <Card date={new Date()} amount={"1234"} holderType={"Staffs"} />
        </div>
        <div className="flex flex-col md:flex-row justify-center  items-center gap-4 mt-4">
          <CountChart style="w-[100%] md:w-[35%] md:min-w-[200px] h-[300px] " />
          <BarChartCustom style="w-[100%] md:w-[65%] h-[300px]" />
        </div>
        <FinanceChart style="w-[100%] h-[300px] my-4 " />
      </div>
      <div className="w-[30%]"></div>
    </div>
  );
}
