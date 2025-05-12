import { useState, useEffect } from "react"
import { MapContainer, TileLayer, Polyline, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function Map() {
    const [track, setTrack] = useState([]);

    function fetchTrack(){
        fetch('http://localhost:3001/coordinate')
        .then(res=>res.json())
        .then()
        .then(result=>setTrack(result));
    }

    useEffect(()=>{
        fetchTrack();
        const interval = setInterval(()=>{
          fetchTrack();
        },3000);
        
        return(()=>clearInterval(interval))
    }, [])


    if (!track || track.length === 0|| !track[0].latitude || !track[0].longitude) return <p>Memuat peta...</p>;

    const path = track.map(d=>[d.latitude, d.longitude])
    const center = path[0];

  return(
    <div className="aspect-video w-full bg-blue-100 rounded-xl overflow-hidden">
            {/* <iframe
              className="w-full h-full"
              src="https://www.openstreetmap.org/export/embed.html?bbox=112.7560%2C-7.3322%2C112.7570%2C-7.3320"
              title="Map"
            ></iframe> */}
            <MapContainer center={center} zoom={100} className="w-full h-full">
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {track.map((pos, idx)=>(
                    <CircleMarker key={idx} center={[pos.latitude, pos.longitude]} radius={3} >
                        <Popup>
            <b>Lat:</b> {pos.latitude}<br />
            <b>Lng:</b> {pos.longitude}
                        </Popup>
                    </CircleMarker>
                ))}
                <Polyline positions={path} color="blue" />
            </MapContainer>
    </div>
  )
}