"use client";

import { useEffect, useState, useRef } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

// KakaoMapProps 타입 정의 수정
type KakaoMapProps = {
  pharmacies: Array<{
    dutyName: string;
    wgs84Lat: number;
    wgs84Lon: number;
  }>;
  selected: number | null;
  onSelect: (index: number | null) => void;
  currentLocation?: { lat: number; lng: number } | null;
  mapCenter: { lat: number; lng: number };
  onCenterChanged: (center: { lat: number; lng: number }) => void;
};

// KakaoMap 컴포넌트 수정
const KakaoMap = (props: KakaoMapProps) => {
  const { pharmacies, selected, onSelect, mapCenter, onCenterChanged } = props;
  const [map, setMap] = useState<kakao.maps.Map | null>(null);

  // 사용자 조작에 의한 지도 이동인지 구분하기 위한 플래그
  const userInteractionRef = useRef(false);
  // 초기 렌더링 여부를 확인하기 위한 ref
  const initialRenderRef = useRef(true);
  // 약국 선택에 의한 지도 이동인지 구분하기 위한 플래그
  const pharmacySelectionRef = useRef(false);
  // 이전에 선택된 약국 인덱스를 저장
  const prevSelectedRef = useRef<number | null>(null);

  // 약국 선택 변경 감지
  useEffect(() => {
    if (selected !== prevSelectedRef.current) {
      pharmacySelectionRef.current = true;
      prevSelectedRef.current = selected;
    }
  }, [selected]);

  // 선택된 약국이나 현재 위치가 변경될 때만 지도 중심 이동
  useEffect(() => {
    if (!map) return;

    // 초기 렌더링 시에는 mapCenter로 설정
    if (initialRenderRef.current) {
      initialRenderRef.current = false;
      return;
    }

    // 약국 선택에 의한 변경일 경우
    if (
      pharmacySelectionRef.current &&
      selected !== null &&
      pharmacies[selected]
    ) {
      map.setCenter(
        new kakao.maps.LatLng(
          Number(pharmacies[selected].wgs84Lat),
          Number(pharmacies[selected].wgs84Lon)
        )
      );
      pharmacySelectionRef.current = false;
    }
    // 내 위치 버튼 클릭에 의한 변경일 경우 (props.currentLocation이 변경되었을 때)
    else if (props.currentLocation && !userInteractionRef.current) {
      // 이전 위치와 다른 경우에만 이동
      const currentCenter = map.getCenter();
      const currentLat = currentCenter.getLat();
      const currentLng = currentCenter.getLng();

      if (
        Math.abs(currentLat - props.currentLocation.lat) > 0.0001 ||
        Math.abs(currentLng - props.currentLocation.lng) > 0.0001
      ) {
        map.setCenter(
          new kakao.maps.LatLng(
            props.currentLocation.lat,
            props.currentLocation.lng
          )
        );
      }
    }
  }, [map, selected, pharmacies, props.currentLocation]);

  // 지도 중심 변경 이벤트 핸들러
  const handleCenterChanged = () => {
    if (!map) return;

    userInteractionRef.current = true;

    const center = map.getCenter();

    // 지도 조작 시 선택된 약국 초기화 (문제 2 해결)
    onSelect(null);

    // 항상 부모 컴포넌트에 중심 위치 변경 알림 (문제 1 해결)
    onCenterChanged({
      lat: center.getLat(),
      lng: center.getLng(),
    });

    // 플래그 초기화 타이밍 조정
    setTimeout(() => {
      userInteractionRef.current = false;
    }, 100);
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Map
        center={mapCenter}
        style={{ width: "100%", height: "100%" }}
        level={3}
        onClick={(_, __) => {
          // 지도 클릭 시 선택된 약국만 초기화하고 지도 위치는 유지
          onSelect(null);
        }}
        onDragEnd={handleCenterChanged}
        onZoomChanged={handleCenterChanged}
        onCreate={setMap}
      >
        {pharmacies.map((pharmacy, idx) => (
          <MapMarker
            key={idx}
            position={{
              lat: Number(pharmacy.wgs84Lat),
              lng: Number(pharmacy.wgs84Lon),
            }}
            clickable={true}
            onClick={() => onSelect(idx)}
          >
            {selected === idx && (
              <div style={{ padding: "5px", color: "#000" }}>
                {pharmacy.dutyName}
              </div>
            )}
          </MapMarker>
        ))}
      </Map>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "20px",
          height: "20px",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 10,
        }}
      >
        <svg width="20" height="20">
          <line x1="10" y1="0" x2="10" y2="20" stroke="black" strokeWidth="2" />
          <line x1="0" y1="10" x2="20" y2="10" stroke="black" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
};

export default KakaoMap;
