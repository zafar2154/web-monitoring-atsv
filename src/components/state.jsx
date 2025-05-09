import { Card, CardContent } from "./card";

export default function State({data}) {
  return(
    <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          <Card>
            <CardContent className="p-4">
              <p className="text-gray-600 text-sm">Gyro X</p>
              <p className="text-md">{data.gyrox}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-gray-600 text-sm">GYRO Y</p>
              <p className="text-md">{data.gyroy}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-gray-600 text-sm">GYRO Z</p>
              <p className="text-md">{data.gyroz}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-gray-600 text-sm">SOG</p>
              <p className="text-md">{data.sog1}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-gray-600 text-sm">SOG</p>
              <p className="text-md">{data.sog2}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-gray-600 text-sm">COG</p>
              <p className="text-md">{data.cog}</p>
            </CardContent>
          </Card>
        </div>
  )
}