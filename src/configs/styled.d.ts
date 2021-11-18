import { Theme } from '@mui/material/styles';
import { CSSProp } from 'styled-components';
import { CustomTheme } from './theme.config';
import type {} from 'styled-components/cssprop';

// you can define extra design variables on top of material ui theme.
declare module '@mui/material/styles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme extends CustomTheme {}
  // allow configuration using `createTheme`
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ThemeOptions extends CustomTheme {}
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp<CustomTheme>;
  }
}
