export default function Section4() {
  const stars = [1, 2, 3, 4, 5];
  const cards = [
    {
      image: "/images/image7.png",
      name: "Christine",
      review: "Absolutely stunning!",
      description:
        "Just got my Pixory photobook and it’s absolutely stunning! It looks so stylish on my coffee table and really complements my decor. I’ve been showing it off to everyone and have already recommended it to my friends—it’s a must-have for anyone who loves beautiful keepsakes!",
    },
    {
      image: "/images/image8.png",
      name: "Ella S",
      review: "The perfect way to relive my travels",
      description:
        "I’m obsessed with my photobooks from Pixory! They’re the perfect way to relive my travels and I already can’t wait to make another after my next trip. The quality is stunning and I love how I could fully customise the design to fit my aesthetic. It’s the perfect addition to my coffee table!",
    },
    {
      image: "/images/image9.png",
      name: "Sienna",
      review: "The process was super easy",
      description:
        "So excited to share my Pixory photobook from my last vacation! 🏝️🌊 It turned out even better than I imagined. The process was super easy and the book is absolutely gorgeous. Highly recommend for any travel lover!",
    },
  ];
  return (
    <div className="bg-gray-100 py-[50px] flex flex-col justify-center items-center text-center pb-[100px]">
      <div className="flex border w-max border-gray-300 rounded-full px-5 py-3 items-center">
        <div className="flex mr-[15px]">
          {stars.map((star) => (
            <svg
              key={star}
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.8203 9.43593L15.2969 12.5109L16.3524 17.0891C16.4082 17.3284 16.3923 17.5789 16.3065 17.8092C16.2208 18.0395 16.0691 18.2395 15.8703 18.384C15.6716 18.5286 15.4346 18.6113 15.1891 18.622C14.9436 18.6326 14.7004 18.5706 14.4899 18.4437L10.4969 16.0219L6.51252 18.4437C6.30202 18.5706 6.05881 18.6326 5.81328 18.622C5.56775 18.6113 5.33079 18.5286 5.13204 18.384C4.9333 18.2395 4.78157 18.0395 4.69584 17.8092C4.6101 17.5789 4.59416 17.3284 4.65002 17.0891L5.70392 12.5156L2.1797 9.43593C1.99331 9.27517 1.85852 9.06295 1.79225 8.82589C1.72598 8.58883 1.73117 8.33748 1.80718 8.10336C1.88319 7.86924 2.02663 7.66278 2.21952 7.50985C2.4124 7.35693 2.64614 7.26436 2.89142 7.24375L7.53674 6.8414L9.35002 2.5164C9.44471 2.28946 9.60443 2.09561 9.80907 1.95926C10.0137 1.82291 10.2541 1.75015 10.5 1.75015C10.7459 1.75015 10.9863 1.82291 11.191 1.95926C11.3956 2.09561 11.5553 2.28946 11.65 2.5164L13.4688 6.8414L18.1125 7.24375C18.3578 7.26436 18.5915 7.35693 18.7844 7.50985C18.9773 7.66278 19.1207 7.86924 19.1968 8.10336C19.2728 8.33748 19.278 8.58883 19.2117 8.82589C19.1454 9.06295 19.0106 9.27517 18.8242 9.43593H18.8203Z"
                fill="black"
              ></path>
            </svg>
          ))}
        </div>
        <p className="text-[15px]">Rated 4.4/5 based on +1475 reviews</p>
      </div>
      <h1 className="font-glitz font-extrabold text-[40px] leading-[50px] mt-[20px] mb-[30px]">
        loved by thousands <br />
        of pixory fans!
      </h1>
      <div className="flex gap-4">
        {cards.map((card, index) => (
          <div className="bg-gray-200" key={index}>
            <div className="w-[400px]">
              <img className="bg-cover" src={card.image} alt={card.name} />
            </div>
            <div className="px-[20px]">
              <div className="flex justify-center py-[15px]">
                {stars.map((star) => (
                  <svg
                    key={star}
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.8203 9.43593L15.2969 12.5109L16.3524 17.0891C16.4082 17.3284 16.3923 17.5789 16.3065 17.8092C16.2208 18.0395 16.0691 18.2395 15.8703 18.384C15.6716 18.5286 15.4346 18.6113 15.1891 18.622C14.9436 18.6326 14.7004 18.5706 14.4899 18.4437L10.4969 16.0219L6.51252 18.4437C6.30202 18.5706 6.05881 18.6326 5.81328 18.622C5.56775 18.6113 5.33079 18.5286 5.13204 18.384C4.9333 18.2395 4.78157 18.0395 4.69584 17.8092C4.6101 17.5789 4.59416 17.3284 4.65002 17.0891L5.70392 12.5156L2.1797 9.43593C1.99331 9.27517 1.85852 9.06295 1.79225 8.82589C1.72598 8.58883 1.73117 8.33748 1.80718 8.10336C1.88319 7.86924 2.02663 7.66278 2.21952 7.50985C2.4124 7.35693 2.64614 7.26436 2.89142 7.24375L7.53674 6.8414L9.35002 2.5164C9.44471 2.28946 9.60443 2.09561 9.80907 1.95926C10.0137 1.82291 10.2541 1.75015 10.5 1.75015C10.7459 1.75015 10.9863 1.82291 11.191 1.95926C11.3956 2.09561 11.5553 2.28946 11.65 2.5164L13.4688 6.8414L18.1125 7.24375C18.3578 7.26436 18.5915 7.35693 18.7844 7.50985C18.9773 7.66278 19.1207 7.86924 19.1968 8.10336C19.2728 8.33748 19.278 8.58883 19.2117 8.82589C19.1454 9.06295 19.0106 9.27517 18.8242 9.43593H18.8203Z"
                      fill="black"
                    ></path>
                  </svg>
                ))}
              </div>
              <h3 className="font-bold pb-[10px]">{card.review}</h3>
              <p className="text-[13px] leading-[23px]">{card.description}</p>
              <div className="flex items-center justify-center pt-[10px] pb-[20px]">
                <span className="w-[20px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="_icon_15m1m_49"
                  >
                    <path
                      fillrule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      cliprule="evenodd"
                    ></path>
                    <path
                      fillrule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      cliprule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h3 className="font-bold text-[13px]">{card.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
