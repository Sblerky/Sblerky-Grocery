import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GroceryList from './src/home';
import ItemList from './src/list';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={GroceryList}
          options={{title: 'Liste de course'}}
        />
        <Stack.Screen
          name="List"
          component={ItemList}
          options={{title: 'Articles ajoutés'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
