"use client";
import { mergeStyles } from "@/lib/helpers";
import Image from "next/image";
import { FC } from "react";
type TCommonInput = {
  placeholder: string;
  icon?: string;
  style: string;
  label?: string;
};
const CommonInput: FC<TCommonInput> = ({ placeholder, icon, style, label }) => {
  return (
    <div className={mergeStyles(" items-center gap-2 justify-center ", style)}>
      {label && <label>{label}</label>}
      {icon && <Image src={icon} alt="input icon" width={20} height={20} />}
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent outline-none"
      />
    </div>
  );
};

export default CommonInput;
