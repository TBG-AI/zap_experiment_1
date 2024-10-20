"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { homeTeam: "Chelsea", awayTeam: "Arsenal", time: "7:30 PM" },
  { homeTeam: "Man City", awayTeam: "Man United", time: "8:30 PM" },
  { homeTeam: "Tottenham", awayTeam: "Liverpool", time: "9:30 PM"},
];

export default function GameItems() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        console.log(link.homeTeam, link.awayTeam, link.time)
        return (
          <div>
          </div>
          // <Link
          //   key={link.name}
          //   href={link.href}
          //   className={clsx(
          //     "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
          //     {
          //       "bg-sky-100 text-blue-600": pathname == link.href,
          //     }
          //   )}
          // >
          //   <p className="hidden md:block">{link.name}</p>
          // </Link>
        );
      })}
    </>
  );
}
