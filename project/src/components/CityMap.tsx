import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapMarker {
  id: string;
  coordinates: [number, number];
  type: string;
  severity?: string;
  status?: string;
  popup?: string;
}

interface CityMapProps {
  markers?: MapMarker[];
  center?: [number, number];
  zoom?: number;
  height?: string;
}

const severityColors = {
  Critical: '#ff0040',
  High: '#ff8800',
  Medium: '#ffff00',
  Low: '#0080ff',
};

export default function CityMap({
  markers = [],
  center = [40.7589, -73.9851],
  zoom = 12,
  height = '500px',
}: CityMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current).setView(center, zoom);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 20,
    }).addTo(map);

    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [center, zoom]);

  useEffect(() => {
    if (!mapInstanceRef.current) return;

    const map = mapInstanceRef.current;
    const markersLayer = L.layerGroup().addTo(map);

    markers.forEach((marker) => {
      const color = marker.severity
        ? severityColors[marker.severity as keyof typeof severityColors]
        : '#00ffff';

      const icon = L.divIcon({
        className: 'custom-marker',
        html: `
          <div style="
            width: 24px;
            height: 24px;
            background-color: ${color};
            border: 2px solid white;
            border-radius: 50%;
            box-shadow: 0 0 10px ${color}, 0 0 20px ${color}50;
            animation: pulse 2s infinite;
          "></div>
        `,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      const leafletMarker = L.marker(marker.coordinates, { icon }).addTo(markersLayer);

      if (marker.popup) {
        leafletMarker.bindPopup(marker.popup);
      }
    });

    return () => {
      markersLayer.clearLayers();
    };
  }, [markers]);

  return (
    <div className="relative rounded-lg overflow-hidden border border-neon-cyan/30">
      <div ref={mapRef} style={{ height, width: '100%' }} />
      <style>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.7;
          }
        }
        .leaflet-popup-content-wrapper {
          background-color: #1a1a24;
          color: #ffffff;
          border: 1px solid rgba(0, 255, 255, 0.3);
          border-radius: 8px;
        }
        .leaflet-popup-tip {
          background-color: #1a1a24;
        }
      `}</style>
    </div>
  );
}
