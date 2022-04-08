import React, {useState} from 'react';
import {FlatList, Text, View, Pressable} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {getAllItems, unselectAllItems, ITEM_LIST} from '../utils';
import styles from '../style';

const GroceryItem = props => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.list_item_view}>
      <CheckBox
        value={isSelected}
        onValueChange={setSelection}
        tintColors={{true: '#b8babe', false: '#b8babe'}}
      />
      <Text style={isSelected ? styles.home_item_text : styles.list_item_text}>
        {props.name}
      </Text>
    </View>
  );
};

const GroceryList = ({navigation}) => {
  return (
    <View style={styles.list_view}>
      <FlatList
        data={getAllItems(ITEM_LIST).filter(obj => {
          return obj.is_selected === true;
        })}
        renderItem={({item}) => <GroceryItem name={item.name} />}
      />
      <Pressable
        onPress={() => navigation.navigate('List')}
        style={styles.home_add_button}>
        <Text style={styles.home_button_text}>📑</Text>
      </Pressable>
      <Pressable
        onPress={() => unselectAllItems(ITEM_LIST)}
        style={styles.home_delete_button}>
        <Text style={styles.home_button_text}>🗑️</Text>
      </Pressable>
    </View>
  );
};

export default GroceryList;
