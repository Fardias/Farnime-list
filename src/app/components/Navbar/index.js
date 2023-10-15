import Link from "next/link";

export default function Navbar() {
  return (
      <div className="p-4 flex justify-between bg-blue-600 text-white">
        <Link href="/">FARNIMELIST</Link>

        <input className="text-black border-2 max-w-[150px] rounded-lg px-2 sm:max-w-[250px]" type="text" placeholder="Search"/>
      </div>
  );
}
