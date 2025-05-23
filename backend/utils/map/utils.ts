// 4자리 숫자 형태의 시간을 "시:분" 형태로 변환하는 함수
export const formatTimeString = (timeStr: string | null | undefined): string | null => {
  if (!timeStr) {
    return null // null 또는 undefined인 경우 null 반환
  }

  // 이미 "시:분" 형태인 경우 그대로 반환
  if (timeStr.includes(":")) {
    return timeStr
  }

  // 4자리 숫자 형태인 경우 "시:분" 형태로 변환
  if (timeStr.length === 4) {
    const hour = timeStr.substring(0, 2)
    const minute = timeStr.substring(2, 4)
    return `${hour}:${minute}`
  }

  return timeStr
}

// 약국이 특정 요일과 시간에 영업 중인지 확인하는 함수
export const checkPharmacyOpenAtTime = (pharmacy: any, day: number, hour: number, minute: number): boolean => {
  // 요일에 따른 시작/종료 시간 가져오기
  let startTimeStr, endTimeStr

  switch (day) {
    case 0: // Sunday
      startTimeStr = pharmacy.duty_time7s
      endTimeStr = pharmacy.duty_time7c
      break
    case 1: // Monday
      startTimeStr = pharmacy.duty_time1s
      endTimeStr = pharmacy.duty_time1c
      break
    case 2: // Tuesday
      startTimeStr = pharmacy.duty_time2s
      endTimeStr = pharmacy.duty_time2c
      break
    case 3: // Wednesday
      startTimeStr = pharmacy.duty_time3s
      endTimeStr = pharmacy.duty_time3c
      break
    case 4: // Thursday
      startTimeStr = pharmacy.duty_time4s
      endTimeStr = pharmacy.duty_time4c
      break
    case 5: // Friday
      startTimeStr = pharmacy.duty_time5s
      endTimeStr = pharmacy.duty_time5c
      break
    case 6: // Saturday
      startTimeStr = pharmacy.duty_time6s
      endTimeStr = pharmacy.duty_time6c
      break
    default:
      return false
  }

  // 시작 시간이나 종료 시간이 null, undefined 또는 빈 문자열이면 영업 종료
  if (!startTimeStr || !endTimeStr || startTimeStr === "" || endTimeStr === "") {
    return false
  }

  const startTime = formatTimeString(startTimeStr)
  const endTime = formatTimeString(endTimeStr)

  // 변환된 시간이 null이면 영업 종료
  if (!startTime || !endTime) {
    return false
  }

  // 시간 비교
  const [startHour, startMinute] = startTime.split(":").map(Number)
  const [endHour, endMinute] = endTime.split(":").map(Number)

  const checkTimeInMinutes = hour * 60 + minute
  const startTimeInMinutes = startHour * 60 + startMinute
  const endTimeInMinutes = endHour * 60 + endMinute

  // 종료 시간이 시작 시간보다 이른 경우 (다음 날까지 영업)
  let isOpen
  if (endTimeInMinutes < startTimeInMinutes) {
    isOpen = checkTimeInMinutes >= startTimeInMinutes || checkTimeInMinutes <= endTimeInMinutes
  } else {
    isOpen = checkTimeInMinutes >= startTimeInMinutes && checkTimeInMinutes <= endTimeInMinutes
  }

  return isOpen
}

// Calculate distance between two coordinates using Haversine formula
export const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371 // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1)
  const dLon = deg2rad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d = R * c // Distance in km
  return d
}

export const deg2rad = (deg: number) => {
  return deg * (Math.PI / 180)
}
