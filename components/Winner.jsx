import React from 'react';
import { View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

export default function Winner(props) {

  const region = {
    latitude: 37.787600,
    longitude: -122.396630,
    latitudeDelta: 0.04,
    longitudeDelta: 0.05,
  }

  return (
    <View style={{width: '100%', paddingTop: 5}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
        showsUserLocation={true}
        showsCompass={true}
        rotateEnabled={true}
        style={tw`h-3/4`}>
        <Marker
          coordinate={{latitude: 37.734310, longitude: -122.475600}}
          title='The Great Pumpkin Patch'>
        </Marker>
        <Marker
          coordinate={{latitude: 37.806750, longitude: -122.430760}}
          title='The Guardsman Pumpkin Patch'>
        </Marker>
        <Marker
          coordinate={{latitude: 37.738740, longitude: -122.406700}}
          title='Tree Farm and Pumpkin Patch'>
        </Marker>
      </MapView>
    </View>
  );
}
