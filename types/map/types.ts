export interface Medicine {
  item_seq: string
  item_name: string
}

export interface Inventory {
  id: number
  quantity: number
  itemSeq: string
  hpid: string
  medicines: Medicine
}

export interface PharmacyType {
  hpid: string
  duty_name: string
  duty_addr: string
  duty_tel1: string
  wgs84_lat: number
  wgs84_lon: number
  duty_time1s: string
  duty_time1c: string
  duty_time2s: string
  duty_time2c: string
  duty_time3s: string
  duty_time3c: string
  duty_time4s: string
  duty_time4c: string
  duty_time5s: string
  duty_time5c: string
  duty_time6s: string
  duty_time6c: string
  duty_time7s: string
  duty_time7c: string
  inventories: Inventory[]
  isOpen?: boolean // 영업 상태 표시를 위한 속성 추가
}
