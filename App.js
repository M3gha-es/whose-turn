/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
<script src="http://localhost:8097" />;
import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform,
} from 'react-native';

import {Input, Button, ListItem} from 'react-native-elements';

import {Formik} from 'formik';
import * as yup from 'yup';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {MyContext} from './src/context';
import ScreenOne from './src/components/screen_one';
import ScreenTwo from './src/components/screen_two';

class App extends Component {
  static contextType = MyContext;
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.context.state.screen === 1 ? <ScreenOne /> : <ScreenTwo />}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? 80 : 30,
  },
});

export default App;
