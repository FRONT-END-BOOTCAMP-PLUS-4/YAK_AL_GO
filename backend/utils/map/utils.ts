// 클린 아키텍처로 이동된 함수들을 위한 래퍼
import { CalculateDistanceUseCase } from '../../application/usecases/map/CalculateDistanceUseCase';
import { CheckPharmacyOpenStatusUseCase } from '../../application/usecases/map/CheckPharmacyOpenStatusUseCase';
import type { PharmacyDto } from '../../application/usecases/map/dto/PharmacyDto';

const calculateDistanceUseCase = new CalculateDistanceUseCase();
const checkPharmacyOpenStatusUseCase = new CheckPharmacyOpenStatusUseCase();

export const formatTimeString = (timeStr: string | null | undefined): string | null => {
  if (!timeStr) {
    return null;
  }

  if (timeStr.includes(':')) {
    return timeStr;
  }

  // 4자리 숫자 (ex. 0900 → 09:00)
  if (timeStr.length === 4) {
    const hour = timeStr.substring(0, 2);
    const minute = timeStr.substring(2, 4);
    return `${hour}:${minute}`;
  }

  // 3자리 숫자 (ex. 900 → 09:00)
  if (timeStr.length === 3) {
    const hour = `0${timeStr.substring(0, 1)}`;
    const minute = timeStr.substring(1, 3);
    return `${hour}:${minute}`;
  }

  return timeStr;
};

// 약국이 특정 요일과 시간에 영업 중인지 확인하는 함수
export const checkPharmacyOpenAtTime = (
  pharmacy: PharmacyDto,
  day: number,
  hour: number,
  minute: number
): boolean => {
  return checkPharmacyOpenStatusUseCase.execute(pharmacy, day, hour, minute);
};

// Calculate distance between two coordinates using Haversine formula
export const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  return calculateDistanceUseCase.execute(lat1, lon1, lat2, lon2);
};

export const deg2rad = (deg: number) => {
  return deg * (Math.PI / 180);
};
