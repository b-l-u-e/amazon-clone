import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-2 flex-grow py-2">
        {/* left  */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            className="cursor-pointer"
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            layout="fixed"
            objectFit="contain"
            objectPosition="left"
          />
        </div>

        {/* search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* right */}

        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p className="text-gray-300">Hello John Doe</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>

          <div className="link">
            <p className="text-gray-300">Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-8 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline mt-2 font-extrabold md:text-sm">
              Cart
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center bg-amazon_blue-light text-gray-200 text-sm space-x-3 p-2">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" /> All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden md:inline-flex">Electronics</p>
        <p className="link hidden md:inline-flex">Food & Grocery</p>
        <p className="link hidden md:inline-flex">Prime</p>
        <p className="link hidden md:inline-flex">Buy Again</p>
        <p className="link hidden md:inline-flex">Shopper Toolkit</p>
        <p className="link hidden md:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;