import React, {useState, useEffect, useCallback} from 'react';
import {
  FlatList,
  TextInput,
  Text,
  ActivityIndicator,
  View,
  StyleSheet,
  Platform,
  AppState,
} from 'react-native';
import DogItem from './DogItem/DogItem';
import {useSelector, useDispatch} from 'react-redux';
import {
  selectDogListData,
  selectDogListLoading,
} from '../../state/dogList/dogListSelectors';
import {dogListSagaAction} from '../../state/dogList/dogListActions';
import {useNavigation} from '@react-navigation/native';
import {useRequestAppPermissions} from '../../utils/customHooks/useRequestAppPermissions';
import styles from './DogListStyles';

const DogList = () => {
  const navigation = useNavigation();

  const dogListLoading = useSelector(selectDogListLoading);
  const dogListData = useSelector(selectDogListData);
  const [filteredList, setFilteredList] = useState(dogListData);
  const [search, setSearch] = useState('');
  const [hasReachedEndOfList, setHasReachedEndOfList] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dogListSagaAction());
  }, []);

  useRequestAppPermissions();

  const isNoMtchingSearch = search !== '' && !dogListLoading;
  const isEmptyDogList = dogListLoading === false && dogListData?.length !== 0;

  const onPressDogItem = useCallback(item => {
    navigation.navigate('DogDetails', {item});
  }, []);

  const RenderFooterText = () =>
    hasReachedEndOfList ? (
      <View style={styles.listFooter}>
        <Text>End of the dog list</Text>
      </View>
    ) : null;

  const Loader = () => (
    <View
      style={{
        borderWidth: 1,
      }}>
      {isNoMtchingSearch ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>No matching dogs</Text>
        </View>
      ) : isEmptyDogList ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Empty List of DOGS</Text>
        </View>
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
    </View>
  );

  return (
    <View style={{borderWidth: 1, flex: 1, marginTop: '20%'}}>
      <FlatList
        data={search === '' ? dogListData : filteredList}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        ListHeaderComponent={
          <TextInput
            style={styles.search}
            value={search}
            onChangeText={text => {
              setSearch(text);
              setFilteredList(
                dogListData?.filter(
                  item =>
                    item.breed.toLowerCase().indexOf(text.toLowerCase()) > -1,
                ),
              );
            }}
            placeholder="Search"
          />
        }
        ListFooterComponent={<RenderFooterText />}
        keyExtractor={(item, index) => item?.breed + index}
        renderItem={({item}) => {
          return (
            <DogItem
              breed={item.breed}
              image={item.image}
              onPressDogItem={() => onPressDogItem(item)}
            />
          );
        }}
        ListEmptyComponent={<Loader />}
        // maxToRenderPerBatch={2}
        // onEndReachedThreshold={0.1}
        // initialNumToRender={8}
        // maxToRenderPerBatch={2}
        // onEndReachedThreshold={0.1}
        // onMomentumScrollBegin={this.onMomentumScrollBegin}
        onEndReached={() => setHasReachedEndOfList(true)}
      />
    </View>
  );
};



export default DogList;
