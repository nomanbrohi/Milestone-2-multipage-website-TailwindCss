import "boxicons/css/boxicons.min.css";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function navbar() {
  return (
    <>
      <main className="w-full">
        <div className="flex justify-between items-center md:w-[1170px] m-auto">
          <div className="flex justify-between items-center w-[645px] md:mt-10 mt-5 mb-4">
            <div className="">
              <h1 className="text-2xl font-bold">Exclusive</h1>
            </div>
            <div className="hidden md:block">
              <nav>
                <ul className="flex gap-8 text-base">
                  <Link href="/">Home</Link>
                  <Link href="/#">Contact</Link>
                  <Link href="/about">About</Link>
                  <Link href="/#">Sign Up</Link>
                </ul>
              </nav>
            </div>
          </div>

          <div className="flex justify-between items-center w-[347px] md:mt-10 mt-5 mb-4">
            <div className="relative w-[243px] md:flex justify-end items-center bg-transparent hidden">
              <input
                className="w-[243px] h-[38px] placeholder:text-[12px] bg-slate-200 border-0 focus:outline-none py-1 px-6 rounded-md"
                placeholder="What are you looking for?"
                type="text"
              ></input>
              <i className="bx bx-search absolute right-4 text-black text-2xl"></i>
            </div>
            <div className="flex justify-between items-center text-2xl ml-2 w-[80px]">
              <i className="bx bx-heart text-3xl"></i>
              <i className="bx bx-cart-alt text-3xl"></i>
            </div>
          </div>

          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <nav>
                    <ul className="flex flex-col gap-8 text-3xl mt-10">
                      <Link href="/">Home</Link>
                      <Link href="/#">Contact</Link>
                      <Link href="/about">About</Link>
                      <Link href="/#">Sign Up</Link>
                    </ul>
                  </nav>
                </SheetTitle>
                <SheetDescription>
                  
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </main>
      <div className="w-full h-[2px] bg-black"></div>
    </>
  );
}

//     <div className="relative w-[100%] bg-red-500 h-14 flex items-center bg-transparent">
//     <input
//       className="w-[80%] bg-slate-200 border-0 focus:outline-none py-1 px-6 rounded-md"
//       placeholder="What are you looking for?"
//       type="text"
//     ></input>
//     <i className="bx bx-search absolute right-36 text-black"></i>
//     <div className="flex items-center text-2xl ml-2 bg-pink-500">
//       <i className="bx bx-heart"></i>
//       <i className="bx bx-cart-alt"></i>
//     </div>
//   </div>

{
  /* <div className="bg-green-400 flex-1 flex justify-end ">
            <div className="flex w-[100%] bg-red-400">
              <div className="relative w-[80%]">
                <input
                  className="w-[243px] h-[38px]"
                  placeholder="What are you looking for?"
                  type="text"
                ></input>
              </div>
            </div>
          </div> */
}
