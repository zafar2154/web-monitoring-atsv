import { useEffect, useState } from "react";
import axios from 'axios';

export default function ImageCapture(){
const [surfaceImage, setSurfaceImage] = useState();
const [underwaterImage, setUnderwaterImage] = useState();

useEffect(() => {
    const updateImages = () => {
    const timestamp = Date.now(); // supaya gambar tidak di-cache browser
    setSurfaceImage(`https://web-monitoring-atsv-production.up.railway.app/image/surface?time=${timestamp}`);
    setUnderwaterImage(`https://web-monitoring-atsv-production.up.railway.app/image/underwater?time=${timestamp}`);
    };

    updateImages(); // tampilkan gambar saat pertama kali
    const interval = setInterval(updateImages, 3000); // refresh tiap 3 detik

    return () => clearInterval(interval); // bersihkan interval saat komponen unmount
}, []);

return (
    <div className="flex mt-6">
        <div className="mr-2">
            <p className="font-semibold mb-2">Surface Image</p>
        {surfaceImage ? (
        <img src={surfaceImage} alt="Surface Image" className="w-80 border rounded-xl" />
      ) : (
        <p>Memuat gambar...</p>
      )}
      </div>
      <div className="mx-2">
        <p className="font-semibold mb-2">Underwater Image</p>
      {underwaterImage ? (
        <img src={underwaterImage} alt="Underwater Image" className="w-80 border rounded-xl" />
      ) : (
        <p>Memuat gambar...</p>
      )}
      </div>
    </div>
    
  );
}
