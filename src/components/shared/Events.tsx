import { formatDateToDDMMYY, mergeStyles } from "@/lib/helpers";
import { FC } from "react";

type TEvents = {
  data: {
    eventTitle: string;
    content: string;
    createdAt: Date;
  }[];
  style: string;
};
const Events: FC<TEvents> = ({ data, style }) => {
  return (
    <div className="flex flex-col gap-2 overflow-y-scroll hide-scrollbar max-h-[300px]">
      {data.map((item) => {
        return (
          <div
            key={item.content}
            className={mergeStyles("px-2 py-1 flex flex-col gap-2", style)}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-medium text-sm">{item.eventTitle}</h1>
              <h3 className="text-gray-500 text-xs">
                {formatDateToDDMMYY(item.createdAt)}
              </h3>
            </div>
            <h2 className="text-xs text-gray-600">{item.content}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Events;
