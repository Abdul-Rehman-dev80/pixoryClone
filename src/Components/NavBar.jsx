export default function NavBar() {
  return (
    <div className="flex justify-around items-center border-b border-gray-300 py-3">
      <div className="w-[250px]">
        <ul className="flex justify-between items-center text-[13px] text-gray-500 font-bold">
          <li>Home</li>
          <li>Shop All</li>
          <li>About</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="font-bold text-xl w-[150px] mx-[100px]">
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="flex justify-around items-center w-[250px]">
        <div className="border border-black py-1.5 px-5 text-gray-600 font-bold">
          $ USD
        </div>
        <div>
          <svg
            data-v-e063cca5=""
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z"
              stroke="black"
              strokeWidth="2"
              strokeMiterlimit="10"
            ></path>
            <path
              d="M2.90625 20.2501C3.82775 18.6537 5.15328 17.328 6.74958 16.4062C8.34588 15.4845 10.1567 14.9993 12 14.9993C13.8433 14.9993 15.6541 15.4845 17.2504 16.4062C18.8467 17.328 20.1722 18.6537 21.0938 20.2501"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        <div>
          <svg
            data-v-9082203a=""
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.25 17.25H6.54375L3.92813 2.86875C3.89752 2.69653 3.80768 2.54042 3.67415 2.42743C3.54062 2.31444 3.37179 2.25168 3.19687 2.25H1.5"
              stroke="#111121"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M7.5 21C8.53553 21 9.375 20.1605 9.375 19.125C9.375 18.0895 8.53553 17.25 7.5 17.25C6.46447 17.25 5.625 18.0895 5.625 19.125C5.625 20.1605 6.46447 21 7.5 21Z"
              stroke="#111121"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M17.25 21C18.2855 21 19.125 20.1605 19.125 19.125C19.125 18.0895 18.2855 17.25 17.25 17.25C16.2145 17.25 15.375 18.0895 15.375 19.125C15.375 20.1605 16.2145 21 17.25 21Z"
              stroke="#111121"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M5.85938 13.5H17.6344C17.985 13.5011 18.3247 13.3785 18.5939 13.1539C18.8631 12.9293 19.0445 12.617 19.1063 12.2719L20.25 6H4.5"
              stroke="#111121"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
