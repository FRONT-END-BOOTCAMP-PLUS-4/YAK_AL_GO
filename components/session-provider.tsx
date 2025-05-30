'use client';

import * as React from 'react';
import { SessionProvider as NextSessionProvider, type SessionProviderProps } from 'next-auth/react';

export function SessionProvider({ children, ...props }: SessionProviderProps) {
  return <NextSessionProvider {...props}>{children}</NextSessionProvider>;
}
