import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { imagePaths } from '../themes/ImagePath';
import { useNavigation } from '@react-navigation/native';
import ImageZoom from 'react-native-image-pan-zoom';

const { width, height } = Dimensions.get('window');

export default function Home() {
  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const navigation = useNavigation();
  const [selectedAvatar, setSelectedAvatar] = useState(imagePaths.avatar1);

  return (
    <SafeAreaView style={styles.container}>
      {/* <MapView
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation
        showsCompass
      >
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }}>
          <Image
            source={{ uri: 'https://ui-avatars.com/api/?name=Player&background=f9c2ff&color=000' }}
            style={styles.avatarMarker}
          />
        </Marker>
        <Marker coordinate={{ latitude: 37.7887, longitude: -122.4335 }}>
          <View style={styles.gymMarker} />
        </Marker>
        <Marker coordinate={{ latitude: 37.7875, longitude: -122.4315 }}>
          <View style={styles.pokestopMarker} />
        </Marker>
      </MapView> */}
      <ImageZoom
        cropWidth={width}
        cropHeight={height}
        imageWidth={width}
        imageHeight={height}
      >
        <Image
          style={{ width: width, height: height }}
          source={imagePaths.backImg}
          resizeMode="cover"
        />
      </ImageZoom>

      {/* Top Banner */}
      <View style={styles.topBanner}>
        <Text style={styles.bannerText}>CHECK OUT A POKÉSTOP</Text>
      </View>

      {/* Bottom UI */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity
          style={styles.avatarWrapper}
          onPress={() =>
            navigation.navigate('AvatarScreen', {
              setSelectedAvatar: setSelectedAvatar,
            })
          }
        >
          <Image source={selectedAvatar} style={styles.avatar} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={imagePaths.pokeball} style={styles.pokeball} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.avatarWrapper}>
          <Image
            source={{
              uri: 'https://ui-avatars.com/api/?name=Player&background=f9c2ff&color=000',
            }}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>

      {/* New Feature Popup */}
      <View style={styles.popupTag}>
        <Text style={styles.popupText}>New: Schedule Raids!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  topBanner: {
    position: 'absolute',
    top: 60,
    alignSelf: 'center',
    backgroundColor: '#f88',
    padding: 10,
    borderRadius: 20,
  },
  bannerText: {
    fontWeight: 'bold',
    color: 'white',
  },
  bottomMenu: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pokeball: {
    width: 60,
    height: 60,
  },
  avatarWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  popupTag: {
    position: 'absolute',
    bottom: 130,
    alignSelf: 'center',
    backgroundColor: '#f9c2ff',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  popupText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  avatarMarker: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  gymMarker: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  pokestopMarker: {
    width: 20,
    height: 20,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  profileButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  profileAvatar: { width: '100%', height: '100%' },
});
