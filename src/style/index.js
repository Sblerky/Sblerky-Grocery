import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  list_item_view: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'thistle',
  },
  list_item_input: {
    backgroundColor: 'grey',
  },
  list_item_keyboard: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderWidth: 1,
    borderColor: 'thistle',
  },
  list_view: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'thistle',
  },
  list_flatlist: {
    paddingBottom: '20%',
  },
});

export default styles;
