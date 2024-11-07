"use client";
import Image from "next/image";
import StarRating from "../StarRating";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Section() {
  return (
    <>
      {/* flash Sale Section */}
      <section className="flex flex-col gap-5 justify-center w-full lg:w-[1170px] border-b-2 m-auto py-16 ">
        <div className="w-full">
          <div className="flex md:justify-start justify-center items-center w-full gap-5">
            <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-md hidden md:block"></div>
            <p className="text-[#DB4444] text-base md:font-medium font-bold">
              Today&apos;s
            </p>
          </div>
          <div className="font-poppins w-full flex md:flex-row flex-col justify-between mt-6">
            <div className="md:w-[600px] w-full flex md:flex-row flex-col justify-between items-center gap-5 text-4xl font-semibold tracking-wider text-black">
              <h1>Flash Sales</h1>
              <div className="w-[302px] h-[50px] flex items-end gap-3">
                <div className="w-[46px] flex flex-col justify-end items-center p-0">
                  <h6 className="text-[12px] h-[25px]">Days</h6>
                  <h2 className="text-[32px] h-[38px]">03</h2>
                </div>
                <p>:</p>

                <div className="w-[46px] flex flex-col justify-end items-center p-0">
                  <h6 className="text-[12px] h-[25px]">Hours</h6>
                  <h2 className="text-[32px] h-[38px]">23</h2>
                </div>
                <p>:</p>

                <div className="w-[46px] flex flex-col justify-end items-center p-0">
                  <h6 className="text-[12px] h-[25px]">Minutes</h6>
                  <h2 className="text-[32px] h-[38px]">19</h2>
                </div>
                <p>:</p>

                <div className="w-[46px] flex flex-col justify-end items-center p-0">
                  <h6 className="text-[12px] h-[25px]">Seconds</h6>
                  <h2 className="text-[32px] h-[38px]">56</h2>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex justify-center gap-3">
              <Image
                className="w-[46px] h-[46px]"
                src="/images/left_Arrow.png"
                alt="Left Arrow"
                width={100}
                height={100}
              />
              <Image
                className="w-[46px] h-[46px]"
                src="/images/right_Arrow.png"
                alt="Right Arrow"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>

        
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            // autoplay={{
            //   delay: 1500,
            //   disableOnInteraction: true,
            //   pauseOnMouseEnter: true,
            // }}
            breakpoints={{
              768: { slidesPerView: 4 },
            }}
            // navigation
            // pagination={{ clickable: true }}
            className="w-full md:h-[350px] h-auto flex md:flex-row flex-col justify-between md:items-start items-center"
          >
            <SwiperSlide>
              <div className="md:w-[270px]  h-[350px] flex flex-col md:items-start items-center gap-2">
                <div className="w-[270px] h-[250px] relative bg-[#F5F5F5] overflow-hidden group flex">
                  <Image
                    className="m-auto pt-9 w-[190px] h-[180px]"
                    src="/images/product_1.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                  <p className="w-[55px] h-[26px] bg-[#DB4444] rounded-md absolute top-2 left-2 text-white text-[12px] flex items-center justify-center">
                    -40
                  </p>
                  <i className="bx bx-heart absolute top-2 right-3 bg-white text-base w-[34px] h-[34px] rounded-full text-center pt-1"></i>
                  <button className="bg-black text-white text-center w-[100%] h-[41px] absolute bottom-0 transform translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                    Add to Cart
                  </button>
                </div>
                <h1 className="text-base font-medium">HAVIT HV-G92 Gamepad</h1>
                <div className="flex items-center gap-3">
                  <p className="text-[#DB4444] text-base font-medium">$120</p>
                  <p className="text-gray-400 text-base line-through font-medium">
                    $160
                  </p>
                </div>
                <StarRating />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="md:w-[270px] h-[350px] flex flex-col md:items-start items-center gap-2">
                <div className="w-[270px] h-[250px] relative bg-[#F5F5F5] overflow-hidden group flex">
                  <Image
                    className="m-auto pt-9 w-[191px] h-[101px]"
                    src="/images/Keyboard.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                  <p className="w-[55px] h-[26px] bg-[#DB4444] rounded-md absolute top-2 left-2 text-white text-[12px] flex items-center justify-center">
                    -40
                  </p>
                  <i className="bx bx-heart absolute top-2 right-3 bg-white text-base w-[34px] h-[34px] rounded-full text-center pt-1"></i>
                  <button className="bg-black text-white text-center w-[100%] h-[41px] absolute bottom-0 transform translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                    Add to Cart
                  </button>
                </div>
                <h1 className="text-base font-medium">AK-900 Wired Keyboard</h1>
                <div className="flex items-center gap-3">
                  <p className="text-[#DB4444] text-base font-medium">$960</p>
                  <p className="text-gray-400 text-base line-through font-medium">
                    $1160
                  </p>
                </div>
                <StarRating />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="md:w-[270px] h-[350px] flex flex-col md:items-start items-center gap-2">
                <div className="w-[270px] h-[250px] relative bg-[#F5F5F5] overflow-hidden group flex">
                  <Image
                    className="m-auto pt-9 w-[190px] h-[180px]"
                    src="/images/LCD.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                  <p className="w-[55px] h-[26px] bg-[#DB4444] rounded-md absolute top-2 left-2 text-white text-[12px] flex items-center justify-center">
                    -40
                  </p>
                  <i className="bx bx-heart absolute top-2 right-3 bg-white text-base w-[34px] h-[34px] rounded-full text-center pt-1"></i>
                  <button className="bg-black text-white text-center w-[100%] h-[41px] absolute bottom-0 transform translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                    Add to Cart
                  </button>
                </div>
                <h1 className="text-base font-medium">
                  IPS LCD Gaming Monitor
                </h1>
                <div className="flex items-center gap-3">
                  <p className="text-[#DB4444] text-base font-medium">$370</p>
                  <p className="text-gray-400 text-base line-through font-medium">
                    $400
                  </p>
                </div>
                <StarRating />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="md:w-[270px] h-[350px] flex flex-col md:items-start items-center gap-2">
                <div className="w-[270px] h-[250px] relative bg-[#F5F5F5] overflow-hidden group flex">
                  <Image
                    className="m-auto pt-9 w-[107px] h-[180px]"
                    src="/images/Chair.png"
                    alt=""
                    width={100}
                height={100}
                  />
                  <p className="w-[55px] h-[26px] bg-[#DB4444] rounded-md absolute top-2 left-2 text-white text-[12px] flex items-center justify-center">
                    -40
                  </p>
                  <i className="bx bx-heart absolute top-2 right-3 bg-white text-base w-[34px] h-[34px] rounded-full text-center pt-1"></i>
                  <button className="bg-black text-white text-center w-[100%] h-[41px] absolute bottom-0 transform translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                    Add to Cart
                  </button>
                </div>
                <h1 className="text-base font-medium">
                  S-Series Comfort Chair{" "}
                </h1>
                <div className="flex items-center gap-3">
                  <p className="text-[#DB4444] text-base font-medium">$375</p>
                  <p className="text-gray-400 text-base line-through font-medium">
                    $400
                  </p>
                </div>
                <StarRating />
              </div>
            </SwiperSlide>
          </Swiper>

        <div className="w-full flex justify-center">
          <button className="w-[234px] h-[56px] bg-[#DB4444] rounded-md text-white text-base">
            {" "}
            View All Products
          </button>
        </div>
      </section>

      <section className="flex flex-col gap-1 justify-center md:w-[1170px] md:h-[313px] m-auto my-24">
        <div className="w-full mb-6">
          <div className="flex md:justify-start justify-center items-center w-full gap-5">
            <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-md hidden md:block"></div>
            <p className="text-[#DB4444] text-base md:font-medium font-bold">
              Categories
            </p>
          </div>
          <div className="font-poppins w-full flex md:justify-between text-center mt-3">
            <div className="md:w-[75%] w-full flex md:justify-between justify-center items-center md:text-[36px] text-3xl text-center font-semibold tracking-wider text-black">
              <h1>Browse By Category</h1>
            </div>
            <div className="md:flex justify-center gap-3 hidden">
              <Image
                className="w-[46px] h-[46px]"
                src="/images/left_Arrow.png"
                alt="Left Arrow"
                width={100}
                height={100}
              />
              <Image
                className="w-[46px] h-[46px]"
                src="/images/right_Arrow.png"
                alt="Right Arrow"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
          

        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            // autoplay={{
            //   delay: 1500,
            //   disableOnInteraction: true,
            //   pauseOnMouseEnter: true,
            // }}
            breakpoints={{
              768: { slidesPerView: 6 },
            }}
            // navigation
            // pagination={{ clickable: true }}
            className="w-full md:h-[145px] flex md:flex-row flex-col items-center justify-between md:gap-0 gap-4"
          >      
          <SwiperSlide>  
          <div className="md:w-[170px] w-52 md:h-full h-40 flex flex-col justify-center place-self-center items-center gap-5 rounded-md border-2 border-gray-300 hover:bg-[#DB4444] hover:text-white group text-base ">
            <Image
              src="/images/Category-CellPhone.png"
              alt="Category CellPhone"
              className="filter group-hover:invert group-hover:brightness-0"
              width={56}
              height={0}
            />
            <p>Phones</p>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="md:w-[170px] w-52 md:h-full h-40 flex flex-col justify-center place-self-center items-center gap-5 rounded-md border-2 border-gray-300 hover:bg-[#DB4444] hover:text-white group text-base pb-[24px] pt-[25px]">
            <Image
              src="/images/Category-Computer.png"
              alt="Category CellPhone"
              className="filter group-hover:invert group-hover:brightness-0"
              width={56}
              height={0}
            />
            <p>Computer</p>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="md:w-[170px] w-52 md:h-full h-40 flex flex-col justify-center place-self-center items-center gap-5 rounded-md border-2 border-gray-300 hover:bg-[#DB4444] hover:text-white group text-base ">
            <Image
              src="/images/Category-Gamepad.png"
              alt="Category CellPhone"
              className="filter group-hover:invert group-hover:brightness-0"
              width={56}
              height={0}
            />
            <p>Gaming</p>
          </div>
          </SwiperSlide>
          
          <SwiperSlide>
          <div className="md:w-[170px] w-52 md:h-full h-40 flex flex-col justify-center place-self-center items-center gap-5 rounded-md border-2 border-gray-300 hover:bg-[#DB4444] hover:text-white group text-base ">
            <Image
              src="/images/Category-Headphone.png"
              alt="Category CellPhone"
              className="filter group-hover:invert group-hover:brightness-0"
              width={56}
              height={0}
            />
            <p>HeadPhones</p>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="md:w-[170px] w-52 md:h-full h-40 flex flex-col justify-center place-self-center items-center gap-5 rounded-md border-2 border-gray-300 hover:bg-[#DB4444] hover:text-white group text-base ">
            <Image
              src="/images/Category-SmartWatch.png"
              alt="Category CellPhone"
              className="filter group-hover:invert group-hover:brightness-0"
              width={56}
              height={0}
            />
            <p>SmartWatch</p>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="md:w-[170px] w-52 md:h-full h-40 flex flex-col justify-center place-self-center items-center gap-5 rounded-md border-2 border-gray-300 hover:bg-[#DB4444] hover:text-white group text-base ">
            <Image
              src="/images/Category-SmartWatch.png"
              alt="Category CellPhone"
              className="filter group-hover:invert group-hover:brightness-0"
              width={56}
              height={0}
            />
            <p>SmartWatch</p>
          </div>
          </SwiperSlide>

          </Swiper>
      </section>

      <section className="flex flex-col gap-12 justify-center md:w-[1170px] h-[518px] m-auto my-24">
        <div className="w-full h-[108px]">
          <div className="flex md:justify-start justify-center items-center w-full gap-5">
            <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-md hidden md:block"></div>
            <p className="text-[#DB4444] text-base font-medium">This Month</p>
          </div>
          <div className="font-poppins w-full flex md:flex-row flex-col justify-between mt-6 gap-3 md:gap-0">
            <div className="md:w-[75%] w-full flex md:justify-between justify-center items-center md:text-[36px] text-3xl text-center font-semibold tracking-wider text-black">
              <h1>Best Selling Products</h1>
            </div>
            <div className="w-full flex md:justify-end justify-center">
              <button className="w-[159px] h-[56px] bg-[#DB4444] text-base rounded-md text-white">
                View All
              </button>
            </div>
          </div>
        </div>
        
        
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            // autoplay={{
            //   delay: 1500,
            //   disableOnInteraction: true,
            //   pauseOnMouseEnter: true,
            // }}
            breakpoints={{
              768: { slidesPerView: 4 },
            }}
            // navigation
            // pagination={{ clickable: true }}
            className="w-full md:h-[350px] h-auto flex md:flex-row flex-col justify-between md:items-start items-center"
          >
            <SwiperSlide>
          <div className="md:w-[270px] h-[350px] flex flex-col md:items-start items-center gap-2">
            <div className="w-[270px] h-[250px] relative bg-[#F5F5F5] overflow-hidden group flex">
              <Image
                className="m-auto pt-9 w-[140px] h-[180px]"
                src="/images/pink_dress.png"
                alt="The north Coat"
                width={100}
                height={100}
              />
              <i className="bx bx-heart absolute top-2 right-3 bg-white text-base w-[34px] h-[34px] rounded-full text-center pt-1"></i>
              <button className="bg-black text-white text-center w-[100%] h-[41px] absolute bottom-0 transform translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                Add to Cart
              </button>
            </div>
            <h1 className="text-base medium">The north coat</h1>
            <div className="flex items-center gap-3">
              <p className="text-[#DB4444] text-base">$260</p>
              <p className="text-gray-400 text-base line-through">$360</p>
            </div>
            <StarRating />
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="md:w-[270px] h-[350px] flex flex-col md:items-start items-center gap-2">
            <div className="w-[270px] h-[250px] relative bg-[#F5F5F5] overflow-hidden group flex">
              <Image
                className="m-auto pt-9 w-[178px] h-[129px]"
                src="/images/purse.png"
                alt="Gucci duffle bag"
                width={100}
                height={100}
              />
              <i className="bx bx-heart absolute top-2 right-3 bg-white text-base w-[34px] h-[34px] rounded-full text-center pt-1"></i>
              <button className="bg-black text-white text-center w-[100%] h-[41px] absolute bottom-0 transform translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                Add to Cart
              </button>
            </div>
            <h1 className="text-base medium">Gucci duffle bag</h1>
            <div className="flex items-center gap-3">
              <p className="text-[#DB4444] text-base">$960</p>
              <p className="text-gray-400 text-base line-through">$1160</p>
            </div>
            <StarRating />
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="md:w-[270px] h-[350px] flex flex-col md:items-start items-center gap-2">
            <div className="w-[270px] h-[250px] relative bg-[#F5F5F5] overflow-hidden group flex">
              <Image
                className="m-auto pt-9 w-[191px] h-[130px]"
                src="/images/gamingHeadphone.png"
                alt="CPU Cooler"
                width={100}
                height={100}
              />
              <i className="bx bx-heart absolute top-2 right-3 bg-white text-base w-[34px] h-[34px] rounded-full text-center pt-1"></i>
              <button className="bg-black text-white text-center w-[100%] h-[41px] absolute bottom-0 transform translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                Add to Cart
              </button>
            </div>
            <h1 className="text-base medium">RGB liquid CPU Cooler</h1>
            <div className="flex items-center gap-3">
              <p className="text-[#DB4444] text-base">$160</p>
              <p className="text-gray-400 text-base line-through">$170</p>
            </div>
            <StarRating />
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="md:w-[270px] h-[350px] flex flex-col md:items-start items-center gap-2">
            <div className="w-[270px] h-[250px] relative bg-[#F5F5F5] overflow-hidden group flex">
              <Image
                className="m-auto pt-9 w-[140px] h-[180px]"
                src="/images/table.png"
                alt=""
                width={100}
                height={100}
              />
              <i className="bx bx-heart absolute top-2 right-3 bg-white text-base w-[34px] h-[34px] rounded-full text-center pt-1"></i>
              <button className="bg-black text-white text-center w-[100%] h-[41px] absolute bottom-0 transform translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                Add to Cart
              </button>
            </div>
            <h1 className="text-base medium">Small BookSelf</h1>
            <p className="text-[#DB4444] text-base font-medium">$360</p>
            <StarRating />
          </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="flex flex-col gap-5 justify-center md:w-[1170px] md:h-[500px] border-b-2 md:m-auto my-24">
        <div className="md:p-16 p-4 bg-black w-full h-full flex flex-col md:gap-0 gap-3 justify-center">
          <div className="flex md:justify-start justify-center items-center">
            <h5 className="text-base text-[#00FF66]">Categories</h5>
          </div>
          <div className="w-full flex md:flex-row flex-col">
            <div className="flex md:w-[443px] flex-col md:gap-0 gap-4 justify-around">
              <h1 className="md:text-[48px] md:text-left text-3xl text-center font-semibold text-white">
                Enhance Your Music Experience
              </h1>
              <div className="flex md:justify-start justify-center md:gap-8 gap-6">
                <div className="w-[62px] h-[62px] bg-white rounded-full flex flex-col justify-center items-center">
                  <h6 className="text-base font-bold">23</h6>
                  <p className="text-[11px]">Hours</p>
                </div>
                <div className="w-[62px] h-[62px] bg-white rounded-full flex flex-col justify-center items-center">
                  <h6 className="text-base font-bold">05</h6>
                  <p className="text-xs">Days</p>
                </div>
                <div className="w-[62px] h-[62px] bg-white rounded-full flex flex-col justify-center items-center">
                  <h6 className="text-base font-bold">59</h6>
                  <p className="text-xs">Minutes</p>
                </div>
                <div className="w-[62px] h-[62px] bg-white rounded-full flex flex-col justify-center items-center">
                  <h6 className="text-base font-bold">35</h6>
                  <p className="text-xs">Seconds</p>
                </div>
              </div>
              <div className="md:m-0 m-auto">
                <button className="w-[171px] h-[56px] rounded-md bg-[#00FF66] text-base font-medium text-white">
                  Buy Now!
                </button>
              </div>
            </div>

            <div className="relative flex md:w-[600px] md:h-[420px] justify-center mt-10">
              <div className="absolute w-[600] h-[420px] inset-0 bg-gradient-to-t from-slate-100 to-white blur-3xl rounded-lg opacity-10"></div>
              <div className="relative z-10 shadow-lg">
                <Image
                  src="/images/jbl-box.png"
                  alt="JBL"
                  height={330}
                  width={568}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-12 justify-center md:w-[1170px] md:h-auto m-auto md:mt-20">
        <div className="w-full h-[108px]">
          <div className="flex md:justify-start justify-center items-center w-full gap-5">
            <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-md hidden md:block"></div>
            <p className="text-[#DB4444] text-base font-medium">Our Products</p>
          </div>
          <div className="font-poppins w-full flex md:flex-row flex-col justify-between mt-6">
            <div className="md:w-[75%] w-full flex md:justify-between justify-center items-center md:text-[36px] text-3xl text-center font-semibold tracking-wider text-black">
              <h1>Explore Our Products</h1>
            </div>
            <div className="w-full flex md:justify-end justify-center">
              <button className="w-[159px] h-[56px] bg-[#DB4444] text-base rounded-md text-white">
                View All
              </button>
            </div>
          </div>
        </div>
        

        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            // autoplay={{
            //   delay: 1500,
            //   disableOnInteraction: true,
            //   pauseOnMouseEnter: true,
            // }}
            breakpoints={{
              768: { slidesPerView: 4 },
            }}
            // navigation
            // pagination={{ clickable: true }}
            className="w-full h-auto grid grid-cols-[270px 270px 270px 270px] gap-10"
          >
          <SwiperSlide>
          <div className="md:w-[270px] h-[350px] flex flex-col md:items-start items-center gap-2">
            <div className="w-[270px] h-[250px] relative bg-[#F5F5F5] overflow-hidden group flex">
              <Image
                className="m-auto h-[180px]"
                src="/images/dog_food.png"
                alt="Breed Dry Dog Food"
                width={100}
                height={100}
                />
              <i className="bx bx-heart absolute top-2 right-3 bg-white text-base w-[34px] h-[34px] rounded-full text-center pt-1"></i>
              <button className="bg-black text-white text-center w-[100%] h-[41px] absolute bottom-0 transform translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                Add to Cart
              </button>
            </div>
            <h1 className="text-base medium">Breed Dry Dog Food</h1>
            <p className="text-[#DB4444] text-base">$100</p>
            <StarRating />
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="md:w-[270px] h-[350px] flex flex-col md:items-start items-center gap-2">
            <div className="w-[270px] h-[250px] relative bg-[#F5F5F5] overflow-hidden group flex">
              <Image
                className="m-auto pt-9 h-[180px]"
                src="/images/camera.png"
                alt="CANON EOS DSLR Camera"
                width={100}
                height={100}
              />
              <i className="bx bx-heart absolute top-2 right-3 bg-white text-base w-[34px] h-[34px] rounded-full text-center pt-1"></i>
              <button className="bg-black text-white text-center w-[100%] h-[41px] absolute bottom-0 transform translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                Add to Cart
              </button>
            </div>
            <h1 className="text-base medium">CANON EOS DSLR Camera</h1>
            <p className="text-[#DB4444] text-base">$360</p>
            <StarRating />
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="md:w-[270px] h-[350px] flex flex-col md:items-start items-center gap-2">
            <div className="w-[270px] h-[250px] relative bg-[#F5F5F5] overflow-hidden group flex">
              <Image
                className="m-auto pt-9 h-[180px]"
                src="/images/laptop.png"
                alt="ASUS FHD Gaming Laptop"
                width={100}
                height={100}
              />
              <i className="bx bx-heart absolute top-2 right-3 bg-white text-base w-[34px] h-[34px] rounded-full text-center pt-1"></i>
              <button className="bg-black text-white text-center w-[100%] h-[41px] absolute bottom-0 transform translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                Add to Cart
              </button>
            </div>
            <h1 className="text-base medium">ASUS FHD Gaming Laptop</h1>
            <p className="text-[#DB4444] text-base">$700</p>
            <StarRating />
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="md:w-[270px] h-[350px] flex flex-col md:items-start items-center gap-2">
            <div className="w-[270px] h-[250px] relative bg-[#F5F5F5] overflow-hidden group flex">
              <Image
                className="m-auto pt-9 h-[180px]"
                src="/images/cream.png"
                alt="Curology Product Set "
                width={100}
                height={100}
              />
              <i className="bx bx-heart absolute top-2 right-3 bg-white text-base w-[34px] h-[34px] rounded-full text-center pt-1"></i>
              <button className="bg-black text-white text-center w-[100%] h-[41px] absolute bottom-0 transform translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                Add to Cart
              </button>
            </div>
            <h1 className="text-base medium">Curology Product Set </h1>
            <p className="text-[#DB4444] text-base">$500</p>
            <StarRating />
          </div>
          </SwiperSlide>
          </Swiper>


          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            // autoplay={{
            //   delay: 1500,
            //   disableOnInteraction: true,
            //   pauseOnMouseEnter: true,
            // }}
            breakpoints={{
              768: { slidesPerView: 4 },
            }}
            // navigation
            // pagination={{ clickable: true }}
            className="w-full grid grid-cols-[270px 270px 270px 270px] gap-10"
            >
          <SwiperSlide>
          <div className="md:w-[270px] h-[350px] flex flex-col md:items-start items-center gap-2">
            <div className="w-[270px] h-[250px] relative bg-[#F5F5F5] overflow-hidden group flex">
              <Image
                className="m-auto pt-9 h-[180px]"
                src="/images/car.png"
                alt="Kids Electric Car"
                width={100}
                height={100}
              />
              <i className="bx bx-heart absolute top-2 right-3 bg-white text-base w-[34px] h-[34px] rounded-full text-center pt-1"></i>
              <button className="bg-black text-white text-center w-[100%] h-[41px] absolute bottom-0 transform translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                Add to Cart
              </button>
            </div>
            <h1 className="text-base medium">Kids Electric Car</h1>
            <p className="text-[#DB4444] text-base">$960</p>
            <StarRating />
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="md:w-[270px] h-[350px] flex flex-col md:items-start items-center gap-2">
            <div className="w-[270px] h-[250px] relative bg-[#F5F5F5] overflow-hidden group flex">
              <Image
                className="m-auto pt-9 h-[180px]"
                src="/images/shoe.png"
                alt="Jr. Zoom Soccer Cleats"
                width={100}
                height={100}
                />
              <i className="bx bx-heart absolute top-2 right-3 bg-white text-base w-[34px] h-[34px] rounded-full text-center pt-1"></i>
              <button className="bg-black text-white text-center w-[100%] h-[41px] absolute bottom-0 transform translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                Add to Cart
              </button>
            </div>
            <h1 className="text-base medium">Jr. Zoom Soccer Cleats</h1>
            <p className="text-[#DB4444] text-base">$1160</p>
            <StarRating />
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="md:w-[270px] h-[350px] flex flex-col md:items-start items-center gap-2">
            <div className="w-[270px] h-[250px] relative bg-[#F5F5F5] overflow-hidden group flex">
              <Image
                className="m-auto pt-9 h-[180px]"
                src="/images/gampad.png"
                alt="Jr. Zoom Soccer Cleats"
                width={100}
                height={100}
                />
              <i className="bx bx-heart absolute top-2 right-3 bg-white text-base w-[34px] h-[34px] rounded-full text-center pt-1"></i>
              <button className="bg-black text-white text-center w-[100%] h-[41px] absolute bottom-0 transform translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                Add to Cart
              </button>
            </div>
            <h1 className="text-base medium">GP11 Shooter USB Gamepad</h1>
            <p className="text-[#DB4444] text-base">$660</p>
            <StarRating />
          </div>
          </SwiperSlide>
          
          <SwiperSlide>
          <div className="md:w-[270px] h-[350px] flex flex-col md:items-start items-center gap-2">
            <div className="w-[270px] h-[250px] relative bg-[#F5F5F5] overflow-hidden group flex">
              <Image
                className="m-auto pt-9 h-[180px]"
                src="/images/jacket.png"
                alt="Quilted Satin Jacket"
                width={100}
                height={100}
                />
              <i className="bx bx-heart absolute top-2 right-3 bg-white text-base w-[34px] h-[34px] rounded-full text-center pt-1"></i>
              <button className="bg-black text-white text-center w-[100%] h-[41px] absolute bottom-0 transform translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                Add to Cart
              </button>
            </div>
            <h1 className="text-base medium">Quilted Satin Jacket</h1>
            <p className="text-[#DB4444] text-base font-medium">$660</p>
            <StarRating />
          </div>
          </SwiperSlide>
        </Swiper>
        <div className="w-full flex justify-center">
          <button className="w-[234px] h-[56px] bg-[#DB4444] rounded-md text-white text-base">
            {" "}
            View All Products
          </button>
        </div>
      </section>

      <section className="flex flex-col gap-12 justify-center md:w-[1170px] md:h-[768px] m-auto mt-28">
        <div className="w-full md:h-[108px]">
          <div className="flex md:justify-start justify-center items-center w-full gap-5">
            <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-md hidden md:block"></div>
            <p className="text-[#DB4444] text-base font-medium">Featured</p>
          </div>
          <div className="font-poppins w-full flex md:flex-row flex-col justify-between mt-6">
            <div className="md:w-[75%] w-full flex md:justify-between justify-center items-center md:text-[36px] text-3xl text-center font-semibold tracking-wider text-black">
              <h1>New Arrival</h1>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:grid-rows-2 gap-x-6 gap-y-8 w-full md:min-h-[600px] ">
          <div className="md:h-[600px] rounded-md md:w-[570px] bg-black row-span-2 grid justify-center items-end relative">
            <Image
              src="/images/ps5.png"
              alt="ps5"
              height={511}
              width={511}
            ></Image>
            <div className="text-white absolute md:bottom-8 bottom-0 left-8 flex flex-col md:gap-4 gap-2 items-start w-[242px] h-[122px]">
              <h1 className="text-2xl font-medium">PlayStation 5</h1>
              <p className="text-sm">
                Black and White version of the PS5 coming out on sale.
              </p>
              <button className="underline text-base font-medium">
                Shop Now
              </button>
            </div>
          </div>

          <div className="bg-[#0D0D0D] grid justify-end relative items-end rounded-md">
            <Image
              src="/images/lady.png"
              alt="lady"
              width={429}
              height={286}
            ></Image>
            <div className="text-white absolute md:bottom-8 bottom-6 left-8 flex flex-col md:gap-4 gap-2 items-start w-[242px] h-[122px]">
              <h1 className="text-2xl font-medium">Women&apos;s Collections</h1>
              <p className="text-sm">
                Featured woman collections that give you another vibe.
              </p>
              <button className="underline text-base font-medium">
                Shop Now
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-x-6 gap-6">
            <div className="bg-[#363738] rounded-md relative grid justify-center items-center">
              <Image
                src="/images/speaker.png"
                alt="Speaker"
                width={190}
                height={221}
              ></Image>
              <div className="text-white absolute bottom-8 left-8 flex flex-col gap-2 items-start w-[191px] h-[85px]">
                <h1 className="text-2xl font-medium">Speakers</h1>
                <p className="text-sm">Amazon wireless speakers</p>
                <button className="underline text-base font-medium">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="bg-[#363738] relative rounded-md grid justify-center items-center">
              <Image
                src="/images/perfume.png"
                alt="Speaker"
                width={201}
                height={203}
              ></Image>
              <div className="text-white absolute bottom-8 left-8 flex flex-col gap-2 items-start w-[191px] h-[85px]">
                <h1 className="text-2xl font-medium">Perfume</h1>
                <p className="text-sm">GUCCI INTENSE OUD EDP</p>
                <button className="underline text-base font-medium">
                  Shop Now
                </button>
              </div>
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
    </>
  );
}
