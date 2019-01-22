import * as React from 'react';
import { Component } from 'react';
import MapView from 'react-native-maps';

import { View, Image, Text, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};

export default class Map extends Component {
    /* public async isRecyclable(item) {
        console.log(item);
        const response = await fetch(
          `https://api.waqi.info/map/bounds/?latlng=39.379436,116.091230,40.235643,116.784382&token=demo`,
          {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          }
        );
        const parsed = await response.json();
        console.log(parsed);
    } */
    public render() {
        return (
            <View styles={ styles.container }>
                <MapView
                    region={{
                        latitude: 40.7051,
                        longitude: -74.0093,
                        latitudeDelta: 0.0922 / 7,
                        longitudeDelta: 0.0421 / 7,
                    }}
                    style={ styles.map }
                    //apikey={GOOGLE_MAPS_API_KEY}
                    provider="google"
                    showsUserLocation={true}
                    followsUserLocation={true}
                    showsMyLocationButton={true}
                />
                <View style={ styles.textContainer }>
                    <GooglePlacesAutocomplete
                        placeholder='Enter Location'
                        minLength={2}
                        autoFocus={false}
                        returnKeyType={'default'}
                        fetchDetails={true}
                        styles={{
                            textInputContainer: {
                            backgroundColor: 'rgba(0,0,0,0)',
                            borderTopWidth: 0,
                            borderBottomWidth:0
                            },
                            textInput: {
                            marginLeft: 0,
                            marginRight: 0,
                            height: 38,
                            color: '#5d5d5d',
                            fontSize: 16
                            },
                            predefinedPlacesDescription: {
                            color: '#1faadb'
                            },
                        }}
                        currentLocation={false}
                        query={{
                            // available options: https://developers.google.com/places/web-service/autocomplete
                            key: GOOGLE_API_KEY,
                            language: 'en', // language of the results
                            types: '(cities)' // default: 'geocode'
                        }}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    textContainer: {
      backgroundColor: 'white',
      borderRadius: 4,
      marginHorizontal: 40,
      marginVertical: 20,
      padding: 10,
    },
    specialMarker: {
      zIndex: 1,
    },
  });