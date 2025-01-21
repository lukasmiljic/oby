import Image from "next/image";
import Link from "next/link";
import { MdChevronRight } from "react-icons/md";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen">
      <Image src={"/icon.svg"} width={200} height={200} alt="oby logo" />
      <h1 className="text-stone-800 text-2xl font-bold">Order by yourself</h1>
      <p className="text-sm text-stone-400">
        Quickly order by scanning a QR code
      </p>
      <Link href={"/menu"}>
        <p className="text-xs cursor-pointer underline text-blue-500 hover:text-blue-400 transition-colors">
          Checkout our menu
          <MdChevronRight className="inline" />
        </p>
      </Link>
    </div>
  );
}
