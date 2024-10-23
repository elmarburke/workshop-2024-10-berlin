"use client";

import { MapPin } from "lucide-react";
import "maplibre-gl/dist/maplibre-gl.css";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useRef } from "react";
import Map, { MapRef, Marker } from "react-map-gl/maplibre";

type BoundingBox = [west: number, south: number, east: number, north: number];

interface MapPlace {
  title: string;
  description?: string | null | undefined;
  address?: string | null | undefined;
  lat: number;
  lon: number;
}

interface TravelMapProps {
  places: MapPlace[];
}

export function TravelMap({ places }: TravelMapProps) {
  const { theme, systemTheme } = useTheme();
  const mapRef = useRef<MapRef>(null);

  const boundingBox = useMemo((): BoundingBox | null => {
    const boundingBox = places.reduce(
      (acc, place) => {
        return [
          Math.min(acc[0], place.lon),
          Math.min(acc[1], place.lat),
          Math.max(acc[2], place.lon),
          Math.max(acc[3], place.lat),
        ] as BoundingBox;
      },
      [Infinity, -Infinity, Infinity, -Infinity] as BoundingBox,
    );

    if (
      boundingBox[0] === Infinity ||
      boundingBox[1] === -Infinity ||
      boundingBox[2] === Infinity ||
      boundingBox[3] === -Infinity
    ) {
      return null;
    }

    return boundingBox;
  }, [places]);

  useEffect(() => {
    if (mapRef.current && boundingBox) {
      mapRef.current.fitBounds(boundingBox, {
        padding: 50,
      });
    }
  }, [boundingBox]);

  return (
    <Map
      ref={mapRef}
      onLoad={() => {
        if (boundingBox) {
          mapRef.current?.fitBounds(boundingBox, {
            padding: 50,
          });
        }
      }}
      initialViewState={{
        latitude: 0,
        longitude: 0,
        zoom: 0,
      }}
      mapStyle={
        theme === "dark" || (theme === "system" && systemTheme === "dark")
          ? "https://api.maptiler.com/maps/basic-v2-dark/style.json?key=sRKLJZwS0DCCDjQIWTit"
          : "https://api.maptiler.com/maps/basic-v2/style.json?key=sRKLJZwS0DCCDjQIWTit"
      }
    >
      {places.map((place) => (
        <Marker key={place.title} latitude={place.lat} longitude={place.lon}>
          <MapPin className="text-primary h-6 w-6" />
        </Marker>
      ))}
    </Map>
  );
}
