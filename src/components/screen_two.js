import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MyContext} from '../context';
import {Button, Avatar} from 'react-native-elements';
import WinnerAnim from './anim';
import {MainLogo} from '../utils/tools';

const ScreenTwo = () => {
  const context = useContext(MyContext);
  return (
    <>
      <MainLogo />
      <Text style={stylesS2.heading}>The chosen one is:</Text>
      <View>
        <Avatar
          size={40}
          rounded
          icon={{name: 'user', type: 'font-awesome'}}
          containerStyle={{backgroundColor: '#9700b9'}}
        />
        <Text style={stylesS2.winner}>{context.state.selected}</Text>
        <WinnerAnim />
      </View>
      <View style={stylesS2.buttonStyleContainer}>
        <Button
          buttonStyle={stylesS2.button}
          title="Try again"
          onPress={() => context.findWinner()}
        />
        <Button
          buttonStyle={stylesS2.button}
          title="Start over"
          onPress={() => context.resetGame()}
        />
      </View>
    </>
  );
};

const stylesS2 = StyleSheet.create({
  heading: {
    marginTop: 20,
    fontSize: 18,
  },
  winner: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4A235A',
  },
  button: {
    backgroundColor: '#2F0B3A',
    marginTop: 20,
    marginLeft: 20,
    raised: true,
    borderWidth: 4,
    borderColor: '#D8CEF6',
    borderRadius: 10,
  },
  buttonTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttonStyleContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 5,
  },
});

export default ScreenTwo;
