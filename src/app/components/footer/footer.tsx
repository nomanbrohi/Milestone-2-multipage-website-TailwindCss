import Image from "next/image"

export default function Footer() {
  return (
    <div className="bg-black w-full md:h-[440px] flex flex-col items-center gap-2 md:gap-0 md:pt-0 pt-8">
      <div className="w-full md:h-[90%] flex md:flex-row flex-col items-center justify-center border-b-2 border-gray-950">
        <div className="md:w-[1170px] md:h-[236px] flex md:flex-row flex-col justify-between md:items-start items-center gap-8 md:gap-0">
          <div className="h-full flex flex-col md:justify-around md:items-start items-center gap-3 md:gap-0 ">
            <h1 className="md:text-2xl text-3xl font-bold md:h-[28px] text-white mb-3">
              Exclusive
            </h1>
            <h2 className="text-xl font-medium text-[#FAFAFA]">Subscribe</h2>
            <p className="text-base text-[#FAFAFA]">
              Get 10% Off your First Order
            </p>
            <form className="text-white">
              <input type="email" placeholder="Enter Your Email" className="h-12 pl-4 placeholder:text-slate-200 placeholder:text-base bg-transparent border-2 border-solid border-white rounded-md"/>
              </form>
          </div>
          <div className="md:w-[200px] md:h-full flex flex-col justify-around md:items-start items-center gap-3 md:gap-0 ">
            <h1 className="md:text-xl text-2xl font-bold md:font-normal md:h-[24px] text-white mb-3">Support</h1>
            <p className="text-base text-[#FAFAFA]">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="text-base text-[#FAFAFA]">nomanbrohi9@gmail.com</p>
            <p className="text-base text-[#FAFAFA]">+92-346-2805603</p>
          </div>
          <div className="md:h-full flex flex-col justify-around md:items-start items-center gap-3 md:gap-0">
            <h1 className="md:text-xl text-2xl font-bold md:font-normal md:h-[24px] text-white">Account</h1>
            <nav>
              <ul className="flex flex-col md:items-start items-center md:gap-4 gap-3 text-base text-[#FAFAFA]">
                <li>My Account</li>
                <li>Login & Register</li>
                <li>Cart</li>
                <li>Wishlist</li>
                <li>Shop</li>
              </ul>
            </nav>
          </div>
          <div className="md:h-full flex flex-col justify-around md:items-start items-center gap-3 md:gap-0">
            <h1 className="md:text-xl text-2xl font-bold md:font-normal md:h-[24px] text-white">Quick Link</h1>
            <nav>
              <ul className="flex flex-col md:items-start items-center md:gap-4 gap-3 text-base text-[#FAFAFA]">
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>Faq</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
          <div className="md:h-full flex flex-col justify-around md:items-start items-center gap-3 md:gap-0">
            <h1 className="md:text-xl text-2xl md:h-[24px] text-white">Download App</h1>
            <div className="flex flex-col w-[198px] h-[110px] justify-between">
            <p className="text-xs text-[#FAFAFA]">
              Save $3 with App New User Only
            </p>
            <div className="flex w-[198px] h-[84px] justify-between">
              <Image src="/images/qrCode.png" alt="" width={80} height={80}/>
              <div className="flex flex-col justify-between ">
              <Image src="/images/appStore.png" alt="" width={110} height={40}/>
              <Image src="/images/googlePlayStore.png" alt="" width={110} height={40}/>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[40px] w-full text-stone-700 text-base flex items-center justify-center border-t-2 border-stone-700">
        <p>Copyright 2022. All right reserved</p>
      </div>
    </div>
  );
}
