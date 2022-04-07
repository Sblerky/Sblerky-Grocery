import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View, Button} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {getAllItems, ITEM_LIST} from '../utils';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const GroceryItem = props => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View>
      <CheckBox
        value={isSelected}
        onValueChange={setSelection}
        style={styles.checkbox}
      />
      <Text>{props.name}</Text>
    </View>
  );
};

const GroceryList = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={getAllItems(ITEM_LIST).filter(obj => {
          return obj.is_selected === true;
        })}
        renderItem={({item}) => <GroceryItem name={item.name} />}
      />
      <Button
        title="+"
        onPress={() => navigation.navigate('List')}
      />
    </View>
  );
};

export default GroceryList;
