import { useEffect, useState } from 'react';
import '../App.css'
import { MapPin } from "lucide-react";
import State from "./state";
import LogState from "./log";
export default function Dashboard() {

  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true); // Tambah state loading

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
    <div className="bg-gray-700 text-white rounded-t-xl px-6 py-3 text-xl font-bold flex justify-between">
        <span>Nama Tim: MARC Dewasrani</span>
        <span>UPNVJ</span>
      </div>
  )
}

function Main({children}) {
  return(
    <div className="bg-white px-6 py-4">
        <p className="font-semibold mb-4">Lintasan: A</p>
        {children}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Map/>
          <div className="overflow-x-auto">
            <p className="font-semibold mb-2">data log:</p>
            <LogState/>
          </div>
        </div>
      </div>
  )
}

function Map() {
  return(
    <div className="aspect-video w-full bg-blue-100 rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.openstreetmap.org/export/embed.html?bbox=112.7560%2C-7.3322%2C112.7570%2C-7.3320"
              title="Map"
            ></iframe>
    </div>
  )
}