import { XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  return (
    <header>
      <Image
        src="https://res.cloudinary.com/demo/image/fetch/fl_png8/https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        height={40}
        width={120}
        onClick={() => router.push("/")}
        className="cursor-pointer"
      />
      <form
        className="flex px-6 py-3 ml-10 border border-gray-200 rounded-full
      shadow-lg max-w-3xl items-center"
      >
        <input
          ref={searchInputRef}
          className="flex-grow w-full
        focus:outline-none"
          type="text"
        />
        <XIcon
          className="h-7 sm:mr-3 text-gray-500 cursor-pointer
        transition duration-100 transform hover:scale-125"
          onClick={() => (searchInputRef.current.value = "")}
        />
      </form>
    </header>
  );
}

export default Header;
