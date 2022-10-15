import React from 'react';
import {
  Button,
  View,
  Image,
  Text,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

export default function DetailsScreen({navigation, route}) {
  const {item} = route.params;
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={[styles.image, {width: width}]}
          source={{
            uri: item.image,
          }}
        />
      </View>

      <View style={styles.dogTextContainer}>
        <Text style={styles.dogText}>{item?.breed}</Text>
      </View>

      <View style={styles.dismissContainer}>
        <Button onPress={() => navigation.goBack()} title="Dismiss" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  imageContainer: {flex: 1, alignItems: 'center'},
  image: {flex: 1},
  dogTextContainer: {
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dogText: {fontSize: 36, textTransform: 'uppercase', paddingTop: 16},
  dismissContainer: {height: '10%', justifyContent: 'center'},
});
