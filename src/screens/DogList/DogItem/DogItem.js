import React from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';

export default function DogItem({breed, image, onPressDogItem}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPressDogItem}
        style={styles.imageMainContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
          />
        </View>

        <View style={styles.dogTextContainer}>
          <Text style={styles.dogText}>{breed}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E7D2CC',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  imageMainContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagecontainer: {flex: 1},
  image: {
    borderRadius: 10,
    width: 100,
    height: 100,
  },
  dogTextContainer: {flex: 1, alignItems: 'flex-end', marginRight: 30},
  dogText: {
    fontSize: 20,
    paddingLeft: 16,
    textTransform: 'uppercase',
    alignItems: 'center',
    color: '#647C90',
  },
});
