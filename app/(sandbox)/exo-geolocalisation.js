import { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import * as Location from 'expo-location';

export default function ExoGeolocalisation() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission de localisation refusé...');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    getCurrentLocation();
  }, []);

  let text = 'Récupération en cours...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = "";
  }

    useEffect(() => {
        async function getAddressFromCoords() {
          if (Platform.OS === "web") {
            if (location) {
              const longitude = location.coords.longitude;
              const latitude = location.coords.latitude;
              const APIUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
              
              try {
                const response = await fetch(APIUrl);
                const data = await response.json();
                if (data) {
                  setLocation((prev) => ({
                  ...prev,
                  address: { formattedAddress: data.address.road + ", " + data.address.postcode + " " + data.address.town + ", " + data.address.country },
                  }));
                }
              } catch (error) {
                console.error("Error fetching address:", error);
              }
            }
          } else {
            if (location) {
                let { coords } = location;
                let address = await Location.reverseGeocodeAsync({
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                });
                if (address.length > 0) {
                    setLocation((prev) => ({
                        ...prev,
                        address: address[0],
                    }));
                }
            }
          }
        }

        getAddressFromCoords();
    }, [location]);

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>
                {location?.address
                    ? ("Vous êtes à :\n\n" + location.address.formattedAddress)
                    : text}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});