import { useEffect, useState } from 'react';
import '../App.css'
import { MapPin } from "lucide-react";
import State from "./state";
import LogState from "./log";
import Map from "./map";
import ImageCapture from './ImageCapture';

export default function Dashboard() {

  const [data, setData] = useState('');
  const [loading, setLoading] = useState(null); // Tambah state loading

  const fetchData = () => {
    fetch("http://localhost:3001/data")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
    
    const interval=setInterval(()=>{
      fetchData();
    }, 3000);

    return () => clearInterval(interval);

  }, []);

  if (loading) {
    return <div>Loading...</div>; // Tampilkan loading indicator
  }

  if (!data) {
    return <div>No data available</div>; // Handle case ketika data null
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <NavBar />
      <Main>
        <State data={data}/>
      </Main>
    </div>
  );
}

function NavBar() {
  return(
    <div className="bg-gradient-to-b from-blue-600 to-blue-300 text-white rounded-t-xl px-6 py-3 text-xl font-bold flex justify-between h-20 items-center">
        <span>Nama Tim: MARC Dewasrani</span>
        <div className='flex items-center space-x-3'>
          <img src="iot.png" alt="iot" className='w-auto h-12 object-contain bg-gray-100 rounded-4xl'/>
          <img src="x.png" alt="x"  className='h-7 w-auto object-contain'/>
          <img src="jalasatva.png" alt="jalasatva" className='w-auto h-12 object-contain bg-gray-100 rounded-4xl' />
        </div>
      </div>
  )
}

function Main({children}) {
  return(
    <div className="bg-white px-5 py-4">
        <p className="font-semibold mb-4">Lintasan: A</p>
        {children}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Map/>
          <div className="overflow-x-auto">
            <p className="font-semibold mb-2">data log:</p>
            <LogState/>
            <ImageCapture/>
          </div>
        </div>
      </div>
  )
}

