import React, { useState } from "react";

const SmoothSlider = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);

  const onTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance && index < data.length - 1)
      setIndex(index + 1);
    if (distance < -minSwipeDistance && index > 0) setIndex(index - 1);
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 overflow-hidden">
      {/* 1. The Sliding Track */}
      <div
        className="flex transition-transform duration-700 cubic-bezier-[0.4, 0, 0.2, 1]"
        style={{ transform: `translateX(-${index * 100}%)` }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {data.map((item, i) => {
          const isActive = index === i;
          return (
            <div
              key={i}
              className="w-full shrink-0 px-2 transition-all duration-700"
            >
              <div>{item.content}</div>
            </div>
          );
        })}
      </div>

      {/* 3. Pixory-style Animated Dots */}
      <div className="flex justify-center items-center gap-2 mt-10">
        {data.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`transition-all duration-500 rounded-full 
              ${index === i ? "bg-black w-1.5 h-1.5" : "bg-gray-300 w-2 h-2"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SmoothSlider;
