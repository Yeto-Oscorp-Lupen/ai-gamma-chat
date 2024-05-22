import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgArrowLeft = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 10 16"
    {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M.382 8.864A1.16 1.16 0 0 1 0 8.014c0-.318.137-.623.382-.849L7.758.367c.12-.115.264-.206.423-.27A1.4 1.4 0 0 1 9.19.09c.16.06.306.15.428.263a1.2 1.2 0 0 1 .285.395 1.12 1.12 0 0 1-.009.93q-.104.22-.292.39L3.147 8.014l6.455 5.948c.237.227.369.53.366.846s-.14.616-.382.839-.569.35-.91.352a1.37 1.37 0 0 1-.918-.337z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgArrowLeft;
