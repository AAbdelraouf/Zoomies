import React from 'react';
import {Button, View, Image, Text, useWindowDimensions} from 'react-native';

export default function DetailsScreen({navigation, route}) {
  const {item} = route.params;
  const {width} = useWindowDimensions();
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={{height: '40%', alignItems: 'center'}}>
        <Image
          style={{width, height: '100%'}}
          source={{
            uri: item.image,
          }}
        />
      </View>

      <View
        style={{height: '40%', alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{fontSize: 36, textTransform: 'uppercase', paddingTop: 16}}>
          {item?.breed}
        </Text>
      </View>

      <View style={{height: '10%', justifyContent: 'center'}}>
        <Button onPress={() => navigation.goBack()} title="Dismiss" />
      </View>
    </View>
  );
}
