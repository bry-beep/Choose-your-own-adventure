import React from 'react';
import { ActivityIndicator, StyleSheet, Text, Button, Image, ImageBackground, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import MapView from 'react-native-maps';

export default function Winner(props) {
  const region = {
    latitude: 37.773972,
    longitude: -122.431297,
    latitudeDelta: 0.2,
    longitudeDelta: 0.3,
  }

  return (
    <View >
      <Text style={styles.txt}>SPOOKTACULAR! You got your pumpkin! Want to get some more? </Text>
      <GooglePlacesAutocomplete
        placeholder="Pumpkin Patch"
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
      />
      <MapView
        initialRegion={region}
        showsUserLocation={true}
        showsCompass={true}
        rotateEnabled={true}
        style={tw`h-3/4`} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: 'orange',
    margin: '5%',
    borderRadius: 10,
  },
  txt: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 30,
    paddingBottom: 30,
  },

});
