import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {flex: 1, marginTop: '20%'},
  itemSeparator: {height: 10},
  listFooter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
  },
  search: {
    height: 50,
    backgroundColor: '#e0dede',
    margin: 10,
    borderRadius: 10,
    paddingLeft: 5,
  },
  textInputContainer: {flex: 1, marginBottom: 20},
  noMatchingSearchContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyListContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  loaderContainer: {marginTop: 300},
});
