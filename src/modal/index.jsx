import React, {useRef, useMemo, useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetScrollView,
  BottomSheetFooter,
} from '@gorhom/bottom-sheet';
import {withModalProvider} from './withModalProvider';
import {useNavigation} from '@react-navigation/native';
import {useBackHandler} from '@react-native-community/hooks';

const App = () => {
  // hooks
  const {goBack} = useNavigation();
  // state
  const [disableBack, setDisableBack] = useState(true);

  // ref
  const bottomSheetModalRef = useRef(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  const renderBackdrop = props => (
    <BottomSheetBackdrop
      {...props}
      opacity={0.3}
      pressBehavior={'close'}
      disappearsOnIndex={-1}
    />
  );
  useEffect(() => {
    handlePresentModalPress();
    return () => {
      setDisableBack(false);
    };
  }, []);

  useBackHandler(() => {
    if (disableBack) {
      bottomSheetModalRef.current.close();
    }
    return disableBack;
  });

  return (
    <View style={{flex: 1}}>
      <Text>Awesome 🎉</Text>
      <BottomSheetModal
        enablePanDownToClose
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={[150, 300]}
        onDismiss={() => goBack()}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
        footerComponent={props => (
          <BottomSheetFooter {...props}>
            <Text>footer</Text>
          </BottomSheetFooter>
        )}>
        <BottomSheetScrollView>
          <View style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheetScrollView>
      </BottomSheetModal>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default withModalProvider(App);
