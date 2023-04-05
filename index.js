/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {MyProvider} from './src/context';
import {name as appName} from './app.json';

const provider = () => (
    <MyProvider>
        <App />
    </MyProvider>
);

AppRegistry.registerComponent(appName, () => provider);
