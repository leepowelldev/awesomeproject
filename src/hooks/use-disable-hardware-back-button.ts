import { useCallback, useEffect, useState } from 'react';
import { BackHandler } from 'react-native';

function useHardwareBackButton(onBackPress?: () => void) {
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (onBackPress) {
          onBackPress();
        }
        return isDisabled;
      }
    );
    return subscription.remove;
  }, [onBackPress, isDisabled]);

  const enable = useCallback(() => {
    setIsDisabled(false);
  }, []);

  const disable = useCallback(() => {
    setIsDisabled(true);
  }, []);

  return { enable, disable };
}

export { useHardwareBackButton };
