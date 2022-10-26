import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Button} from 'react-native';

const App = () => {
  const {navigate} = useNavigation();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="open modal" onPress={() => navigate('modal')} />
    </View>
  );
};

export default App;
