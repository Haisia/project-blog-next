import Image from "next/image";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";

const Header = () => {
  return (
    <header className="border-b border-gray-500/30 flex items-center py-3 px-80 justify-between h-15">
      <div className="font-bold flex items-center gap-2">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            src="/icons/myprofile-ghibli.png"
            alt="MyProfile image"
            className="object-cover"
            fill
          />
        </div>
        <Link href="/">Haisia&#39;s blog</Link>
      </div>
      <SearchBar/>
    </header>
  );
};

export default Header;