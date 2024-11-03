"use client";

import React, { useEffect, useRef } from 'react';

const WebcamPage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const currentVideoRef = videoRef.current;

    const getWebcamStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (currentVideoRef) {
          currentVideoRef.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing the webcam: ", error);
      }
    };

    getWebcamStream();

    return () => {
      if (currentVideoRef && currentVideoRef.srcObject) {
        const tracks = (currentVideoRef.srcObject as MediaStream).getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Left half with the webcam feed */}
      <div className="w-1/2 flex items-center justify-center" style={{ backgroundColor: 'orange' }}>
        <video
          ref={videoRef}
          autoPlay
          className="w-[40vw] h-[85vh] rounded-lg m-2.5 object-cover" 
        ></video>
      </div>

      {/* Right half (could be empty or for additional content) */}
      <div className="w-1/2 bg-white"></div>
    </div>
  );
};

export default WebcamPage;
