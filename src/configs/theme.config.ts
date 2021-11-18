import { createTheme } from '@mui/material/styles';

export interface CustomTheme {
  bg: {
    main: string;
    light: string;
  };
  text: {
    main: string;
    light: string;
  };
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#009DAE',
    },
    secondary: {
      main: '#B983FF',
    },
  },
  shape: {
    borderRadius: 8,
  },
  bg: {
    main: '#fff',
    light: '#FDF6F0',
  },
  text: {
    main: '#000',
    light: '#272727',
  },
});
