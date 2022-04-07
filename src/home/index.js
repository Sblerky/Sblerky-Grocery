import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View, Button} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

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
        data={[
          {key: 'Item 1'},
          {key: 'Item 2'},
          {key: 'Item 3'},
          {key: 'Item 4'},
        ]}
        renderItem={({item}) => <GroceryItem name={item.key} />}
      />
      <Button
        title="+"
        onPress={() => navigation.navigate('List', {name: 'Jane'})}
      />
    </View>
  );
};

export default GroceryList;
