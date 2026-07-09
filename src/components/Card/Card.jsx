"use client";
import React, { useRef, useState } from "react";
import {
  FaLinkedin,
  FaGooglePlusG,
  FaImage,
  FaQuoteLeft,
} from "react-icons/fa";
import { MdOutlinePlayCircle } from "react-icons/md";
import { videoPoster } from "@/lib/videos";

const Card = ({
  name,
  description,
  image,
  video,
  university,
  zoom,
  shade,
  linkedinUrl,
  googlePlusUrl,
  imageUrl,
}) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <div
      className={`slider-card mx-4 xl:mx-8 2xl:mx-10 ${shade} bg-[#122B6B] text-white rounded-xl p-6 relative shadow-lg transition-transform duration-300 ${
        zoom ? "lg:transform lg:scale-110" : ""
      }`}
    >
      <div>
        <FaQuoteLeft className="text-yellow-400 text-[2rem]" />
      </div>
      <div className="absolute top-4 left-4 text-yellow-400 text-3xl"></div>
      <p className="mt-10 text-sm">{description}</p>
      <div className="mt-4 flex justify-center space-x-8 text-yellow-400">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl cursor-pointer" />
        </a>
        <a href={googlePlusUrl} target="_blank" rel="noopener noreferrer">
          <FaGooglePlusG className="text-2xl cursor-pointer" />
        </a>
        <a href={imageUrl} target="_blank" rel="noopener noreferrer">
          <FaImage className="text-2xl cursor-pointer" />
        </a>
      </div>
      <div className="mt-4 flex flex-col items-center">
        {video ? (
          <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-white">
            <video
              ref={videoRef}
              src={video}
              poster={videoPoster(video)}
              className="w-full h-full object-cover"
              preload="none"
              playsInline
              controls={playing}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
            />
            {!playing && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
                aria-label={`Play ${name}'s testimonial`}
              >
                <MdOutlinePlayCircle className="text-4xl text-white drop-shadow" />
              </button>
            )}
          </div>
        ) : (
          <div className="w-20">
            <img
              className="rounded-full border-2 border-white"
              src={`/Images/${image}`}
              alt={name}
              width="80"
              height="80"
              loading="lazy"
              decoding="async"
            />
          </div>
        )}
        <h4 className="mt-4 text-lg font-bold text-yellow-400">{name}</h4>
        <p className="text-sm">{university}</p>
      </div>
    </div>
  );
};

export default Card;
