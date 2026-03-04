import { useState } from "react";

export default function Section5() {
  const [accordionData, setAccordionData] = useState([
    {
      question: "How Do I Order?",
      answer:
        "Pixory allows you to create your own custom travel book in under 10 minutes! Simply select one of our beautiful travel destination template from the drop down box and click ‘Start My Design’. This will mean your chosen template will populate as the front and back cover in the editor. You’ll have 2 options; upload your photos and let AI create your photo book for you in a matter of seconds, or create your book manually. Both options allow you to fully customise your book in the editor. If you’d like to create your own template from scratch, simply select ‘Start From Scratch’.",
      isOpen: false,
    },
    {
      question: "How Long Will My Order Take To Arrive?",
      answer: `Hey, our shipping times are as follows:  <br/>
        Western Europe: 5-12 business days outside of peak seasons. <br/>
        Eastern Europe and the US: 10-12 business days outside of peak seasons. <br/>
        Rest of the world: 15 business days journey or possibly a bit more.`,
      isOpen: false,
    },
    {
      question: "Do You Ship Internationally?",
      answer: `Yes! Countries we currently ship to: Australia, Austria, Belgium, Bulgaria, Canada, Croatia, Czech Republic, Denmark, Finland, France, Germany, Greece, Hungary, Ireland, Italy, Mexico, Netherlands, New Zealand, Norway, Poland, Portugal, Romania, Singapore, Slovakia, Slovenia, Spain, Sweden, Switzerland, UAE, United Kingdom, United States.`,
      isOpen: false,
    },
    {
      question: "How Much Can I Customise My Design?",
      answer: `However you like! We purposefully wanted to give customers as much freedom as possible when it came to designing their travel books, whilst also making it easy with our templates and ai smart creator.
       <br/> <br/>
        All of our templates are fully customisable in the editor, and you can also choose to start from scratch, so no template will populate in the editor, only placeholders, which you can remove.
         <br/> <br/>
        You have full freedom when it comes to editing templates, colours, stickers, icons, text and much more in our super simple photobook editor.`,
      isOpen: false,
    },
    {
      question: "What Are The Dimensions Of Your Books?",
      answer: `A4 Hardcover  <br/>
        29.7 x 21.0 cm / 11.7 x 8.3 in Matte laminate, 2.5 mm thick
         <br/>
        Gloss Paper  <br/>
        Silk coated, 150 - 200gsm`,
      isOpen: false,
    },
    {
      question: "How Do I Get In Contact?",
      answer: `You can contact our support team support@pixoryofficial.com for any enquiries.
         <br/> <br/>
        We also have live chat available if you need any assistance during the process of creating and ordering your book. One of our product experts will happily guide you through the process.
         <br/> <br/>
        For collaboration enquiries please reach out to collab@pixoryofficial.com
         <br/> <br/>
        We are also responsive on all of our socials, so feel free to reach out there if you’d wish to!`,
      isOpen: false,
    },
    {
      question: "My order arrived incorrect what should I do?",
      answer: `If your order has arrived incorrect please head to Order Help and follow the instructions to contact our support team who will be able to help you.`,
      isOpen: false,
    },
    {
      question: "My order arrived damaged / defected what should I do?",
      answer: `We offer free reprints on damaged or defected books. Please head to our Refund Policy to learn more.`,
      isOpen: false,
    },
  ]);

  const barData = [
    {
      image: "/images/cargo.png",
      name: "Fast Shipping",
      description: `Get your photobooks delivered quickly and efficiently. We ensure
        prompt delivery so you can enjoy your memories without delay.`,
    },
    {
      image: "/images/satisfaction.png",
      name: "100% Satisfaction Guarantee",
      description: ` We stand by the quality of our photobooks. If you're not completely
            satisfied, we'll make it right with our satisfaction guarantee.`,
    },
    {
      image: "/images/empty-star.png",
      name: "100,000+ Happy Customers",
      description: ` Join our community of satisfied customers who have preserved their
            adventures with Pixory. Your memories are in good hands.`,
    },
  ];

  function toggleAccordion(index) {
    const updatedData = accordionData.map((item, i) => {
      if (i === index) {
        return { ...item, isOpen: !item.isOpen };
      }
      return item;
    });
    setAccordionData(updatedData);
  }

  return (
    <div className="pt-[30px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex px-[20px] items-center">
          <div className="w-[50%]">
            <h1 className="font-glitz font-extrabold text-[40px] leading-[50px] mt-[20px] mb-[30px]">
              faq
            </h1>
            <p className="leading-[27px] text-black text-[16px]">
              Find answers to commonly asked questions about <br />
              Pixory photobooks and the creation process.
            </p>
            <div className="mr-[50px]">
              {accordionData.map((item, index) => (
                <div key={index}>
                  <div
                    onClick={() => toggleAccordion(index)}
                    className="flex justify-between items-center px-6 py-3 border-b border-gray-400"
                  >
                    <h2 className="leading-[27px] text-black text-[16px]">
                      {item.question}
                    </h2>
                    <button className="text-[40px] font-bold">
                      {item.isOpen ? "-" : "+"}
                    </button>
                  </div>
                  {item.isOpen && (
                    <p
                      className="text-[15px] pt-[10px] px-6 py-3"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="w-[50%]">
            <img src="/images/image10.png" alt="" />
          </div>
        </div>
      </div>
      {/* --------------------------- section break ----------------- */}
      <div className=" bg-gray-100 py-[30px] my-[50px]">
        <div className="flex justify-around max-w-7xl mx-auto px-6">
          {barData.map((item, index) => (
            <div key={index} className="w-[27%] text-center">
              <div className="flex justify-center">
                <img src={item.image} alt="" />
              </div>
              <h3 className="font-bold pb-[10px] py-[10px]">{item.name}</h3>
              <p className="text-[15px] leading-[23px]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
