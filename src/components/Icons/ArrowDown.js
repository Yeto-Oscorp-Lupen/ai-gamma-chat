import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgArrowDown = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 19 11"
    {...props}>
    <Path
      fill="currentColor"
      stroke="currentColor"
      d="M9.851 8.356 17.79.52q.027.012.069.038c.17.107.358.29.535.468a.364.364 0 0 1 0 .515l-8.636 8.636a.363.363 0 0 1-.514 0l-.353.354.353-.354L.607 1.542a.364.364 0 0 1 0-.515C.784.85.972.667 1.142.56A1 1 0 0 1 1.211.52l7.938 7.836.351.347z"
    />
  </Svg>
);
export default SvgArrowDown;
