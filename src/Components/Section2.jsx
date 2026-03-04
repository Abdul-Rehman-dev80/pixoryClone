export default function Section2() {
  const cardContent = [
    {
      image: "/images/image3.png",
      title: "1. CHOOSE YOUR TEMPLATE",
      description:
        "You can fully customize every template in our easy to use editor online! No app needed!",
    },
    {
      image: "/images/image4.png",
      title: "2. UPLOAD YOUR PHOTOS",
      description:
        "We'll instantly organize your photos into a cohesive well-designed story. You can also use Auto Create for faster uploads!",
    },
    {
      image: "/images/image5.png",
      title: "3. CUSTOMIZE YOUR BOOK",
      description:
        "Easlily change fonts, backgrounds, colors, shapes, stickers and more to make it truly yours and memorable!",
    },
  ];
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center pt-[70px]">
          <h1 className="font-glitz w-[40%] font-extrabold text-[40px] ml-[100px] leading-[50px]">
            it's easy as 1, 2, 3 to create your photobook
          </h1>
          <p className="leading-[33px] w-[42%] text-[19px] text-gray-600">
            With Pixory, you can easily transform your holiday photos into a
            stunning photobook that captures the essence of your journey. Simply
            upload your images, customize the layout, and add captions to create
            a unique keepsake that will transport you back to those special
            moments.
          </p>
        </div>
        <div className="flex justify-around text-center py-[100px] px-[50px]">
          {cardContent.map((card, index) => (
            <div className="w-[400px]" key={index}>
              <img src={card.image} alt={card.title} />
              <h2 className="font-bold">{card.title}</h2>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
