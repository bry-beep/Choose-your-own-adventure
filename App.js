import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Button, Image, ImageBackground, View, SafeAreaView } from 'react-native';
// import { Icon } from '@mdi/react';
// import { mdiPumpkin, mdiCash, mdiKnife } from '@mdi/js';
import ChooseButtons from './components/ChooseButtons.jsx';
import Stages from './components/Stages.jsx';
import Winner from './components/Winner.jsx';

export default function App(props) {

  const [isNotStarted, setIsNotStarted] = useState(true);
  const [choice, setChoice] = useState(0);
  const [moneyLeft, setMoneyLeft] = useState(50);
  const [boughtTool, setBoughtTool] = useState(false);
  const [hasPumpkin, setHasPumpkin] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  useEffect(() => {
    choice !== 0 ? setIsNotStarted(false) : choice === 0 ? setIsNotStarted(true) : null;
  }, [choice]);

  return (
    <SafeAreaView style={styles.container}>
      {isNotStarted ?
        <>
          <Text style={styles.txt}>CHOOSE CAREFULLY</Text>
          <ChooseButtons onChoose={setChoice}></ChooseButtons>
        </> : isWinner ?
          <Winner ></Winner> :
          <SafeAreaView>
            <View style={styles.btn}>
              <Button
                onPress={() => setChoice(0)}
                color='#000'
                title='Restart'
                accessibilityLabel="Learn more about this Restart button" />
              <Button
                // onPress={}
                color='#000'
                title='Inventory: '
                accessibilityLabel="Learn more about this Inventory button" />
              <Text style={{ paddingTop: 10 }}>💵 {moneyLeft}</Text>
              {boughtTool &&
                <Text style={{ paddingTop: 10 }}>🗡</Text>
              }
              {hasPumpkin &&
                <Text style={{ paddingTop: 10 }}>🎃</Text>
              }
            </View>
            <Stages />
          </SafeAreaView >
      }
      <StatusBar style="auto" />
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#473b3b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    paddingTop: '40%',
    paddingBottom: 20,
    fontWeight: 'bold',
    fontSize: 30,
    color: 'green',
  },
  btn: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'orange',
    justifyContent: 'space-between',
    borderRadius: 10,
    paddingRight: 15,
    paddingLeft: 15,
  }
  // splash: {
  //   image: './assets/splash.png',
  //   resizeMode: 'contain',
  //   backgroundColor: '#000000'
  // },
});
