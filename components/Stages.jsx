
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Button, Image, View, ImageBackground } from 'react-native';
//import { getStages, setupDatabaseAsync, setupStagesAsync } from './database.js';
import TypeWriter from 'react-native-typewriter';
import { Pages, Options } from './Pages.js';

export default function Stages( {setTool, spend, money} ) {
  const [page, setPage] = useState('A');

  const [currentSituation, setCurrentSituation] = useState(Pages.filter((x) => x.pageId === 'A')[0]);
  const [options, setOptions] = useState(Options.filter((x) => x.optionId.includes('A')));

  useEffect(() => {
    setCurrentSituation(Pages.filter((x) => x.pageId === `${page}`)[0]);
    if(page === 'D') {
      spend(money - 5);
      setTool(true);
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
        setPage('');
        break;
      case 'D2' :
        setPage('');
        break;
      case 'E1' :
        setPage('W');
        break;
      case 'E2' :
        setPage('');
        break;

      default: setPage('A');
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.container}>
      <TypeWriter typing={1} fixed={true} style={styles.txt}>{currentSituation.situation}</TypeWriter>
      </View>
      <Image source={currentSituation.url} style={styles.storyImg} />
      {options.map((option) => {
        return <Button
          onPress={(event) => setNewSituation(option.optionId)}
          color='green'
          title={option.text}
          key={option.optionId}
          accessibilityLabel="Learn more about this button" />
      })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    color: 'green',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 15,
    //fontFamily: 'spooky',

  },
  storyImg: {
    height: '60%',
    width: '100%',
    aspectRatio: 1,
  }

});
