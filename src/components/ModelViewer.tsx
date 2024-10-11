"use client";

import { useRef, useEffect } from "react";
import "@google/model-viewer";

export default function ModelViewer({ fileUrl }) {
  const modelRef = useRef(null);

  useEffect(() => {
    // Optional: you can set up event listeners for the model viewer here
    const modelViewer = modelRef.current;

    // Example: Add a listener for when the model is loaded
    modelViewer?.addEventListener('load', () => {
      console.log('Model loaded!');
    });

    return () => {
      modelViewer?.removeEventListener('load', () => {
        console.log('Model loaded!');
      });
    };
  }, []);

  return (
    <div className="w-full h-96">
      <model-viewer
        ref={modelRef}
        src={fileUrl}
        alt="A 3D model"
        auto-rotate
        camera-controls
        style={{ width: '100%', height: '100%' }}
      >
      </model-viewer>
    </div>
  );
}
