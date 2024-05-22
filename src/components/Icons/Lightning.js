import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgLightning = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 15 22"
    {...props}>
    <Path
      fill="currentColor"
      d="M14.058 11.04 8.874 8.036l2.613-6.271c.08-.164.126-.348.126-.543A1.22 1.22 0 0 0 10.395 0a1.23 1.23 0 0 0-.76.262l-.086.073L.382 9.013a1.225 1.225 0 0 0 .226 1.945l5.185 3.007-2.644 6.343a1.221 1.221 0 0 0 1.97 1.357l9.166-8.68c.28-.265.418-.647.374-1.03a1.23 1.23 0 0 0-.602-.915"
    />
  </Svg>
);
export default SvgLightning;
