import Image from "next/image";
import { CommonInput } from "./shared";
const Navbar = () => {
  return (
    <div className="flex items-center justify-end md:justify-between mt-2">
      <CommonInput
        placeholder="Search"
        icon="/search.png"
        style=" hidden md:flex border-none px-2 py-1 rounded-md bg-white"
      />
      <div className="flex gap-4 items-center justify-center">
        <Image
          src="/message.png"
          alt="message icon"
          width={32}
          height={32}
          className="cursor-pointer"
        />
        <div className="relative">
          <Image
            src="/announcement.png"
            alt="announcement icon"
            width={32}
            height={32}
          />
          <span className="bg-purple-800 absolute w-[15px] text-sm h-[15px] top-[-3px] right-[-1px] flex items-center justify-center text-white font-bold rounded-full">
            1
          </span>
        </div>
        <div className="flex flex-col text-sm">
          <span className="font-bold">Souvik Bhattacharjee</span>
          <span className="text-gray-500">Developer</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
