import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';

export const useToken = () => {
  const [token, setToken] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchToken = async () => {
      setLoading(true);
      const session = await getSession(); // NextAuth 세션 가져오기
      if (session) {
        setToken(session.token); // 세션에서 토큰 데이터 추출
      }
      setLoading(false);
    };

    fetchToken();
  }, []);

  return { token, loading };
};