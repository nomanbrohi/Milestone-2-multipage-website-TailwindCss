export default function TopHeader() {
  return (
    <div className="hidden lg:block">
      <div className="h-12 w-[100%] bg-black flex justify-center items-center">
        <div className="w-[80%] flex items-center justify-center gap-2">
          <p className="text-[14px] text-[#FAFAFA]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <button className="text-[16px] text-[#FAFAFA] font-bold underline font-poppins">
            ShopNow
          </button>
        </div>
        <div>
          <select className="bg-black w-24 text-white">
            <option value="English">English</option>
            <option value="Urdu">Urdu</option>
            <option value="Arabic">Arabic</option>
          </select>
        </div>
      </div>
    </div>
  );
}
