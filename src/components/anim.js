import React, {useRef, useEffect} from 'react';
import {Animated, View, StyleSheet, Easing} from 'react-native';

const WinnerAnim = () => {
  const radius = 75;
  const center = 0;

  const redS = useRef(new Animated.Value(center)).current;
  const blueS = useRef(new Animated.Value(center)).current;
  const greenS = useRef(new Animated.Value(center)).current;
  const purpleS = useRef(new Animated.Value(center)).current;
  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(redS, {
          toValue: radius,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.cubic,
        }),
        Animated.timing(greenS, {
          toValue: -radius,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.cubic,
        }),
        Animated.timing(blueS, {
          toValue: radius,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.cubic,
        }),
        Animated.timing(purpleS, {
          toValue: -radius,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.cubic,
        }),
      ]),
    ).start();
  });
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.spark,
          styles.redColor,
          {
            transform: [{translateY: redS}],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.spark,
          styles.greenColor,
          {
            transform: [{translateY: greenS}],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.spark,
          styles.blueColor,
          {
            transform: [{translateX: blueS}],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.spark,
          styles.purpleColor,
          {
            transform: [{translateX: purpleS}],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.spark,
          styles.redColor,
          {
            transform: [{translateY: redS}, {translateX: redS}],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.spark,
          styles.greenColor,
          {
            transform: [{translateY: greenS}, {translateX: greenS}],
          },
        ]}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    marginTop: 20,
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spark: {
    width: 4,
    height: 4,
    borderRadius: 4 / 2,
    borderWidth: 0.5,
    shadowOffset: {
      width: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 50,
  },
  redColor: {
    backgroundColor: '#FFBF00',
    borderColor: '#FF0000',
    shadowColor: '#FFFF00',
  },
  greenColor: {
    backgroundColor: '#D8F781',
    borderColor: '#80FF00',
    shadowColor: '#FFFF00',
  },
  blueColor: {
    backgroundColor: '#58ACFA',
    borderColor: '#0000FF',
    shadowColor: '#FFFF00',
  },
  purpleColor: {
    backgroundColor: '#A9BCF5',
    borderColor: '#642EFE',
    shadowColor: '#FFFF00',
  },
});
export default WinnerAnim;
