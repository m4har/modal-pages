import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

import HomeScreen from './src/home';
import ModalScreen from './src/modal';

const {Navigator, Screen, Group} = createStackNavigator();

const App = () => {
  return (
    <BottomSheetModalProvider>
      <NavigationContainer>
        <Navigator>
          <Group>
            {/* feature app */}
            <Screen name="home" component={HomeScreen} />
          </Group>
          <Group
            screenOptions={{
              presentation: 'transparentModal',
              headerShown: Platform.OS === 'ios',
            }}>
            {/* modal app */}
            <Screen name="modal" component={ModalScreen} />
          </Group>
        </Navigator>
      </NavigationContainer>
    </BottomSheetModalProvider>
  );
};

export default App;
