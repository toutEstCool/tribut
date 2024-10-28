import { LogOutIcon } from "lucide-react";
import Link from "next/link";

export function Logo() {
  return (
    <Link className="flex items-center space-x-2" href="/">
      {/* <LogOutIcon className="h-6 w-6" /> */}
      <span className="font-bold inline-block">Tribute</span>
    </Link>
  );
}
