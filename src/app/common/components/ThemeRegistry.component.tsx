'use client';

import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import theme from '@/core/theme/theme.script';

export function ThemeRegistry({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}