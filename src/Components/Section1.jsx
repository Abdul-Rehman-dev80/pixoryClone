export default function Section1() {
  return (
    <div>
      <h1 className="bg-gray-200 text-center md:py-8 py-[10px] font-glitz font-extrabold text-2xl">
        #1 rated in photo books
      </h1>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex md:flex-row flex-col-reverse my-[30px]">
          <div className="md:w-[41%] md:mx-[75px]">
            <h1 className="font-glitz font-extrabold text-[40px] leading-[50px] mt-[80px] mb-[30px]">
              preserve your <br /> adventures in <br /> stunning <br />{" "}
              photobooks
            </h1>
            <p className="leading-[33px] text-[19px] text-gray-500">
              Pixory's travel books capture the emotional essence of your
              journeys, transforming them into beautiful keepsakes that will
              last a lifetime. Each book is meticulously crafted to reflect the
              unique aesthetic and sentimental value of your experiences.
            </p>
            <div className="flex md:flex-row flex-col gap-2 mt-[40px] md:ml-[20px]">
              <button className="bg-black px-[60px] py-[23px] rounded-[10px] text-white font-extrabold text-sm hover:bg-white hover:text-black border border-2 border-black">
                Start My Design
              </button>
              <button className="bg-transparent text-black border border-2 border-black px-[60px] py-[23px] rounded-[10px] font-extrabold text-sm hover:bg-black hover:text-white">
                Read the reviews
              </button>
            </div>
          </div>
          <div className="md:w-[50%] md:mx-[30px]">
            <img src="/images/image1.png" alt="" />
          </div>
        </div>
        <div className="flex md:flex-row flex-col my-[30px] mt-[50px]">
          <div className="md:w-[50%] md:mx-[30px]">
            <img src="/images/image2.webp" alt="" />
          </div>
          <div className="md:w-[41%] md:mx-[75px]">
            <h1 className="font-glitz text-center font-extrabold text-[30px] leading-[50px] mt-[80px] mb-[30px]">
              discover the pixory advantage
            </h1>
            <div className="bg-gray-100">
              <div className="text-[15px] p-6 flex items-center gap-4 leading-[25px]">
                <img src="https://storage.googleapis.com/pbx-sw-digitalorca/media/c0/8d/ce/1722941364/Photos.png"></img>
                <span>
                  <p className="font-extrabold">
                    Emotional Essence and Keepsakes
                  </p>
                  <p>
                    Transform your cherished memories into lasting, beautiful
                    photobooks.
                  </p>
                </span>
              </div>
              <div className="text-[15px] p-6 flex items-center gap-4 leading-[25px]">
                <img src="https://storage.googleapis.com/pbx-sw-digitalorca/media/9c/6f/7a/1722941358/Open book.png" />{" "}
                <span>
                  <p className="font-extrabold">Meticulous Craftsmanship</p>
                  <p>
                    Each book is meticulously designed to reflect the unique
                    value of your experiences.
                  </p>
                </span>
              </div>
              <div className="text-[15px] p-6 flex items-center gap-4 leading-[25px]">
                <img src="https://storage.googleapis.com/pbx-sw-digitalorca/media/1d/7f/6b/1722941352/Stars.png"></img>
                <span>
                  <p className="font-extrabold">Highly Rated and Trusted</p>
                  <p>
                    Rated #1 in photo books with over 10,000 happy customers.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
