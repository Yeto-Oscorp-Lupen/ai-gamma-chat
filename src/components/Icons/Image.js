import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgImage = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 26 25"
    {...props}>
    <Path
      fill="currentColor"
      d="M19.748 7.109c2.06 0 3.737-1.595 3.737-3.555S21.81 0 19.748 0 16.01 1.595 16.01 3.554c0 1.96 1.676 3.555 3.737 3.555M0 24.32h25.57v-7.245l-4.613-4.63-5.596 3.095-7.79-5.294L0 17.845z"
    />
  </Svg>
);
export default SvgImage;
