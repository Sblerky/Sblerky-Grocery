import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

const deleteData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};

const retrieveData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.log(error);
  }
};

const getAllItems = list_param => {
  const [itemList, setItemList] = useState([]);
  let stringified_items = retrieveData(list_param);
  stringified_items.then(value => {
    if (value != null) {
      setItemList(JSON.parse(value));
    }
  });
  return itemList;
};

const addItemToList = (item, list_param) => {
  let stringified_items = retrieveData(list_param);

  stringified_items.then(value => {
    let string_list;
    if (value == null) {
      let new_list = [item];
      string_list = JSON.stringify(new_list);
    } else {
      let itemList = JSON.parse(value);
      itemList.push(item);
      string_list = JSON.stringify(itemList);
    }
    let store_promise = storeData(list_param, string_list);
    store_promise.then(() => {});
  });
};

const ITEM_LIST = 'item_list';
const GROCERY_LIST = 'grocery_list';

export {getAllItems, addItemToList, deleteData, ITEM_LIST, GROCERY_LIST};
