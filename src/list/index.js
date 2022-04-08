import React, {useState} from 'react';
import {
  FlatList,
  TextInput,
  Text,
  View,
  KeyboardAvoidingView,
  Pressable,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {
  getAllItems,
  addItemToList,
  modifyItemState,
  deleteItemFromList,
  ITEM_LIST,
} from '../utils';
import styles from '../style';

const ListItem = props => {
  const [isSelected, setSelection] = useState(props.isSelected);
  return (
    <View style={styles.list_item_view}>
      <CheckBox
        value={isSelected}
        onValueChange={() => {
          modifyItemState(props.name, ITEM_LIST);
          setSelection(!isSelected);
        }}
        tintColors={{true: '#5662f6', false: '#b8babe'}}
      />
      <Text style={styles.list_item_text}>{props.name}</Text>
      <Pressable
        onPress={() => {
          deleteItemFromList(props.name, ITEM_LIST);
        }}
        style={styles.list_item_button}>
        <Text style={styles.list_item_button_text}>X</Text>
      </Pressable>
    </View>
  );
};

const ItemList = ({navigation, route}) => {
  const [textInput, setTextInput] = useState('');
  return (
    <View style={styles.list_view}>
      <FlatList
        data={getAllItems(ITEM_LIST)}
        renderItem={({item}) => (
          <ListItem name={item.name} isSelected={item.is_selected} />
        )}
        contentContainerStyle={styles.list_flatlist}
      />
      <KeyboardAvoidingView style={styles.list_item_keyboard}>
        <TextInput
          placeholder="Nouvel article..."
          placeholderTextColor="#6d7078"
          onSubmitEditing={event => {
            if (event.nativeEvent.text !== '') {
              addItemToList(event.nativeEvent.text, ITEM_LIST);
              setTextInput('');
            }
          }}
          style={styles.list_item_input}
          value={textInput}
          onChangeText={setTextInput}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default ItemList;
