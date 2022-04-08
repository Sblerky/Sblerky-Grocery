import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  list_item_view: {
    flexDirection: 'row',
    backgroundColor: '#41454b',
    borderRadius: 10,
    marginHorizontal: '5%',
    paddingLeft: '5%',
    marginTop: '5%',
  },
  list_item_input: {
    backgroundColor: '#41454b',
    borderRadius: 10,
    marginHorizontal: '5%',
    paddingLeft: '5%',
    color: 'white',
  },
  list_item_keyboard: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
  list_view: {
    flex: 1,
    backgroundColor: '#37393e',
  },
  list_flatlist: {
    paddingBottom: '20%',
    backgroundColor: '#37393e',
  },
  list_item_text: {
    color: 'white',
    paddingTop: '2%',
    paddingLeft: '4%',
    fontWeight: 'bold',
  },
  list_item_button: {
    backgroundColor: '#f15958',
    width: '10%',
    height: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    position: 'absolute',
    right: '1%',
  },
  list_item_button_text: {
    color: 'white',
    alignSelf: 'center',
    paddingTop: '15%',
    fontWeight: 'bold',
  },
  home_add_button: {
    backgroundColor: '#5662f6',
    width: 75,
    height: 75,
    alignSelf: 'center',
    borderRadius: 75 / 2,
    position: 'absolute',
    bottom: '20%',
    right: '5%',
  },
  home_delete_button: {
    backgroundColor: '#f15958',
    width: 75,
    height: 75,
    alignSelf: 'center',
    borderRadius: 75 / 2,
    position: 'absolute',
    bottom: '5%',
    right: '5%',
  },
  home_button_text: {
    color: 'white',
    alignSelf: 'center',
    paddingTop: '17%',
    fontSize: 35,
  },
  home_item_text: {
    color: '#b8babe',
    paddingTop: '2%',
    paddingLeft: '4%',
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
  },
});

export default styles;
