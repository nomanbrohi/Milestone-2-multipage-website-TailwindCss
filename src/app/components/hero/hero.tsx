import Image from "next/image";

export default function hero() {
  return (
    <div className="flex justify-center w-full lg:w-[1178px] h-[384] m-auto">
      <div className="flex md:flex-row flex-col items-center w-full h-full mb-24">
        <div className="w-full lg:w-[238px] flex justify-start items-end lg:border-r-2 ">
          <div className="w-full flex justify-center lg:justify-start items-center lg:w-[217px] h-[445px] mr-5">
            <ul className="flex flex-col gap-4 text-base text-center lg:text-left">
              <li>Woman&apos;s Fashion</li>
              <li>Men&apos;s Fashion</li>
              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Medicine</li>
              <li>Sports & Outdoor</li>
              <li>Baby&apos;s & Toys</li>
              <li>Groceries & Pets</li>
              <li>Health & Beauty</li>
            </ul>
          </div>
        </div>

        <div className="md:w-[940px] lg:flex flex-col justify-end items-end">
          <div className="bg-black w-full md:w-[892px] md:h-[344px] flex flex-col justify-start md:px-16 text-white">

            <div className="flex md:flex-row flex-col justify-center items-center">
              <div className="w-[294px] flex flex-col justify-center md:items-start items-center gap-5">
                <div className="flex md:flex-row flex-col w-full justify-start gap-5 items-center text-base">
                  <Image
                    src="/images/apple_gray_logo_1.png"
                    alt="Apple Logo"
                    height={49}
                    width={40}
                  ></Image>
                  <p>iPhone 14 Series</p>
                </div>
                <h1 className="md:text-5xl text-2xl font-medium text-center md:text-left">
                  Up to 10% off Voucher
                </h1>
                <button className="underline text-base hidden md:block">Shop Now</button>
              </div>
              <div className="flex justify-center">
                <Image src="/images/hero_fram_01.png" alt="Hero Frame" width={496} height={344}></Image>
              </div>
            </div>

            <div className="flex h-[14px] gap-3 justify-center ">
              <input type="radio" className="cursor-pointer "/>
              <input type="radio" />
              <input type="radio" />
              <input type="radio" />
              <input type="radio" />

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
