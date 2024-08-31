import Menu from "@/components/Menu";
import type { Metadata } from "next";
import Link from "next/link";
/*eslint-disable @next/next/no-img-element*/

export const metadata: Metadata = {
  title: "Dashboard layout",
  description: "Generated by create next app",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex items-center ">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] h-full lg:px-1 py-4 hide-scrollbar">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start"
        >
          <img src="logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block"> Dashboard</span>
        </Link>
        <Menu />
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[84%] h-full">r</div>
    </div>
  );
}
