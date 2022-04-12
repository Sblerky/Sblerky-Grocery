import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
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
    } else {
      console.log('empty');
      setItemList([{name: 'Ajoute un item !', is_selected: true}]);
    }
  });
  return itemList.sort(sortList);
};

const addItemToList = (item, list_param) => {
  let stringified_items = retrieveData(list_param);

  stringified_items.then(value => {
    let string_list;
    if (value == null) {
      let new_list = [{name: item, is_selected: true}];
      string_list = JSON.stringify(new_list);
      let store_promise = storeData(list_param, string_list);
      store_promise.then(() => {});
    } else {
      let already_in = JSON.parse(value).find(obj => {
        return obj.name === item;
      });
      if (!already_in) {
        let itemList = JSON.parse(value);
        itemList.push({name: item, is_selected: true});
        string_list = JSON.stringify(itemList);
        let store_promise = storeData(list_param, string_list);
        store_promise.then(() => {});
      }
    }
  });
};

const modifyItemState = (item, list_param) => {
  let stringified_items = retrieveData(list_param);
  stringified_items.then(value => {
    if (value != null) {
      let already_in = JSON.parse(value).find(obj => {
        return obj.name === item;
      });
      if (already_in) {
        already_in.is_selected = !already_in.is_selected;
        let filtered_list = JSON.parse(value).filter(obj => {
          return obj.name !== item;
        });
        filtered_list.push(already_in);
        let string_list = JSON.stringify(filtered_list);
        let store_promise = storeData(list_param, string_list);
        store_promise.then(() => {});
      }
    }
  });
};

const deleteItemFromList = (item, list_param) => {
  let stringified_items = retrieveData(list_param);
  stringified_items.then(value => {
    if (value != null) {
      let already_in = JSON.parse(value).find(obj => {
        return obj.name === item;
      });
      if (already_in) {
        let filtered_list = JSON.parse(value).filter(obj => {
          return obj.name !== item;
        });
        let string_list = JSON.stringify(filtered_list);
        let store_promise = storeData(list_param, string_list);
        store_promise.then(() => {});
      }
    }
  });
};

const unselectAllItems = list_param => {
  let stringified_items = retrieveData(list_param);
  stringified_items.then(value => {
    if (value != null) {
      let item_list = JSON.parse(value);
      item_list.forEach(obj => {
        obj.is_selected = false;
      });
      let string_list = JSON.stringify(item_list);
      let store_promise = storeData(list_param, string_list);
      store_promise.then(() => {});
    }
  });
};

const sortList = (a, b) => {
  let textA = a.name.toUpperCase();
  let textB = b.name.toUpperCase();
  return textA < textB ? -1 : textA > textB ? 1 : 0;
};

const ITEM_LIST = 'item_list';

export {
  getAllItems,
  addItemToList,
  modifyItemState,
  deleteItemFromList,
  unselectAllItems,
  ITEM_LIST,
};
