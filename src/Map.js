import React from 'react';
import { Marker, Map, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import { CRS } from 'proj4leaflet';

const apiKey = process.env.LANTMATERIET_TOKEN;
const crs = new L.Proj.CRS('EPSG:3006',
  '+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
  {
    resolutions: [
      4096, 2048, 1024, 512, 256, 128, 64, 32, 16, 8
    ],
    origin: [-1200000.000000, 8500000.000000 ],
    bounds:  L.bounds( [-1200000.000000, 8500000.000000], [4305696.000000, 2994304.000000])
  });

export default () => (
  <Map center={[59.3367, 18.0667]} style={{ height: '100vh', width: '100vw' }} zoom={10} crs={crs}>
    <Marker position={[59.3367, 18.0667]} />
    <TileLayer
      maxZoom={9}
      minZoom={0}
      attribution="&amp;copy <a href=&quot;https://www.lantmateriet.se/en/&quot;>Lantmäteriet</a> Topografisk Webbkarta Visning, CCB"
      url={`https://api.lantmateriet.se/open/topowebb-ccby/v1/wmts/token/${apiKey}/1.0.0/topowebb/default/3006/{z}/{y}/{x}.png`}
    />
  </Map>
);
