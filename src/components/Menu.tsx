import { menuItems } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  return menuItems.map((item) => {
    return (
      <div key={item.title} className="my-4">
        <span className="text-gray-400 hidden lg:block my-2">{item.title}</span>

        {item.items.map((nestedItem) => {
          return (
            <Link
              className="text-gray-500 flex items-center gap-4 py-1 justify-center lg:justify-start"
              key={nestedItem.label}
              href={nestedItem.href}
            >
              <Image
                src={nestedItem.icon}
                alt={nestedItem.label + " icon"}
                width={20}
                height={20}
              />
              <span className="hidden lg:block">{nestedItem.label}</span>
            </Link>
          );
        })}
      </div>
    );
  });
};
export default Menu;
