import { Card, CountChart } from "@/components/shared";

export default function Home() {
  return (
    <div className="mt-8 flex flex-col md:flex-row">
      <div className=" w-[70%]">
        <div className="flex items-center md:gap-4 gap-2 flex-wrap ">
          <Card date={new Date()} amount={"1234"} holderType={"Students"} />
          <Card date={new Date()} amount={"1234"} holderType={"Teachers"} />
          <Card date={new Date()} amount={"1234"} holderType={"Parents"} />
          <Card date={new Date()} amount={"1234"} holderType={"Staffs"} />
        </div>
        {/* count chart and attendance chart*/}
        <div className="flex  items-center gap-2 mt-4">
          <CountChart style="w-[35%] min-w-[200px] h-[300px] " />
        </div>
      </div>
      <div className="w-[30%] bg-yellolight">r</div>
    </div>
  );
}
