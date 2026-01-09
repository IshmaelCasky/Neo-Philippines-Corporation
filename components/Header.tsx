import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 py-6 px-4 md:py-8 md:px-12 flex justify-between items-center">
      <Link href="#" className="flex items-center gap-4 group">
        <Image
          src="/logo.png"
          alt="Neo Philippines Corporation Logo"
          width={98}
          height={98}
          className="h-auto w-auto"
        />
        <div className="flex flex-col justify-center border-l border-[#0B143F]/20 pl-4 h-12">
          <span className="block text-[10px] uppercase tracking-widest text-[#0B143F] font-bold leading-none">
            Neo
          </span>
          <span className="block text-[10px] uppercase tracking-widest text-[#0B143F] font-bold leading-none">
            Philippines
          </span>
          <span className="block text-[8px] uppercase tracking-widest text-zinc-400 font-sans leading-none mt-1">
            Corporation
          </span>
        </div>
      </Link>
    </header>
  );
}
