"use client";
import React, { useRef, useState, useCallback } from "react";
import { MdOutlinePlayCircle } from "react-icons/md";
import Reveal from "@/components/Reveal/Reveal";

const studentVideos = [
  { id: 1, src: "/videos/VID_20260501_234046_666_bsl.mp4" },
  { id: 2, src: "/videos/VID_20260501_233214_487_bsl.mp4" },
  { id: 3, src: "/videos/VID_20260501_233602_498_bsl.mp4" },
  { id: 4, src: "/videos/VID_20260401_031324_079_bsl.mp4" },
  { id: 5, src: "/videos/VID_20260501_232704_794_bsl.mp4" },
];

const VideoCard = ({ id, src, activeVideoId, onPlay, videoRef }) => {
  const isPlaying = activeVideoId === id;

  const handlePlayClick = () => {
    onPlay(id);
    videoRef.current?.play();
  };

  return (
    <div className="relative w-full aspect-video bg-[#D9D9D9] rounded-md">
      <video
        ref={videoRef}
        // `#t=0.1` makes the browser seek to the first frame and paint it as a
        // thumbnail, so the box shows the video preview instead of empty grey.
        src={`${src}#t=0.1`}
        className="w-full h-full object-contain"
        preload="metadata"
        playsInline
        controls={isPlaying}
        onPause={() => onPlay(null)}
        onEnded={() => onPlay(null)}
      />
      {!isPlaying && (
        <button
          onClick={handlePlayClick}
          className="absolute inset-0 flex justify-center items-center bg-black/20 hover:bg-black/30 transition-colors rounded-md"
          aria-label="Play video"
        >
          <MdOutlinePlayCircle className="text-[8rem] text-white drop-shadow-lg" />
        </button>
      )}
    </div>
  );
};

const StudentTestimonial = () => {
  const [activeVideoId, setActiveVideoId] = useState(null);
  // one stable ref per video, created once
  const videoRefs = useRef(studentVideos.map(() => React.createRef()));

  const handlePlay = useCallback((id) => {
    // pause every video that is not the one being activated
    videoRefs.current.forEach((ref, i) => {
      if (studentVideos[i].id !== id) {
        ref.current?.pause();
      }
    });
    setActiveVideoId(id);
  }, []);

  return (
    <section className="mb-[3rem] md:mb-[4rem]">
      <Reveal>
        <h2 className="text-center font-poppins text-[#1F94F3] font-bold text-[22px] md:text-[30px] leading-[33.6px] md:mb-2">
          STUDENTS VIDEOS
        </h2>
      </Reveal>

      <div className="w-10/12 gap-9 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-[2.5rem] md:mt-[3rem] mb-[3rem]">
        {studentVideos.map((video, index) => (
          <Reveal key={video.id} delay={(index % 3) * 100}>
            <VideoCard
              id={video.id}
              src={video.src}
              activeVideoId={activeVideoId}
              onPlay={handlePlay}
              videoRef={videoRefs.current[index]}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default StudentTestimonial;
