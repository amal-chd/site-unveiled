import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  className?: string;
}

const Map: React.FC<MapProps> = ({ className = '' }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Note: In production, this should be stored in environment variables
    // For now, users need to replace this with their Mapbox token
    const mapboxToken = 'YOUR_MAPBOX_TOKEN_HERE';
    
    if (mapboxToken === 'YOUR_MAPBOX_TOKEN_HERE') {
      // Show a placeholder message if no token is provided
      if (mapContainer.current) {
        mapContainer.current.innerHTML = `
          <div class="flex items-center justify-center h-full bg-muted rounded-lg">
            <div class="text-center p-8">
              <p class="text-muted-foreground mb-4">Map requires Mapbox token</p>
              <p class="text-sm text-muted-foreground">
                Get your free token at <a href="https://mapbox.com" target="_blank" class="text-primary hover:underline">mapbox.com</a>
              </p>
            </div>
          </div>
        `;
      }
      return;
    }

    mapboxgl.accessToken = mapboxToken;
    
    // Coordinates for Mambaram, Kerala (approximate location)
    const latitude = 11.7401;
    const longitude = 75.5837;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [longitude, latitude],
      zoom: 14,
    });

    // Add a marker for the clinic location
    const marker = new mapboxgl.Marker({
      color: '#22c55e', // Green color matching the design
    })
      .setLngLat([longitude, latitude])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML('<div><strong>Prana Roots</strong><br/>Ayurveda Clinic & Pharmacy<br/>Poweloom Metta<br/>Mambaram - 670741</div>')
      )
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className={`relative w-full h-80 ${className}`}>
      <div ref={mapContainer} className="absolute inset-0 rounded-lg shadow-natural border border-border" />
    </div>
  );
};

export default Map;