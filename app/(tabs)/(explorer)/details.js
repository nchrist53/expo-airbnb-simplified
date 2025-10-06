import { Stack, useLocalSearchParams } from 'expo-router';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../../constants/theme.js';

export default function ExplorerDetail() {
  const { id, title, prix, image, description} = useLocalSearchParams();

  return (
    <>
      <Stack.Screen 
        options={{
          title: title + " - Détails" || 'Détails du logement',
        }} 
      />
      <SafeAreaView style={[styles.container, styles.containerPadding]} >
        <Image source={{ uri: image }} style={{ width: 300, height: 300, marginBottom: 20 }} />
        <View style={styles.logements.logement.logementInfo}>
            <Text style={styles.logements.logement.logementInfo.title}>{title}</Text>
            <Text style={styles.logements.logement.logementInfo.prix}>{prix} €</Text>
            <Text style={styles.logements.logement.logementInfo.description}>{description}</Text>
        </View>
      </SafeAreaView>
    </>
  );
}