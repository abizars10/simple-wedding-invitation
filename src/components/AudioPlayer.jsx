import { useState, useEffect, useRef } from "react";
import { Music, Pause, Play } from "lucide-react";

export default function AudioPlayer({ isPlaying, setIsPlaying }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play().catch((err) => console.log("Autoplay blocked:", err));
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <audio ref={audioRef} loop src="/audio/a-thousand-years.mp3" />
      <button
        type="button"
        onClick={() => setIsPlaying((prev) => !prev)}
        className={`p-3 bg-amber-600/80 hover:bg-amber-600 text-white rounded-full shadow-xl backdrop-blur-md transition-all cursor-pointer ${isPlaying ? "animate-spin-slow" : ""}`}
        aria-label={isPlaying ? "Pause Audio" : "Play Audio"}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
    </div>
  );
}
