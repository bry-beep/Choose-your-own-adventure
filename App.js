import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Button, TouchableOpacity, Image, ImageBackground, View, SafeAreaView } from 'react-native';
import {
  useFonts,
  Eater_400Regular
} from '@expo-google-fonts/eater';
// import { Icon } from '@mdi/react';
// import { mdiPumpkin, mdiCash, mdiKnife } from '@mdi/js';
import ChooseButtons from './components/ChooseButtons.jsx';
import Stages from './components/Stages.jsx';

export default function App(props) {
  let [fontsLoaded] = useFonts({
    Eater_400Regular,
  });

  const [isNotStarted, setIsNotStarted] = useState(true);
  const [choice, setChoice] = useState(0);
  const [moneyLeft, setMoneyLeft] = useState(50);
  const [boughtTool, setBoughtTool] = useState(false);
  const [choseRed, setChoseRed] = useState(false);
  const [choseBlue, setChoseBlue] = useState(false);
  const [hasPumpkin, setHasPumpkin] = useState(false);
  const [isLoser, setIsLoser] = useState(false);

  useEffect(() => {
    choice !== 0 ? setIsNotStarted(false) : choice === 0 ? setIsNotStarted(true) : null;
    if (choice === 0) {
      setIsLoser(false);
      setBoughtTool(false);
      setMoneyLeft(50);
      setChoseRed(false);
      setChoseBlue(false);
    }
  }, [choice]);

  return (
    (fontsLoaded &&
    <SafeAreaView style={styles.container}>
      {isNotStarted ?
        <>
          <Text style={styles.txt}>CHOOSE CAREFULLY</Text>
          <ChooseButtons onChoose={setChoice}></ChooseButtons>
        </> :
          <SafeAreaView>
            <View style={styles.btn}>
              <TouchableOpacity
                onPress={() => setChoice(0)}>
                <Text style={{ fontSize: 16, paddingTop: 3, fontFamily: 'Eater_400Regular' }}>Restart</Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 16, paddingTop: 3, fontFamily: 'Eater_400Regular' }}>Inventory: 💵 {moneyLeft}</Text>
              {(boughtTool && !isLoser) &&
                <Text style={{ paddingTop: 10 }}>🗡</Text>
              }
              {choseRed ?
                <Text style={{ paddingTop: 10 }}>🍎</Text> :
                choseBlue ?
                <Text style={{ paddingTop: 10 }}>🫐</Text> :
                null
              }
              {!isLoser &&
                <Text style={{ paddingTop: 10 }}>🎃</Text>
              }
            </View>
            <Stages setTool={setBoughtTool} money={moneyLeft} spend={setMoneyLeft} lose={setIsLoser} red={setChoseRed} blue={setChoseBlue} />
          </SafeAreaView >
      }
      <StatusBar style="auto" />
    </SafeAreaView >
    )
  );
}
// spendMoney={setMoneyLeft} addPumpkin={setHasPumpkin} addTool={setBoughtTool} won={setIsWinner} lose={setIsLoser}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#473b3b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    paddingTop: 35,
    paddingBottom: 20,
    fontFamily: 'Eater_400Regular',
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
    fontFamily: 'Eater_400Regular',
  }
  // splash: {
  //   image: './assets/splash.png',
  //   resizeMode: 'contain',
  //   backgroundColor: '#000000'
  // },
});
