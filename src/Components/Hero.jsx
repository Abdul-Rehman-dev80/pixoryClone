export default function Hero() {
  const happyClients = [1, 2, 3, 4, 5];
  return (
    <div className="bg-[url('/images/bg.png')] bg-cover bg-center h-screen">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center gap-8 text-center mt-[125px]">
          <div className="flex items-center bg-white rounded-full px-6 py-3 font-extrabold">
            <div className="flex -space-x-2 mr-[10px]">
              {happyClients.map((client) => (
                <div key={client} className="bg-blue-500 w-[30px] h-[30px] rounded-full border border-2 border-gray-300"></div>
              ))}
            </div>
            <p className="text-sm font-extrabold">10,000+ Happy Customers</p>
          </div>
          <h1 className="text-white font-glitz font-extrabold text-5xl">
            preserve your adventures in <br /> beautiful photobooks
          </h1>
          <p className="text-white text-start text-lg mb-6">
            Pixory allows you to create lasting keepsakes of your cherished
            moments. Transform your <br /> experiences into unforgettable
            stories.
          </p>
          <div className="flex gap-2">
            <button className="bg-white px-[60px] py-[23px] rounded-[10px] font-extrabold text-sm hover:bg-black hover:text-white">
              Start My Design
            </button>
            <button className="bg-transparent text-white border border-2 border-gray-400 px-[60px] py-[23px] rounded-[10px] font-extrabold text-sm hover:bg-white hover:text-black hover:border-white">
              Read the reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
