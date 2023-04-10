import React, { useState } from "react";

const BTcarosuel = (props) => {
  const [actualPosition, setActualPosition] = useState(0);
  let images = [{}];

  images = props.items.map(
    (i, index) => (images[index] = { id: index, link: i })
  );
  //console.log(images);

  const setCurrentPosition = (key) => {
    setActualPosition(key);
  };

  const setNext = () => {
    let nextPosition = actualPosition + 1;
    if (nextPosition > images.length - 1) {
      nextPosition = 0;
    }
    setActualPosition(nextPosition);
  };

  const setBack = () => {
    let backPosition = actualPosition - 1;
    if (backPosition < 0) {
      backPosition = images.length - 1;
    }
    setActualPosition(backPosition);
  };

  return (
    <section className="w-full flex-col justify-center">
      <div className="flex flex-col w-full items-center">
        <div className="h-64 w-10/12 flex justify-center items-center relative before:content-none before:h-full before:w-full before:absolute before:top-0 before:left-0 before:bg-black before:bg-opacity-50">
          <div className="absolute w-11/12 flex justify-between text-4xl text-white">
            <button
              onClick={setBack}
              className="w-14 h-14 cursor-pointer bg-slate-800 opacity-40 hover:opacity-80 focus:opacity-80 rounded-full p-1"
            >
              &#8656;
            </button>
            <button
              onClick={setNext}
              className="w-14 h-14 cursor-pointer bg-slate-800 opacity-40 hover:opacity-80 focus:opacity-80 rounded-full p-1"
            >
              &#8658;
            </button>
          </div>

          <div className="text-center w-full self-stretch flex overflow-hidden my-4">
            <div className="m-0 p-0 w-full self-stretch flex overflow-hidden">
              <img
                key={images[`${actualPosition}`].id}
                className="rounded-xl flex justify-center w-full h-full object-cover object-center transition-all ease-in duration-1000 "
                src={images[`${actualPosition}`].link}
                alt={images[`${actualPosition}`].id}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-6 w-full flex items-center justify-center">
        {images.map((imageObj) => {
          return (
            <button
              key={imageObj.id}
              className={`h-4 w-4 mx-2 rounded-full border ${
                actualPosition === imageObj.id ? "bg-rojo" : "bg-gray-200"
              } cursor-pointer transition-all ease-in-out`}
              onClick={(event) => setCurrentPosition(imageObj.id)}
            ></button>
          );
        })}
      </div>
    </section>
  );
};
export default BTcarosuel;
