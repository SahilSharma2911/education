"use client";
import React, { useRef, useState } from "react";
import { MdOutlinePlayCircle } from "react-icons/md";

const studentVideos = [
  { id: 1, src: "/videos/VID_20260501_234046_666_bsl.mp4" },
  { id: 2, src: "/videos/VID_20260501_233214_487_bsl.mp4" },
  { id: 3, src: "/videos/VID_20260501_233602_498_bsl.mp4" },
  { id: 4, src: "/videos/VID_20260401_031324_079_bsl.mp4" },
  { id: 5, src: "/videos/VID_20260501_232704_794_bsl.mp4" },
];

const VideoCard = ({ src }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="relative w-[21rem] h-[14.5rem] bg-[#D9D9D9] overflow-hidden flex justify-center items-center">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        preload="metadata"
        controls={playing}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
      {!playing && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex justify-center items-center bg-black/20 hover:bg-black/30 transition-colors"
          aria-label="Play video"
        >
          <MdOutlinePlayCircle className="text-[8rem] text-white drop-shadow-lg" />
        </button>
      )}
    </div>
  );
};

const StudentTestimonial = () => {
  return (
    <section className="mb-[3rem] md:mb-[4rem]">
      <div>
        <h2 className="text-center font-poppins text-[#1F94F3] font-bold text-[22px] md:text-[30px] leading-[33.6px] md:mb-2">
          STUDENTS VIDEOS
        </h2>
      </div>

      <div className="w-10/12 gap-9 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-[2.5rem] md:mt-[3rem] mb-[3rem] place-items-center">
        {studentVideos.map((video) => (
          <VideoCard key={video.id} src={video.src} />
        ))}
      </div>
    </section>
  );
};

export default StudentTestimonial;
