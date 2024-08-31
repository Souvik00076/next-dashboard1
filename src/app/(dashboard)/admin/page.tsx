import { Card } from "@/components/shared";

export default function Home() {
  return (
    <div className="mt-8 flex flex-col md:flex-row items-center  ">
      <div className=" w-[70%]">
        <div className="flex items-center md:gap-4 gap-2 flex-wrap ">
          <Card date={new Date()} amount={"1234"} holderType={"Students"} />
          <Card date={new Date()} amount={"1234"} holderType={"Teachers"} />
          <Card date={new Date()} amount={"1234"} holderType={"Parents"} />
          <Card date={new Date()} amount={"1234"} holderType={"Staffs"} />
        </div>
      </div>
      <div className="w-[30%] bg-yellolight">r</div>
    </div>
  );
}
