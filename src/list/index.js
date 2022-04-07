import React, {useState} from 'react';
import {
  FlatList,
  TextInput,
  Text,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {getAllItems, addItemToList, modifyItemState, ITEM_LIST} from '../utils';
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
      />
      <Text>{props.name}</Text>
    </View>
  );
};

const ItemList = ({navigation, route}) => {
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
          onSubmitEditing={event => {
            event.nativeEvent.text !== '' &&
              addItemToList(event.nativeEvent.text, ITEM_LIST);
          }}
          style={styles.list_item_input}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default ItemList;
