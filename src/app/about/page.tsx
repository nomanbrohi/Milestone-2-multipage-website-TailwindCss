import Image from "next/image";

export default function about() {
  return (
    <div>
      {/* <h1 className="w-full h-[120px] border-b-4">BreadCrumb</h1> */}
      <section className="w-full md:h-screen my-24 flex md:justify-end justify-center">
        <div className="w-[90%] md:h-[609px] ">
          <div className="w-full grid md:grid-cols-[525px_705px] justify-between">
            <div className="grid border-3 self-center">
              <h1 className="text-[54px] font-poppins text-center md:text-left font-semibold">
                Our Story
              </h1>
              <p className="text-base font-poppins text-center md:text-left">
                Launched in 2015, Exclusive is South Asia’s premier online
                shopping marketplace with an active presence in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.
              </p>
              <br />
              <p className="text-base font-poppins text-center md:text-left">
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
            <div className="bg-orange-200 md:h-[609px] justify-self-end">
              <Image
                src="/images/aboutImages/aboutProfile.png"
                alt="About Profile Picture"
                width={1000}
                height={700}
                className="rounded-s-lg"
              ></Image>
            </div>
          </div>
        </div>
      </section>

      <section className="md:w-[1170px] md:h-[230px] my-24 m-auto grid items-center">
        <div className="w-[full] grid md:grid-cols-[1fr_1fr_1fr_1fr] grid-cols-[380px] gap-x-8 items-center md:justify-start justify-center md:gap-0 gap-8">
          <div className="flex flex-col py-6 justify-center items-center border border-gray-300 hover:bg-[#DB4444] hover:text-white group">
            <Image
              src="/images/aboutImages/about-services-4.png"
              alt="services-4"
              width={80}
              height={80}
              className="filter group-hover:invert mb-5"
            />
            <h3 className="text-[32px] font-bold">10.5k</h3>
            <p className="text-base">Sallers active our site</p>
          </div>
          <div className="flex flex-col py-6 justify-center items-center border border-gray-300 hover:bg-[#DB4444] hover:text-white group">
            <Image
              src="/images/aboutImages/about-services-3.png"
              alt="services-3"
              width={80}
              height={80}
              className="filter invert group-hover:invert-0 mb-5"
            />
            <h3 className="text-[32px] font-bold">33k</h3>
            <p className="text-base">Monthly Product Sale</p>
          </div>
          <div className="flex flex-col py-6 justify-center items-center border border-gray-300 hover:bg-[#DB4444] hover:text-white group">
            <Image
              src="/images/aboutImages/about-services-2.png"
              alt="services-2"
              width={80}
              height={80}
              className="filter group-hover:invert mb-5"
            />
            <h3 className="text-[32px] font-bold">45.5k</h3>
            <p className="text-base">Customer active in our site</p>
          </div>
          <div className="flex flex-col py-6 justify-center items-center border border-gray-300 hover:bg-[#DB4444] hover:text-white group">
            <Image
              src="/images/aboutImages/about-services-1.png"
              alt="services-1"
              width={80}
              height={80}
              className="filter group-hover:invert mb-5"
            />
            <h3 className="text-[32px] font-bold">25k</h3>
            <p className="text-base">Annual gross sale in our site</p>
          </div>
        </div>
      </section>

      <section className="md:w-[1170px] md:h-[564px] my-24 m-auto grid grid-rows-1 items-center">
        <div className="w-[full] grid md:grid-cols-[370px_370px_370px] gap-x-10">
          <div className="flex flex-col gap-3 items-center">
            <div className="w-full h-[430px] bg-[#F5F5F5] flex flex-col items-center justify-end">
              <Image
                src="/images/aboutImages/tom.png"
                alt="services-4"
                width={236}
                height={391}
              />
            </div>
            <h3 className="text-[32px] font-medium">Tom Cruise</h3>
            <p className="text-[16px]">Founder & Chairman</p>
            <div className="flex gap-3">
              <i className="bx bxl-twitter text-xl"></i>
              <i className="bx bxl-instagram text-xl"></i>
              <i className="bx bxl-linkedin text-xl"></i>
            </div>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <div className="w-full h-[430px] bg-[#F5F5F5] flex flex-col items-center justify-end">
              <Image
                src="/images/aboutImages/emma.png"
                alt="services-4"
                width={294}
                height={397}
              />
            </div>
            <h3 className="text-[32px] font-medium">Emma Watson</h3>
            <p className="text-[16px]">Managing Director</p>
            <div className="flex gap-3">
              <i className="bx bxl-twitter text-xl"></i>
              <i className="bx bxl-instagram text-xl"></i>
              <i className="bx bxl-linkedin text-xl"></i>
            </div>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <div className="w-full h-[430px] bg-[#F5F5F5] flex flex-col items-center justify-end">
              <Image
                src="/images/aboutImages/will.png"
                alt="services-4"
                width={326}
                height={392}
              />
            </div>
            <h3 className="text-[32px] font-medium">Will Smith</h3>
            <p className="text-[16px]">Product Designer</p>
            <div className="flex gap-3">
              <i className="bx bxl-twitter text-xl"></i>
              <i className="bx bxl-instagram text-xl"></i>
              <i className="bx bxl-linkedin text-xl"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="flex gap-5 justify-center items-center md:w-[1170px] md:h-[400px] border-b-2 m-auto my-20">
        <div className="md:w-[943px] md:h-[161px] flex md:flex-row flex-col justify-around md:gap-0 gap-8">
          <div className="w-[256px] h-[161px] flex flex-col justify-center items-center gap-3">
            <Image
              src="/images/services.png"
              alt="services"
              width={80}
              height={80}
            />
            <h3 className="text-xl text-black font-semibold">
              FREE AND FAST DELIVERY
            </h3>
            <p className="text-[11px]">
              Free delivery for all orders over $140
            </p>
          </div>
          <div className="w-[256px] h-[161px] flex flex-col justify-center items-center gap-3">
            <Image
              src="/images/services-1.png"
              alt="services-1"
              width={80}
              height={80}
            />
            <h3 className="text-xl text-black font-semibold">
              24/7 CUSTOMER SERVICE
            </h3>
            <p className="text-[11px]">Friendly 24/7 customer support</p>
          </div>
          <div className="w-[256px] h-[161px] flex flex-col justify-center items-center gap-3">
            <Image
              src="/images/Services-2.png"
              alt="services-2"
              width={80}
              height={80}
            />
            <h3 className="text-xl text-black font-semibold">
              MONEY BACK GUARANTEE
            </h3>
            <p className="text-[11px]">We return money within 30 days</p>
          </div>
        </div>
      </section>
    </div>
  );
}
