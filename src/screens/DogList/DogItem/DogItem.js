import React from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';

export default function DogItem({breed, image, onPressDogItem}) {
  return (
    <View
      style={{
        backgroundColor: '#E7D2CC',
        borderRadius: 10,
        marginHorizontal: 10,
      }}>
      <TouchableOpacity
        onPress={onPressDogItem}
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{flex: 1}}>
          <Image
            source={{
              uri: image,
            }}
            style={{width: 100, height: 100}}
          />
        </View>

        <View style={{flex: 1, alignItems: 'flex-start'}}>
          <Text
            style={{
              fontSize: 20,
              paddingLeft: 16,
              textTransform: 'uppercase',
              alignItems: 'center',
              color: '#647C90',
            }}>
            {breed}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemSeparator: {height: 10},
  listFooter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
  },
  search: {
    height: 40,
    backgroundColor: '#e0dede',
    margin: 10,
    borderRadius: 10,
    paddingLeft: 5,
  },
});
