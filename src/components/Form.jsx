import React from "react";
import memesData from "../memesData.jsx";

function Form() {
const [memeImage, setMemeImage] = React.useState("");

function getRandomImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

return (
    <div className="flex flex-row justify-around pt-8">
  <div className="w-1/3">
    <div className="flex flex-col lg:flex-row gap-2 pb-6">
      <input
        className="w-full rounded-md py-1 pl-3"
        type="text"
        id="input1"
        placeholder="Top text"
      />
      <input
        className="w-full rounded-md py-1 pl-3"
        type="text"
        id="input2"
        placeholder="Bottom text"
      />
    </div>
    <div className="text-center bg-violet hover:bg-[#5C469C] rounded-lg">
      <button
        onClick={getRandomImage}
        className="py-2 text-white text-md font-semibold"
      > Get a new image
      </button>
    </div>
  </div>
  <div className="w-1/2 flex justify-center items-center">
    <img
      className="max-h-[500px] max-w-[800px]"
      src={memeImage}
      alt=""
    />
  </div>
</div>

  );
}

export default Form;
