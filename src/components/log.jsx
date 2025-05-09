
export default function LogState() {
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