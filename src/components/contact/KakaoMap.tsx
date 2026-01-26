/**
 * KakaoMap - 카카오맵 임베드 컴포넌트
 *
 * @description 회사 위치를 카카오맵으로 표시
 */

"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    kakao: {
      maps: {
        load: (callback: () => void) => void;
        LatLng: new (lat: number, lng: number) => unknown;
        Map: new (
          container: HTMLElement,
          options: { center: unknown; level: number }
        ) => unknown;
        Marker: new (options: { map: unknown; position: unknown }) => unknown;
        InfoWindow: new (options: { content: string }) => {
          open: (map: unknown, marker: unknown) => void;
        };
      };
    };
  }
}

interface KakaoMapProps {
  latitude: number;
  longitude: number;
  markerTitle?: string;
}

export default function KakaoMap({
  latitude,
  longitude,
  markerTitle = "(주)인장매니지먼트",
}: KakaoMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=fbb29c1531b26b80bb4b63f707c88601&autoload=false`;
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        if (!mapRef.current) return;

        const coords = new window.kakao.maps.LatLng(latitude, longitude);

        const map = new window.kakao.maps.Map(mapRef.current, {
          center: coords,
          level: 3,
        });

        mapInstanceRef.current = map;

        const marker = new window.kakao.maps.Marker({
          map: map,
          position: coords,
        });

        const infoWindow = new window.kakao.maps.InfoWindow({
          content: `<div style="padding:8px 12px;font-size:13px;font-weight:600;color:#1f2937;background:#fff;border-radius:4px;">${markerTitle}</div>`,
        });
        infoWindow.open(map, marker);
      });
    };

    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector(
        `script[src*="dapi.kakao.com"]`
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [latitude, longitude, markerTitle]);

  return (
    <div
      ref={mapRef}
      className="w-full h-full rounded-xl"
      style={{ minHeight: "256px" }}
    />
  );
}
