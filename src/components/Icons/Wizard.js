import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgWizard = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 65 60"
    {...props}>
    <Path
      fill="currentColor"
      d="M34.831 25.992H3.211a3.21 3.21 0 0 0 0 6.42h1.85v3.14h27.92v-3.14h1.85a3.21 3.21 0 1 0 0-6.42M5.05 55.837h.001v.006c0 2.297 6.25 4.158 13.96 4.158s13.96-1.861 13.96-4.158l-.001-.004V43.014H5.05zM64.307 2.136a3.21 3.21 0 0 0-4.1-1.95l-37.329 13.27a3.21 3.21 0 1 0 2.15 6.049l37.33-13.27a3.21 3.21 0 0 0 1.949-4.1M.736 4.843 2.724 5.93a.5.5 0 0 1 .199.199L4.01 8.116a.5.5 0 0 0 .876 0L5.973 6.13a.5.5 0 0 1 .199-.199l1.987-1.087a.5.5 0 0 0 0-.876L6.172 2.88a.5.5 0 0 1-.199-.199L4.886.693a.5.5 0 0 0-.876 0L2.923 2.681a.5.5 0 0 1-.199.199L.736 3.966a.5.5 0 0 0 0 .877M16.57 8.093l.445.243a.5.5 0 0 1 .198.199l.243.444a.5.5 0 0 0 .877 0l.243-.444a.5.5 0 0 1 .199-.199l.444-.243a.5.5 0 0 0 0-.877l-.444-.243a.5.5 0 0 1-.199-.198l-.243-.445a.5.5 0 0 0-.877 0l-.243.445a.5.5 0 0 1-.198.198l-.445.243a.5.5 0 0 0 0 .877M7.587 14.745l-1.388.759a.5.5 0 0 0 0 .877l1.388.759a.5.5 0 0 1 .199.198l.759 1.388a.5.5 0 0 0 .877 0l.759-1.388a.5.5 0 0 1 .198-.198l1.388-.76a.5.5 0 0 0 0-.876l-1.388-.76a.5.5 0 0 1-.198-.198l-.76-1.388a.5.5 0 0 0-.876 0l-.76 1.388a.5.5 0 0 1-.198.199"
    />
  </Svg>
);
export default SvgWizard;
