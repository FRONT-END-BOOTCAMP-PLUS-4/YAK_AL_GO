"use client"

import { useEffect, useState } from "react"
import { Map, MapMarker } from "react-kakao-maps-sdk"

type KakaoMapProps = {
  pharmacies: Array<{
    dutyName: string
    wgs84Lat: number
    wgs84Lon: number
  }>
  selected: number | null
  onSelect: (index: number | null) => void
  currentLocation?: { lat: number; lng: number } | null
}

const KakaoMap = (props: KakaoMapProps) => {
  const { pharmacies, selected, onSelect } = props
  const [mapLoaded, setMapLoaded] = useState(false)
  const [center, setCenter] = useState({
    lat: 37.5639747,
    lng: 127.0077246,
  })

  // 초기 위치 설정 로직 수정
  useEffect(() => {
    if (selected !== null && pharmacies[selected]) {
      // 선택된 약국이 있으면 약국 위치로 이동
      setCenter({
        lat: Number(pharmacies[selected].wgs84Lat),
        lng: Number(pharmacies[selected].wgs84Lon),
      })
    } else if (props.currentLocation) {
      // 선택된 약국이 없고 현재 위치가 있으면 현재 위치로 이동
      setCenter({
        lat: props.currentLocation.lat,
        lng: props.currentLocation.lng,
      })
    }
    // 둘 다 없으면 초기 설정된 위치 유지
  }, [selected, pharmacies, props.currentLocation])

  useEffect(() => {
    window.kakao?.maps?.load(() => {
      setMapLoaded(true)
    })
  }, [])

  if (!mapLoaded) {
    return <div>지도를 불러오는 중...</div>
  }

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Map
        center={center} // initialCenter 대신 center 상태 사용
        style={{ width: "100%", height: "100%" }}
        level={3}
        onClick={() => onSelect(null)}
        onDragStart={() => onSelect(null)}
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
            {selected === idx && <div style={{ padding: "5px", color: "#000" }}>{pharmacy.dutyName}</div>}
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
  )
}

export default KakaoMap
