import styled from 'styled-components';
import { Props } from './ios-spinner';

export const IosSpinnerContainer = styled.span<Props>`
  animation: iosIntro 0.6s;
  color: ${(props) => props.color};
  position: relative;
  svg {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    margin: auto 0;
    fill: currentColor;
    path:nth-of-type(1) {
      animation: pulse 1s infinite linear;
    }
    path:nth-of-type(2) {
      animation: pulse 1s -0.083s infinite linear;
    }
    path:nth-of-type(3) {
      animation: pulse 1s -0.166s infinite linear;
    }
    path:nth-of-type(4) {
      animation: pulse 1s -0.249s infinite linear;
    }
    path:nth-of-type(5) {
      animation: pulse 1s -0.332s infinite linear;
    }
    path:nth-of-type(6) {
      animation: pulse 1s -0.415s infinite linear;
    }
    path:nth-of-type(7) {
      animation: pulse 1s -0.498s infinite linear;
    }
    path:nth-of-type(8) {
      animation: pulse 1s -0.581s infinite linear;
    }
    path:nth-of-type(9) {
      animation: pulse 1s -0.664s infinite linear;
    }
    path:nth-of-type(10) {
      animation: pulse 1s -0.747s infinite linear;
    }
    path:nth-of-type(11) {
      animation: pulse 1s -0.83s infinite linear;
    }
    path:nth-of-type(12) {
      animation: pulse 1s -0.913s infinite linear;
    }
  }

  @keyframes pulse {
    50% {
      fill: currentColor;
    }
    to {
      fill: rgba(134, 134, 134, 0.4);
    }
  }

  //@keyframes iosIntro {
  //  from {
  //    transform: scale(0);
  //    opacity: 0;
  //  }
  //  to {
  //    transform: scale(1);
  //    opacity: 1;
  //  }
  //}
`;
