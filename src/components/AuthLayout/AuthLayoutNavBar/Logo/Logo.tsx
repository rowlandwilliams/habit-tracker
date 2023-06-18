import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"} className="flex items-start gap-x-1 p-4">
      <div className=" h-7 w-7 rounded-full bg-gradient-to-t from-purple via-teal-500 to-lime-300" />
    </Link>
  );
};
