export default function Hero() {
  return (
    <div className="bg-[url('/images/bg.png')] bg-cover bg-center">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center md:gap-8 gap-4 text-center md:w-[810px] px-[28px] md:mt-[125px] mt-[50px]">
          <div className="flex items-center bg-white rounded-full px-6 py-3 font-extrabold">
            <div className="flex -space-x-2 mr-[10px] ">
              <img src="/images/heroCardImg.png" alt="" />
            </div>
            <p className="text-sm font-extrabold">10,000+ Happy Customers</p>
          </div>
          <h1 className="text-white font-glitz font-extrabold md:text-5xl text-2xl">
            preserve your adventures in beautiful photobooks
          </h1>
          <p className="text-white text-start md:text-lg text-[15px] mb-6">
            Pixory allows you to create lasting keepsakes of your cherished
            moments. Transform your experiences into unforgettable stories.
          </p>
          <div className="md:flex md:flex-row flex-col gap-2 md:mb-30 mb-[40px]">
            <button className="bg-white px-[60px] py-[23px] md:mb-0 mb-[10px] w-full md:w-auto rounded-[10px] font-extrabold text-sm hover:bg-black hover:text-white">
              Start My Design
            </button>
            <button className="bg-transparent w-full md:w-auto text-white border border-2 border-gray-400 px-[60px] py-[23px] rounded-[10px] font-extrabold text-sm hover:bg-white hover:text-black hover:border-white">
              Read the reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
