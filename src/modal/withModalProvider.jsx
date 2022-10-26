import React, {FC} from 'react';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

/**
 *
 * @param {FC} Component
 * @returns
 */
export const withModalProvider = Component => () =>
  (
    <BottomSheetModalProvider>
      <Component />
    </BottomSheetModalProvider>
  );
