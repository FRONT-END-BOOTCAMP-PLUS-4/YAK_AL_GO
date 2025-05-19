"use client";

import { useEffect, useState } from 'react';
import KakaoMap from './KakaoMap';
import PharmacyList from './PharmacyList';

type Pharmacy = {
  dutyName: string;
  wgs84Lat: number;
  wgs84Lon: number;
  dutyTime1c: string;
  dutyTime1s: string;
  dutyTime2c: string;
  dutyTime2s: string;
  dutyTime3c: string;
  dutyTime3s: string;
  dutyTime4c: string;
  dutyTime4s: string;
  dutyTime5c: string;
  dutyTime5s: string;
  dutyTime6c: string;
  dutyTime6s: string;
  dutyTime7c: string;
  dutyTime7s: string;
};

const DAYS = [
  { value: 1, label: '월요일' },
  { value: 2, label: '화요일' },
  { value: 3, label: '수요일' },
  { value: 4, label: '목요일' },
  { value: 5, label: '금요일' },
  { value: 6, label: '토요일' },
  { value: 7, label: '일요일' },
];

const MapPage = () => {
  const [pharmacies, setPharmacies] = useState<Pharmacy[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [selectedDay, setSelectedDay] = useState<number>(new Date().getDay() || 7);
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    fetch("/api/pharmacies")
      .then((res) => res.json())
      .then((data) => {
        setPharmacies(data);
      });
  }, []);

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    const value = event.target.value;
    
    if (value === '' || timeRegex.test(value)) {
      setTime(value);
    }
  };

  const filterPharmacies = () => {
    if (!time) return pharmacies;

    const timeNumber = parseInt(time.replace(':', ''));
    const dayField = `dutyTime${selectedDay}`;
    
    return pharmacies.filter(pharmacy => {
      const startTime = parseInt(pharmacy[`${dayField}s`] || '0000');
      const closeTime = parseInt(pharmacy[`${dayField}c`] || '0000');
      return timeNumber >= startTime && timeNumber <= closeTime;
    });
  };

  const filteredPharmacies = filterPharmacies();

  return (
    <div>
      <div>
        <select 
          value={selectedDay} 
          onChange={(e) => setSelectedDay(parseInt(e.target.value))}
        >
          {DAYS.map(day => (
            <option key={day.value} value={day.value}>
              {day.label}
            </option>
          ))}
        </select>
        <label htmlFor="time"> 영업 시간 검색: </label>
        <input
          id="time"
          type="time"
          value={time}
          onChange={handleTimeChange}
        />
      </div>
      
      <div>
        <PharmacyList 
          pharmacies={filteredPharmacies} 
          onSelectPharmacy={setSelected}
          selectedIndex={selected}
        />
        <div>
          <KakaoMap 
            pharmacies={filteredPharmacies}
            selected={selected}
            onSelect={setSelected}
          />
        </div>
      </div>
    </div>
  );
};

export default MapPage;