import './App.css'
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <NavBar />
      <Main/>
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

function Main() {
  return(
    <div className="bg-white px-6 py-4">
        <p className="font-semibold mb-4">Lintasan: A</p>
        <State/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Map/>
          <div className="overflow-x-auto">
            <p className="font-semibold mb-2">Geotag:</p>
            <LogState/>
          </div>
        </div>
      </div>
  )
}

function State() {
  return(
    <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          <Card>
            <CardContent className="p-4">
              <p className="text-gray-600 text-sm">GYRO X</p>
              <p className="text-md">0.00022631783213000745</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-gray-600 text-sm">GYRO Y</p>
              <p className="text-md">0.0030063241720199585</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-gray-600 text-sm">GYRO Z</p>
              <p className="text-md">1.5300382375717163</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-gray-600 text-sm">SOG</p>
              <p className="text-md">0 Km/j</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-gray-600 text-sm">SOG</p>
              <p className="text-md">0 knot</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-gray-600 text-sm">COG</p>
              <p className="text-md">0</p>
            </CardContent>
          </Card>
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

function LogState() {
  return(
  <table className="min-w-full bg-white border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-2 py-1 text-sm">Day</th>
                  <th className="border px-2 py-1 text-sm">Date</th>
                  <th className="border px-2 py-1 text-sm">Time</th>
                  <th className="border px-2 py-1 text-sm">Coord</th>
                  <th className="border px-2 py-1 text-sm">Speed (Km/j)</th>
                  <th className="border px-2 py-1 text-sm">Speed (Knot)</th>
                  <th className="border px-2 py-1 text-sm">COG</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-2 py-1 text-sm">Sat</td>
                  <td className="border px-2 py-1 text-sm">26/10/2024</td>
                  <td className="border px-2 py-1 text-sm">10:01:30</td>
                  <td className="border px-2 py-1 text-sm">S -7.3321165 E 112.7567628</td>
                  <td className="border px-2 py-1 text-sm">0.410 km/j</td>
                  <td className="border px-2 py-1 text-sm">0.221 Knot</td>
                  <td className="border px-2 py-1 text-sm">273.94</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-sm">Sat</td>
                  <td className="border px-2 py-1 text-sm">26/10/2024</td>
                  <td className="border px-2 py-1 text-sm">10:01:38</td>
                  <td className="border px-2 py-1 text-sm">S -7.3321059 E 112.7567545</td>
                  <td className="border px-2 py-1 text-sm">0.664 km/j</td>
                  <td className="border px-2 py-1 text-sm">0.358 Knot</td>
                  <td className="border px-2 py-1 text-sm">285.66</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-sm">Sat</td>
                  <td className="border px-2 py-1 text-sm">26/10/2024</td>
                  <td className="border px-2 py-1 text-sm">10:01:43</td>
                  <td className="border px-2 py-1 text-sm">S -7.3320927 E 112.7567534</td>
                  <td className="border px-2 py-1 text-sm">0.619 km/j</td>
                  <td className="border px-2 py-1 text-sm">0.333 Knot</td>
                  <td className="border px-2 py-1 text-sm">345.71</td>
                </tr>
              </tbody>
            </table>
  )
}