import { useState, useEffect } from "react"
export default function LogState() {
    const [log, setLog] = useState([]);

    function fetchLog() {
        fetch("http://localhost:3001/log")
        .then((res)=>res.json())
        .then((result)=>setLog(result));
    }


    useEffect(()=>{
        fetchLog();
        const timeInterval = setInterval(()=>{fetchLog();}, 3000); //refresh data tiap 3 detik

        return () => clearInterval(timeInterval);
    }, []);
  return(
  <table className="min-w-full bg-white border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-2 py-1 text-sm">Day</th>
                  <th className="border px-2 py-1 text-sm">Date</th>
                  <th className="border px-2 py-1 text-sm">Time</th>
                  <th className="border px-2 py-1 text-sm">Coord</th>
                  <th className="border px-2 py-1 text-sm">Speed (Km/h)</th>
                  <th className="border px-2 py-1 text-sm">Speed (Knot)</th>
                  <th className="border px-2 py-1 text-sm">COG</th>
                </tr>
              </thead>
              <tbody>
                {log.map((log)=>(
                    <tr key={log.id}>
                  <td className="border px-2 py-1 text-sm">{log.day}</td>
                  <td className="border px-2 py-1 text-sm">{log.date}</td>
                  <td className="border px-2 py-1 text-sm">{log.time}</td>
                  <td className="border px-2 py-1 text-sm">S {log.coordinate1} E {log.coordinate2}</td>
                  <td className="border px-2 py-1 text-sm">{log.sog1} km/h</td>
                  <td className="border px-2 py-1 text-sm">{log.sog2} Knot</td>
                  <td className="border px-2 py-1 text-sm">{log.cog}</td>
                </tr>
                
                ))}
              </tbody>
            </table>
  )
}