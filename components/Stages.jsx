
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Button, Image, View, ImageBackground, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
//import { getStages, setupDatabaseAsync, setupStagesAsync } from './database.js';
import TypeWriter from 'react-native-typewriter';
const { height, width } = Dimensions.get('screen');
import { Pages, Options } from './Pages.js';
import Winner from './Winner.jsx';
import {
  useFonts,
  ZillaSlab_400Regular,
} from '@expo-google-fonts/zilla-slab'

export default function Stages( {setTool, spend, money, lose, red, blue} ) {
  let [fontsLoaded] = useFonts({
    ZillaSlab_400Regular,
  });
  const [page, setPage] = useState('A');

  const [currentSituation, setCurrentSituation] = useState(Pages.filter((x) => x.pageId === 'A')[0]);
  const [options, setOptions] = useState(Options.filter((x) => x.optionId.includes('A')));
  const [isWinner, setIsWinner] = useState(false);


  useEffect(() => {
    setCurrentSituation(Pages.filter((x) => x.pageId === `${page}`)[0]);
    if(page === 'D') {
      spend(money - 5);
      setTool(true);
    } else if (page === 'H') {
      spend(money - 10);
    } else if (page === 'K') {
      red(true);
      lose(true);
    } else if (page === 'L') {
      blue(true);
    } else if (page === 'O') {
      setIsWinner(true);
    } else if(page === 'G' ||
        page ==='N' ||
        page ==='P' ||
        page ==='Z' ||
        page ==='X' ||
        page ==='Y' ||
        page ==='W'
        ) {
      lose(true);
    }
  }, [page]);

  useEffect(() => {
    setOptions(Options.filter((x) => x.optionId.includes(`${page}`)));
  }, [currentSituation]);

  const setNewSituation = ((clickedOption) => {
    switch (clickedOption) {
      case 'A1' :
        setPage('B');
        break;
      case 'A2' :
        setPage('Z');
        break;
      case 'A3' :
        setPage('C');
        break;
      case 'B1' :
        setPage('X');
        break;
      case 'B2' :
        setPage('Z');
        break;
      case 'B3' :
        setPage('C');
        break;
      case 'C1' :
        setPage('D');
        break;
      case 'C2' :
        setPage('E');
        break;
      case 'C3' :
        setPage('Y');
        break;
      case 'D1' :
        setPage('G');
        break;
      case 'D2' :
        setPage('H');
        break;
      case 'D3' :
        setPage('I');
        break;
      case 'E1' :
        setPage('W');
        break;
      case 'E2' :
        setPage('C');
        break;
      case 'H1' :
        setPage('J');
        break;
      // case 'H2' :
      //   setPage('');
      //   break;
      case 'H3' :
        setPage('M');
        break;
      case 'J1' :
        setPage('K');
        break;
      case 'J2' :
        setPage('L');
        break;
      case 'M1' :
        setPage('N');
        break;
      case 'M2' :
        setPage('N');
        break;
      case 'I1' :
        setPage('O');
        break;
      case 'I2' :
        setPage('P');
        break;
      default: setPage('A');
    }
  });

  return (
    (fontsLoaded &&
    <SafeAreaView style={styles.container}>
      <View >
      <TypeWriter typing={1} fixed={true} maxDelay={10} style={styles.txt}>{currentSituation.situation}</TypeWriter>
      </View>
      {isWinner ?
        <Winner /> :
      <>
      <Image source={currentSituation.url} style={styles.storyImg} />
      {options.map((option) => {
        return <TouchableOpacity
          style={styles.btn}
          onPress={(event) => setNewSituation(option.optionId)}
          key={option.optionId}>
          <Text style={styles.txt2} >{option.text}</Text>
          </TouchableOpacity>
      })}
      </>
      }
    </SafeAreaView>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    color: 'green',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 18,
    fontFamily: 'ZillaSlab_400Regular',
  },
  txt2: {
    color: 'black',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 18,
    fontFamily: 'ZillaSlab_400Regular',
  },
  storyImg: {
    height: '60%',
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    aspectRatio: 1,
  },
  btn: {
    backgroundColor: 'orange',
    borderRadius: 10,
    padding:10,
    margin: 2,
  }

});
