import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, Button, Image, ImageBackground, View } from 'react-native';

export default function ChooseButtons({ onChoose }) {

  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        <Button
          onPress={() => onChoose(1)}
          color= '#000'
          title='TRICK'
          accessibilityLabel="Learn more about this button"/>
      </View>
      <View style={styles.btn}>
        <Button
          onPress={() => onChoose(2)}
          color= '#000'
          title='OR'
          accessibilityLabel="Learn more about this button"/>
      </View>
      <View style={styles.btn}>
        <Button
          onPress={() => onChoose(3)}
          color= '#000'
          title='TREAT'
          accessibilityLabel="Learn more about this button"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    borderRadius: 10,
    height: '12%',
  },
  btn: {
    backgroundColor: 'orange',
    margin: '5%',
    borderRadius: 10,
  }
});
