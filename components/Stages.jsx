
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Button, Image, View } from 'react-native';
//import { getStages, setupDatabaseAsync, setupStagesAsync } from './database.js';

export default function Stages(props) {

  const [currentSituation, setCurrentSituation] = useState(`It\'s ${new Date(Date.now()).toDateString()}. You just finished your Toy Problem and realize you ran out of pumpkins! You go to the local pumpkin patch. You find a nice pumpkin... but realize no one is around.`);
  const [options, setOptions] = useState([{ text: 'Steal the pumpkin!', id: 1 }, { text: 'Yell out for someone.', id: 2 }, { text: 'Check out the sales stand.', id: 3 }]);

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{currentSituation}</Text>
      <Image style={styles.storyImg} source={require('../assets/pumpkinPatch.png')}></Image>
      {options.map((option) => {
        return <Button
          onPress={() => setNewSituation(option.id)}
          color='green'
          title={option.text}
          key={option.id}
          accessibilityLabel="Learn more about this button" />
      })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    color: 'green',
    fontSize: 15,
    //fontFamily: 'spooky',

  },
  storyImg: {
    height: '60%',
    width: '100%',
    aspectRatio: 1,
  }

});
