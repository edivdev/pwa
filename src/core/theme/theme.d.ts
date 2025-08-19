/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO: Improve eslin warnings.
import { PaletteOptions, Palette } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomColors {
    purple: string;
    yellow: string;
    orange: string;
    mint: string;
  }
  
  interface Palette {
    custom: CustomColors;
  }

  interface PaletteOptions {
    custom?: CustomColors;
  }
}