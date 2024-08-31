import { formatDateToDDMMYY, mergeStyles } from "@/lib/helpers";
import Image from "next/image";
import { FC } from "react";
type TCard = {
  date: Date;
  amount: string;
  holderType: string;
  style?: string;
};
const Card: FC<TCard> = ({ date, amount, holderType, style = "" }) => {
  return (
    <div
      className={mergeStyles(
        "min-w-[150px] rounded-md odd:bg-purple even:bg-yellow gap-2 p-2 flex flex-col",
        style,
      )}
    >
      <div className="flex items-center w-full justify-between">
        <div className="text-xs  text-green-700 bg-white rounded-md px-2">
          <span>{formatDateToDDMMYY(date)}</span>
        </div>
        <Image src="/more.png" alt="moreicon" width={20} height={20} />
      </div>
      <span className="font-medium text-lg">{amount}</span>
      <span className="text-gray-500 ">{holderType}</span>
    </div>
  );
};
export default Card;
