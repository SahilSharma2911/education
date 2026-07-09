"use client";
import React, { useRef, useState, useCallback } from "react";
import { MdOutlinePlayCircle } from "react-icons/md";
import Reveal from "@/components/Reveal/Reveal";
import { studentVideos, videoPoster } from "@/lib/videos";

const VideoCard = ({ id, src, activeVideoId, onPlay, videoRef }) => {
  const isPlaying = activeVideoId === id;

  const handlePlayClick = () => {
    onPlay(id);
    videoRef.current?.play();
  };

  return (
    <div className="relative w-[280px] max-w-full aspect-[9/16] bg-[#D9D9D9] rounded-md overflow-hidden">
      <video
        ref={videoRef}
        src={src}
        // Cloudinary-generated first-frame image, shown instantly as a preview
        // without downloading any of the video.
        poster={videoPoster(src)}
        className="w-full h-full object-cover"
        preload="none"
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
    <section className="mt-[3rem] md:mt-[4rem] mb-[5rem] md:mb-[7rem]">
      <Reveal className="space-y-1">
        <h2 className="text-center font-poppins text-[#1F94F3] font-bold text-[22px] md:text-[30px] leading-[33.6px] md:mb-2">
          STUDENT TESTIMONIALS
        </h2>
        <p className="font-jost text-center text-[#5C6066] text-[14px] md:text-[16px]">
          Experiences, and stories from our students
        </p>
      </Reveal>

      <div className="w-10/12 mx-auto grid justify-center gap-14 md:gap-20 grid-cols-[280px] md:grid-cols-[repeat(2,280px)] xl:grid-cols-[repeat(3,280px)] mt-[2.5rem] md:mt-[3rem] mb-[3rem]">
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
