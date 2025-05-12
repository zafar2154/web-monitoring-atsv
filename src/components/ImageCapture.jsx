import { useEffect, useState } from "react";
import axios from 'axios';

export default function ImageCapture(){
const [surfaceImage, setSurfaceImage] = useState();
const [underwaterImage, setUnderwaterImage] = useState();

useEffect(() => {
    // Fetch gambar saat komponen pertama kali dimuat
    const urlSurface = `http://localhost:3001/image/surface?time=${Date.now()}`;
    setSurfaceImage(urlSurface);

    const urlUnderwater = `http://localhost:3001/image/underwater?time=${Date.now()}`;
    setUnderwaterImage(urlUnderwater);
}, []);

return (
    <div className="flex mt-6">
        <div className="mr-2">
            <p className="font-semibold mb-2">Surface Image</p>
        {surfaceImage ? (
        <img src={surfaceImage} alt="Gambar kamera" className="w-80 border rounded-xl" />
      ) : (
        <p>Memuat gambar...</p>
      )}
      </div>
      <div className="mx-2">
        <p className="font-semibold mb-2">Underwater Image</p>
      {underwaterImage ? (
        <img src={underwaterImage} alt="Gambar kamera" className="w-80 border rounded-xl" />
      ) : (
        <p>Memuat gambar...</p>
      )}
      </div>
    </div>
    
  );
}
