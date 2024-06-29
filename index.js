/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './src/app';
import {name as appName} from './app.json';
import {store} from './src/store';
import i18n from './src/translations/i18n';

function root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => root);
